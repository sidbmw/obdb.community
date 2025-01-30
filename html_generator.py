# html_generator.py

import json
from pathlib import Path
from collections import defaultdict

def transform_matrix_data(matrix_data):
    """Transform data into a format suitable for horizontal ECU+PID layout."""
    # First, collect all unique ECU+PID combinations
    ecu_pid_combos = set()
    vehicles = set()
    for entry in matrix_data:
        ecu_pid_combos.add((entry['hdr'], entry['pid']))
        vehicles.add((entry['make'], entry['model']))
    
    # Sort ECU+PID combinations
    ecu_pid_combos = sorted(ecu_pid_combos)
    vehicles = sorted(vehicles)
    
    # Create lookup for easy access
    data_lookup = defaultdict(dict)
    for entry in matrix_data:
        vehicle_key = (entry['make'], entry['model'])
        ecu_pid_key = (entry['hdr'], entry['pid'])
        if ecu_pid_key not in data_lookup[vehicle_key]:
            data_lookup[vehicle_key][ecu_pid_key] = []
        data_lookup[vehicle_key][ecu_pid_key].append({
            'id': entry['id'],
            'name': entry['name'],
            'unit': entry['unit'],
            'suggestedMetric': entry['suggestedMetric'],
            'scaling': entry['scaling'],
            'path': entry['path']
        })
    
    # Transform into row-based format
    transformed_data = []
    for make, model in vehicles:
        row = {
            'make': make,
            'model': model
        }
        for hdr, pid in ecu_pid_combos:
            key = f"{hdr}_{pid}"
            signals = data_lookup[(make, model)].get((hdr, pid), [])
            row[key] = signals
        transformed_data.append(row)
    
    return transformed_data, ecu_pid_combos

def generate_html(matrix_data, output_dir):
    """Generate interactive HTML visualization of OBD parameter matrix."""
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Transform data for horizontal layout
    transformed_data, ecu_pid_combos = transform_matrix_data(matrix_data)
    
    # Convert matrix data to JSON for JavaScript
    with open(output_dir / 'matrix_data.js', 'w') as f:
        f.write('const matrixData = ')
        json.dump(transformed_data, f, indent=2)
        f.write(';\n')
        f.write('const ecuPidCombos = ')
        json.dump(list(ecu_pid_combos), f, indent=2)
        f.write(';')

    # Create index.html
    html_content = '''
<!DOCTYPE html>
<html>
<head>
    <title>OBD Parameter Matrix</title>
    <link href="https://cdn.jsdelivr.net/npm/tabulator-tables@5.5.0/dist/css/tabulator.min.css" rel="stylesheet">
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/tabulator-tables@5.5.0/dist/js/tabulator.min.js"></script>
    <script src="matrix_data.js"></script>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            margin: 20px; 
            padding: 20px;
        }
        #filters { 
            margin-bottom: 20px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        #filters input {
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        #filters button {
            padding: 8px 16px;
            background-color: #f0f0f0;
            border: 1px solid #ddd;
            border-radius: 4px;
            cursor: pointer;
        }
        #filters button:hover {
            background-color: #e0e0e0;
        }
        .tabulator { 
            margin-top: 20px;
        }
        .tabulator .tabulator-header {
            position: sticky;
            top: 0;
            z-index: 100;
        }
        .tabulator-row.tabulator-group {
            background-color: #f8f9fa !important;
            border-bottom: 2px solid #ddd;
            cursor: pointer;
        }
        .tabulator-row.tabulator-group:hover {
            background-color: #f0f0f0 !important;
        }
        .signal-cell {
            white-space: pre-wrap;
            font-size: 0.9em;
        }
        .signal-cell .signal-item {
            padding: 2px 0;
            border-bottom: 1px solid #eee;
        }
        .signal-cell .signal-item:last-child {
            border-bottom: none;
        }
        .tooltip {
            position: absolute;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 8px;
            font-size: 0.9em;
            z-index: 1000;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            max-width: 300px;
        }
    </style>
</head>
<body>
    <h1>OBD Parameter Matrix</h1>
    
    <div id="filters">
        <input type="text" id="makeFilter" placeholder="Filter by make...">
        <input type="text" id="modelFilter" placeholder="Filter by model...">
        <button onclick="resetFilters()">Reset Filters</button>
    </div>
    
    <div id="matrix"></div>

    <script>
        // Function to format signal cell content
        function formatSignalCell(cell) {
            const signals = cell.getValue() || [];
            if (signals.length === 0) return "";
            
            return signals.map(signal => {
                const metric = signal.suggestedMetric ? 
                    `[${signal.suggestedMetric}]` : 
                    signal.unit ? `[${signal.unit}]` : '';
                return `<div class="signal-item" 
                    data-scaling="${signal.scaling}"
                    data-name="${signal.name}"
                    data-path="${signal.path}">
                    ${signal.id} ${metric}
                </div>`;
            }).join('');
        }

        // Create column definitions
        const columns = [
            {title: "Make", field: "make", frozen: true},
            {title: "Model", field: "model", frozen: true},
        ];

        // Group columns by ECU
        const ecuGroups = {};
        ecuPidCombos.forEach(([ecu, pid]) => {
            if (!ecuGroups[ecu]) {
                ecuGroups[ecu] = [];
            }
            ecuGroups[ecu].push({
                title: pid,
                field: `${ecu}_${pid}`,
                formatter: formatSignalCell,
                headerSort: false,
                width: 200,
            });
        });

        // Add ECU group columns
        Object.entries(ecuGroups).forEach(([ecu, pidColumns]) => {
            columns.push({
                title: ecu,
                columns: pidColumns
            });
        });

        // Initialize Tabulator
        const table = new Tabulator("#matrix", {
            data: matrixData,
            layout: "fitDataTable",
            columns: columns,
            height: "85vh",
            tooltips: false,
            groupBy: "make",
            groupHeader: function(value, count, data, group){
                return `${value} <span style="color: #666; font-size: 0.9em;">(${count} models)</span>`;
            },
            groupToggleElement: "header",
            groupStartOpen: false,
        });

        // Custom tooltip handler
        let tooltip = null;
        document.getElementById("matrix").addEventListener("mouseover", function(e) {
            const signalItem = e.target.closest(".signal-item");
            if (signalItem) {
                if (!tooltip) {
                    tooltip = document.createElement("div");
                    tooltip.className = "tooltip";
                    document.body.appendChild(tooltip);
                }
                
                tooltip.innerHTML = `
                    <strong>${signalItem.dataset.name}</strong><br>
                    Path: ${signalItem.dataset.path}<br>
                    Scaling: ${signalItem.dataset.scaling}
                `;
                
                const rect = signalItem.getBoundingClientRect();
                tooltip.style.left = rect.right + 10 + "px";
                tooltip.style.top = rect.top + "px";
                tooltip.style.display = "block";
            }
        });

        document.getElementById("matrix").addEventListener("mouseout", function(e) {
            const signalItem = e.target.closest(".signal-item");
            if (signalItem && tooltip) {
                tooltip.style.display = "none";
            }
        });

        // Filter functions
        document.getElementById("makeFilter").addEventListener("input", function(e) {
            table.setFilter("make", "like", e.target.value);
        });

        document.getElementById("modelFilter").addEventListener("input", function(e) {
            table.setFilter("model", "like", e.target.value);
        });

        function resetFilters() {
            document.getElementById("makeFilter").value = "";
            document.getElementById("modelFilter").value = "";
            table.clearFilter();
        }
    </script>
</body>
</html>
    '''
    
    with open(output_dir / 'index.html', 'w') as f:
        f.write(html_content)
