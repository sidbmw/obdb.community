// src/components/BitMappingVisualizer.js
import React, { useMemo, useState } from 'react';

const BitMappingVisualizer = ({ command, onBitSelected }) => {
  const [hoveredSignalId, setHoveredSignalId] = useState(null);

  // Extract signals from command
  const signals = command.parameters.map(param => ({
    id: param.id,
    name: param.name,
    suggestedMetric: param.suggestedMetric,
    // For demo purposes, assume bitOffset and bitLength are available or extracted from the scaling description
    // In a real implementation, you'd parse these from the command data structure
    bitOffset: param.bitOffset || 0,
    bitLength: param.bitLength || 8
  }));

  // Calculate the maximum bit range used by any signal
  const maxBitRange = useMemo(() => {
    return signals.reduce((max, signal) => {
      return Math.max(max, signal.bitOffset + signal.bitLength);
    }, 0);
  }, [signals]);

  // Calculate how many bytes we need to display
  const bytesNeeded = useMemo(() => {
    return Math.ceil(maxBitRange / 8);
  }, [maxBitRange]);

  // Map of bits to signals
  const bitToSignalMap = useMemo(() => {
    const map = {};

    signals.forEach(signal => {
      const bitOffset = signal.bitOffset;
      const bitLength = signal.bitLength;

      for (let i = 0; i < bitLength; i++) {
        map[bitOffset + i] = signal;
      }
    });

    return map;
  }, [signals]);

  // Colors for different signals to make them visually distinguishable
  const colorForSignal = (signal) => {
    const hashCode = (str) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
      }
      return Math.abs(hash);
    };

    const hash = hashCode(signal.id.toString());
    
    // Use golden ratio to distribute hues more evenly
    const goldenRatio = 0.618033988749895;
    const hue = (hash * goldenRatio) % 1;
    
    // Increase saturation and vary lightness based on dark/light mode
    const saturation = 70 + ((hash % 30) - 15); // Vary saturation slightly
    const lightness = isDarkMode() ? 70 + ((hash % 20) - 10) : 85 + ((hash % 10) - 5);
    
    return `hsl(${hue * 360}, ${saturation}%, ${lightness}%)`;
  };

  // Check if dark mode is enabled
  const isDarkMode = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  // Get highlighted style for a bit cell based on whether its signal is hovered
  const getHighlightedStyle = (signal) => {
    if (!signal) return {};

    const isHighlighted = hoveredSignalId === signal.id;
    if (isHighlighted) {
      return {
        border: '2px solid #3b82f6',
        zIndex: 10,
        transform: 'scale(1.05)',
        transition: 'all 0.15s ease'
      };
    }
    return {};
  };

  return (
    <div className="bg-gray-100 rounded-lg p-4 my-4">
      <h3 className="text-sm font-medium mb-3">Bit Mapping Visualization</h3>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Bit grid visualization */}
        <div className="overflow-x-auto">
          <div className="flex flex-col">
            <div className="text-xs text-gray-500 mb-1">Bit index</div>

            {/* Header row for bit indices */}
            <div className="flex">
              <div className="w-6 mr-2"></div>
              {[...Array(8)].map((_, bitIndex) => (
                <div key={bitIndex} className="w-7 text-center text-xs font-bold">
                  {bitIndex}
                </div>
              ))}
            </div>

            {/* Byte rows */}
            {[...Array(bytesNeeded)].map((_, byteIndex) => (
              <div key={byteIndex} className="flex mt-0.5">
                <div className="w-6 mr-2 text-right text-xs font-bold">
                  {byteIndex}
                </div>

                {/* Bits in each byte */}
                {[...Array(8)].map((_, bitIndex) => {
                  const absoluteBitIndex = (byteIndex * 8) + bitIndex;
                  const signal = bitToSignalMap[absoluteBitIndex];

                  return (
                    <div
                      key={bitIndex}
                      className={`w-7 h-7 flex items-center justify-center text-xs font-mono ${
                        signal ? 'cursor-pointer' : ''
                      }`}
                      style={{
                        backgroundColor: signal ? colorForSignal(signal) : 'rgba(209, 213, 219, 0.2)',
                        border: '1px solid rgba(156, 163, 175, 0.5)',
                        position: 'relative',
                        ...getHighlightedStyle(signal)
                      }}
                      onClick={() => signal && onBitSelected(signal)}
                    >
                      {absoluteBitIndex}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Signal legend */}
        <div className="border-t pt-3 md:border-t-0 md:pt-0 md:border-l md:pl-4">
          <div className="text-sm font-medium mb-2">Signal legend</div>

          <div className="flex flex-col gap-1">
            {Array.from(new Set(Object.values(bitToSignalMap)))
              .sort((a, b) => a.bitOffset - b.bitOffset)
              .map((signal) => (
                <div
                  key={signal.id}
                  className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded"
                  onClick={() => onBitSelected(signal)}
                  onMouseEnter={() => setHoveredSignalId(signal.id)}
                  onMouseLeave={() => setHoveredSignalId(null)}
                >
                  <div
                    className="w-5 h-5 mr-2 border border-black"
                    style={{
                      backgroundColor: colorForSignal(signal),
                      boxShadow: hoveredSignalId === signal.id ? '0 0 0 2px #3b82f6' : 'none',
                      transition: 'box-shadow 0.15s ease'
                    }}
                  ></div>

                  <div className="flex flex-col">
                    <div className="text-xs font-medium">{signal.name}</div>
                    <div className="text-xs text-gray-500">
                      Bits: {formatBitRange(signal)}
                    </div>
                  </div>

                  {signal.suggestedMetric && (
                    <span className="ml-auto text-xs bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">
                      {signal.suggestedMetric}
                    </span>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to format the bit range
function formatBitRange(signal) {
  const startBit = signal.bitOffset;
  const endBit = signal.bitOffset + signal.bitLength - 1;

  if (startBit === endBit) {
    return `${startBit}`;
  } else {
    return `${startBit}-${endBit}`;
  }
}

export default BitMappingVisualizer;
