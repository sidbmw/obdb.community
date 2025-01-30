const matrixData = [
  {
    "make": "Hyundai",
    "model": "IONIQ-5",
    "744_22E001": [
      {
        "id": "IONIQ5_DC_CHRG_STATE",
        "name": "DC charging state",
        "unit": "offon",
        "suggestedMetric": "isCharging",
        "scaling": "",
        "path": "Battery"
      }
    ],
    "744_22E003": [
      {
        "id": "IONIQ5_HVBAT_SOC_VCMS",
        "name": "HV battery charge",
        "unit": "percent",
        "suggestedMetric": "stateOfCharge",
        "scaling": "value = (raw/2) clamped to: ...100",
        "path": "Battery"
      },
      {
        "id": "IONIQ5_HVBAT_TARGET_VOLT",
        "name": "EVSE target current",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/10) clamped to: ...6553",
        "path": "Battery"
      },
      {
        "id": "IONIQ5_HVBAT_DC_CHRGNG",
        "name": "DC charging",
        "unit": "offon",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Battery"
      },
      {
        "id": "IONIQ5_HVBAT_TARGET_CURR",
        "name": "EVSE target voltage",
        "unit": "amps",
        "suggestedMetric": "",
        "scaling": "value = (raw/10) clamped to: ...6553",
        "path": "Battery"
      },
      {
        "id": "IONIQ5_HVBAT_CHRG_CNT",
        "name": "Number of DC charges",
        "unit": "scalar",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Battery"
      },
      {
        "id": "IONIQ5_DC_CHRG_TIME",
        "name": "Total DC charging time",
        "unit": "hours",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Battery"
      }
    ],
    "750_2116": [],
    "750_2130": [],
    "750_221004": [],
    "750_221005": [],
    "750_222021": [],
    "753_221022": [],
    "7A0_22C00B": [
      {
        "id": "IONIQ5_TP_FL",
        "name": "Front left tire pressure",
        "unit": "psi",
        "suggestedMetric": "frontLeftTirePressure",
        "scaling": "value = (raw/5) clamped to: ...51",
        "path": "Tires"
      },
      {
        "id": "IONIQ5_TP_FR",
        "name": "Front right tire pressure",
        "unit": "psi",
        "suggestedMetric": "frontRightTirePressure",
        "scaling": "value = (raw/5) clamped to: ...51",
        "path": "Tires"
      },
      {
        "id": "IONIQ5_TP_RL",
        "name": "Rear left tire pressure",
        "unit": "psi",
        "suggestedMetric": "rearLeftTirePressure",
        "scaling": "value = (raw/5) clamped to: ...51",
        "path": "Tires"
      },
      {
        "id": "IONIQ5_TP_RR",
        "name": "Rear right tire pressure",
        "unit": "psi",
        "suggestedMetric": "rearRightTirePressure",
        "scaling": "value = (raw/5) clamped to: ...51",
        "path": "Tires"
      }
    ],
    "7B0_2103": [],
    "7B3_220100": [
      {
        "id": "IONIQ5_VSS",
        "name": "Vehicle speed",
        "unit": "kilometersPerHour",
        "suggestedMetric": "speed",
        "scaling": "",
        "path": "Movement"
      }
    ],
    "7C0_2129": [],
    "7C6_22B002": [
      {
        "id": "IONIQ5_ODO_KM",
        "name": "Odometer (Metric)",
        "unit": "kilometers",
        "suggestedMetric": "odometer",
        "scaling": "",
        "path": "Trips"
      },
      {
        "id": "IONIQ5_ODO_MI",
        "name": "Odometer (Imperial)",
        "unit": "miles",
        "suggestedMetric": "odometer",
        "scaling": "",
        "path": "Trips"
      }
    ],
    "7E0_0101": [],
    "7E0_0102": [],
    "7E0_0103": [],
    "7E0_0104": [],
    "7E0_0105": [],
    "7E0_0106": [],
    "7E0_0107": [],
    "7E0_0108": [],
    "7E0_0109": [],
    "7E0_010A": [],
    "7E0_010B": [],
    "7E0_010C": [],
    "7E0_010D": [],
    "7E0_010E": [],
    "7E0_010F": [],
    "7E0_0110": [],
    "7E0_0111": [],
    "7E0_0112": [],
    "7E0_0113": [],
    "7E0_0114": [],
    "7E0_0115": [],
    "7E0_011C": [],
    "7E0_011D": [],
    "7E0_011E": [],
    "7E0_011F": [],
    "7E0_0121": [],
    "7E0_0122": [],
    "7E0_0123": [],
    "7E0_0124": [],
    "7E0_012C": [],
    "7E0_012D": [],
    "7E0_012E": [],
    "7E0_012F": [],
    "7E0_0130": [],
    "7E0_0131": [],
    "7E0_0132": [],
    "7E0_0133": [],
    "7E0_013C": [],
    "7E0_013D": [],
    "7E0_013E": [],
    "7E0_013F": [],
    "7E0_0141": [],
    "7E0_0142": [],
    "7E0_0143": [],
    "7E0_0144": [],
    "7E0_0145": [],
    "7E0_0146": [],
    "7E0_0147": [],
    "7E0_0148": [],
    "7E0_0149": [],
    "7E0_014A": [],
    "7E0_014B": [],
    "7E0_014C": [],
    "7E0_014D": [],
    "7E0_014E": [],
    "7E0_014F": [],
    "7E0_0150": [],
    "7E0_0151": [],
    "7E0_0152": [],
    "7E0_0153": [],
    "7E0_0154": [],
    "7E0_0155": [],
    "7E0_0156": [],
    "7E0_0157": [],
    "7E0_0158": [],
    "7E0_0159": [],
    "7E0_015A": [],
    "7E0_015B": [],
    "7E0_015C": [],
    "7E0_015D": [],
    "7E0_015E": [],
    "7E0_015F": [],
    "7E0_0161": [],
    "7E0_0162": [],
    "7E0_0163": [],
    "7E0_0164": [],
    "7E0_0165": [],
    "7E0_0166": [],
    "7E0_0167": [],
    "7E0_0169": [],
    "7E0_016C": [],
    "7E0_017F": [],
    "7E0_0184": [],
    "7E0_018D": [],
    "7E0_018E": [],
    "7E0_019A": [],
    "7E0_019D": [],
    "7E0_019E": [],
    "7E0_01A6": [],
    "7E0_01AA": [],
    "7E0_01B2": [],
    "7E0_01D3": [],
    "7E0_2128": [],
    "7E0_2151": [],
    "7E0_2185": [],
    "7E4_220101": [
      {
        "id": "IONIQ5_HVBAT_SOC",
        "name": "HV battery charge (dash)",
        "unit": "percent",
        "suggestedMetric": "stateOfCharge",
        "scaling": "value = (raw*0.5) clamped to: ...100",
        "path": "Battery"
      }
    ],
    "7E4_220102": [
      {
        "id": "IONIQ5_HVBAT_CMU001_VOLT",
        "name": "HV battery module 001 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.001"
      },
      {
        "id": "IONIQ5_HVBAT_CMU002_VOLT",
        "name": "HV battery module 002 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.002"
      },
      {
        "id": "IONIQ5_HVBAT_CMU003_VOLT",
        "name": "HV battery module 003 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.003"
      },
      {
        "id": "IONIQ5_HVBAT_CMU004_VOLT",
        "name": "HV battery module 004 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.004"
      },
      {
        "id": "IONIQ5_HVBAT_CMU005_VOLT",
        "name": "HV battery module 005 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.005"
      },
      {
        "id": "IONIQ5_HVBAT_CMU006_VOLT",
        "name": "HV battery module 006 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.006"
      },
      {
        "id": "IONIQ5_HVBAT_CMU007_VOLT",
        "name": "HV battery module 007 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.007"
      },
      {
        "id": "IONIQ5_HVBAT_CMU008_VOLT",
        "name": "HV battery module 008 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.008"
      },
      {
        "id": "IONIQ5_HVBAT_CMU009_VOLT",
        "name": "HV battery module 009 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.009"
      },
      {
        "id": "IONIQ5_HVBAT_CMU010_VOLT",
        "name": "HV battery module 010 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.010"
      },
      {
        "id": "IONIQ5_HVBAT_CMU011_VOLT",
        "name": "HV battery module 011 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.011"
      },
      {
        "id": "IONIQ5_HVBAT_CMU012_VOLT",
        "name": "HV battery module 012 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.012"
      },
      {
        "id": "IONIQ5_HVBAT_CMU013_VOLT",
        "name": "HV battery module 013 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.013"
      },
      {
        "id": "IONIQ5_HVBAT_CMU014_VOLT",
        "name": "HV battery module 014 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.014"
      },
      {
        "id": "IONIQ5_HVBAT_CMU015_VOLT",
        "name": "HV battery module 015 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.015"
      },
      {
        "id": "IONIQ5_HVBAT_CMU016_VOLT",
        "name": "HV battery module 016 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.016"
      },
      {
        "id": "IONIQ5_HVBAT_CMU017_VOLT",
        "name": "HV battery module 017 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.017"
      },
      {
        "id": "IONIQ5_HVBAT_CMU018_VOLT",
        "name": "HV battery module 018 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.018"
      },
      {
        "id": "IONIQ5_HVBAT_CMU019_VOLT",
        "name": "HV battery module 019 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.019"
      },
      {
        "id": "IONIQ5_HVBAT_CMU020_VOLT",
        "name": "HV battery module 020 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.020"
      },
      {
        "id": "IONIQ5_HVBAT_CMU021_VOLT",
        "name": "HV battery module 021 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.021"
      },
      {
        "id": "IONIQ5_HVBAT_CMU022_VOLT",
        "name": "HV battery module 022 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.022"
      },
      {
        "id": "IONIQ5_HVBAT_CMU023_VOLT",
        "name": "HV battery module 023 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.023"
      },
      {
        "id": "IONIQ5_HVBAT_CMU024_VOLT",
        "name": "HV battery module 024 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.024"
      },
      {
        "id": "IONIQ5_HVBAT_CMU025_VOLT",
        "name": "HV battery module 025 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.025"
      },
      {
        "id": "IONIQ5_HVBAT_CMU026_VOLT",
        "name": "HV battery module 026 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.026"
      },
      {
        "id": "IONIQ5_HVBAT_CMU027_VOLT",
        "name": "HV battery module 027 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.027"
      },
      {
        "id": "IONIQ5_HVBAT_CMU028_VOLT",
        "name": "HV battery module 028 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.028"
      },
      {
        "id": "IONIQ5_HVBAT_CMU029_VOLT",
        "name": "HV battery module 029 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.029"
      },
      {
        "id": "IONIQ5_HVBAT_CMU030_VOLT",
        "name": "HV battery module 030 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.030"
      },
      {
        "id": "IONIQ5_HVBAT_CMU031_VOLT",
        "name": "HV battery module 031 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.031"
      },
      {
        "id": "IONIQ5_HVBAT_CMU032_VOLT",
        "name": "HV battery module 032 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.032"
      }
    ],
    "7E4_220103": [
      {
        "id": "IONIQ5_HVBAT_CMU033_VOLT",
        "name": "HV battery module 033 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.033"
      },
      {
        "id": "IONIQ5_HVBAT_CMU034_VOLT",
        "name": "HV battery module 034 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.034"
      },
      {
        "id": "IONIQ5_HVBAT_CMU035_VOLT",
        "name": "HV battery module 035 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.035"
      },
      {
        "id": "IONIQ5_HVBAT_CMU036_VOLT",
        "name": "HV battery module 036 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.036"
      },
      {
        "id": "IONIQ5_HVBAT_CMU037_VOLT",
        "name": "HV battery module 037 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.037"
      },
      {
        "id": "IONIQ5_HVBAT_CMU038_VOLT",
        "name": "HV battery module 038 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.038"
      },
      {
        "id": "IONIQ5_HVBAT_CMU039_VOLT",
        "name": "HV battery module 039 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.039"
      },
      {
        "id": "IONIQ5_HVBAT_CMU040_VOLT",
        "name": "HV battery module 040 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.040"
      },
      {
        "id": "IONIQ5_HVBAT_CMU041_VOLT",
        "name": "HV battery module 041 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.041"
      },
      {
        "id": "IONIQ5_HVBAT_CMU042_VOLT",
        "name": "HV battery module 042 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.042"
      },
      {
        "id": "IONIQ5_HVBAT_CMU043_VOLT",
        "name": "HV battery module 043 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.043"
      },
      {
        "id": "IONIQ5_HVBAT_CMU044_VOLT",
        "name": "HV battery module 044 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.044"
      },
      {
        "id": "IONIQ5_HVBAT_CMU045_VOLT",
        "name": "HV battery module 045 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.045"
      },
      {
        "id": "IONIQ5_HVBAT_CMU046_VOLT",
        "name": "HV battery module 046 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.046"
      },
      {
        "id": "IONIQ5_HVBAT_CMU047_VOLT",
        "name": "HV battery module 047 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.047"
      },
      {
        "id": "IONIQ5_HVBAT_CMU048_VOLT",
        "name": "HV battery module 048 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.048"
      },
      {
        "id": "IONIQ5_HVBAT_CMU049_VOLT",
        "name": "HV battery module 049 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.049"
      },
      {
        "id": "IONIQ5_HVBAT_CMU050_VOLT",
        "name": "HV battery module 050 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.050"
      },
      {
        "id": "IONIQ5_HVBAT_CMU051_VOLT",
        "name": "HV battery module 051 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.051"
      },
      {
        "id": "IONIQ5_HVBAT_CMU052_VOLT",
        "name": "HV battery module 052 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.052"
      },
      {
        "id": "IONIQ5_HVBAT_CMU053_VOLT",
        "name": "HV battery module 053 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.053"
      },
      {
        "id": "IONIQ5_HVBAT_CMU054_VOLT",
        "name": "HV battery module 054 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.054"
      },
      {
        "id": "IONIQ5_HVBAT_CMU055_VOLT",
        "name": "HV battery module 055 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.055"
      },
      {
        "id": "IONIQ5_HVBAT_CMU056_VOLT",
        "name": "HV battery module 056 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.056"
      },
      {
        "id": "IONIQ5_HVBAT_CMU057_VOLT",
        "name": "HV battery module 057 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.057"
      },
      {
        "id": "IONIQ5_HVBAT_CMU058_VOLT",
        "name": "HV battery module 058 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.058"
      },
      {
        "id": "IONIQ5_HVBAT_CMU059_VOLT",
        "name": "HV battery module 059 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.059"
      },
      {
        "id": "IONIQ5_HVBAT_CMU060_VOLT",
        "name": "HV battery module 060 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.060"
      },
      {
        "id": "IONIQ5_HVBAT_CMU061_VOLT",
        "name": "HV battery module 061 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.061"
      },
      {
        "id": "IONIQ5_HVBAT_CMU062_VOLT",
        "name": "HV battery module 062 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.062"
      },
      {
        "id": "IONIQ5_HVBAT_CMU063_VOLT",
        "name": "HV battery module 063 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.063"
      },
      {
        "id": "IONIQ5_HVBAT_CMU064_VOLT",
        "name": "HV battery module 064 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.064"
      }
    ],
    "7E4_220104": [
      {
        "id": "IONIQ5_HVBAT_CMU065_VOLT",
        "name": "HV battery module 065 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.065"
      },
      {
        "id": "IONIQ5_HVBAT_CMU066_VOLT",
        "name": "HV battery module 066 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.066"
      },
      {
        "id": "IONIQ5_HVBAT_CMU067_VOLT",
        "name": "HV battery module 067 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.067"
      },
      {
        "id": "IONIQ5_HVBAT_CMU068_VOLT",
        "name": "HV battery module 068 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.068"
      },
      {
        "id": "IONIQ5_HVBAT_CMU069_VOLT",
        "name": "HV battery module 069 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.069"
      },
      {
        "id": "IONIQ5_HVBAT_CMU070_VOLT",
        "name": "HV battery module 070 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.070"
      },
      {
        "id": "IONIQ5_HVBAT_CMU071_VOLT",
        "name": "HV battery module 071 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.071"
      },
      {
        "id": "IONIQ5_HVBAT_CMU072_VOLT",
        "name": "HV battery module 072 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.072"
      },
      {
        "id": "IONIQ5_HVBAT_CMU073_VOLT",
        "name": "HV battery module 073 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.073"
      },
      {
        "id": "IONIQ5_HVBAT_CMU074_VOLT",
        "name": "HV battery module 074 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.074"
      },
      {
        "id": "IONIQ5_HVBAT_CMU075_VOLT",
        "name": "HV battery module 075 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.075"
      },
      {
        "id": "IONIQ5_HVBAT_CMU076_VOLT",
        "name": "HV battery module 076 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.076"
      },
      {
        "id": "IONIQ5_HVBAT_CMU077_VOLT",
        "name": "HV battery module 077 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.077"
      },
      {
        "id": "IONIQ5_HVBAT_CMU078_VOLT",
        "name": "HV battery module 078 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.078"
      },
      {
        "id": "IONIQ5_HVBAT_CMU079_VOLT",
        "name": "HV battery module 079 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.079"
      },
      {
        "id": "IONIQ5_HVBAT_CMU080_VOLT",
        "name": "HV battery module 080 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.080"
      },
      {
        "id": "IONIQ5_HVBAT_CMU081_VOLT",
        "name": "HV battery module 081 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.081"
      },
      {
        "id": "IONIQ5_HVBAT_CMU082_VOLT",
        "name": "HV battery module 082 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.082"
      },
      {
        "id": "IONIQ5_HVBAT_CMU083_VOLT",
        "name": "HV battery module 083 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.083"
      },
      {
        "id": "IONIQ5_HVBAT_CMU084_VOLT",
        "name": "HV battery module 084 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.084"
      },
      {
        "id": "IONIQ5_HVBAT_CMU085_VOLT",
        "name": "HV battery module 085 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.085"
      },
      {
        "id": "IONIQ5_HVBAT_CMU086_VOLT",
        "name": "HV battery module 086 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.086"
      },
      {
        "id": "IONIQ5_HVBAT_CMU087_VOLT",
        "name": "HV battery module 087 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.087"
      },
      {
        "id": "IONIQ5_HVBAT_CMU088_VOLT",
        "name": "HV battery module 088 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.088"
      },
      {
        "id": "IONIQ5_HVBAT_CMU089_VOLT",
        "name": "HV battery module 089 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.089"
      },
      {
        "id": "IONIQ5_HVBAT_CMU090_VOLT",
        "name": "HV battery module 090 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.090"
      },
      {
        "id": "IONIQ5_HVBAT_CMU091_VOLT",
        "name": "HV battery module 091 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.091"
      },
      {
        "id": "IONIQ5_HVBAT_CMU092_VOLT",
        "name": "HV battery module 092 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.092"
      },
      {
        "id": "IONIQ5_HVBAT_CMU093_VOLT",
        "name": "HV battery module 093 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.093"
      },
      {
        "id": "IONIQ5_HVBAT_CMU094_VOLT",
        "name": "HV battery module 094 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.094"
      },
      {
        "id": "IONIQ5_HVBAT_CMU095_VOLT",
        "name": "HV battery module 095 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.095"
      },
      {
        "id": "IONIQ5_HVBAT_CMU096_VOLT",
        "name": "HV battery module 096 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.096"
      }
    ],
    "7E4_220105": [
      {
        "id": "IONIQ5_HVBAT_SOH",
        "name": "HV battery state of health",
        "unit": "percent",
        "suggestedMetric": "stateOfHealth",
        "scaling": "value = (raw/10) clamped to: ...100",
        "path": "Battery"
      },
      {
        "id": "IONIQ5_HVBAT_WH",
        "name": "HV battery remaining energy",
        "unit": "kilowattHours",
        "suggestedMetric": "",
        "scaling": "value = (raw*2 /1000) clamped to: ...100",
        "path": "Battery"
      },
      {
        "id": "IONIQ5_HVBAT_SOC_DISP",
        "name": "HV battery charge",
        "unit": "percent",
        "suggestedMetric": "stateOfCharge",
        "scaling": "value = (raw*0.5) clamped to: ...100",
        "path": "Battery"
      }
    ],
    "7E4_22010A": [
      {
        "id": "IONIQ5_HVBAT_CMU097_VOLT",
        "name": "HV battery module 097 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.097"
      },
      {
        "id": "IONIQ5_HVBAT_CMU098_VOLT",
        "name": "HV battery module 098 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.098"
      },
      {
        "id": "IONIQ5_HVBAT_CMU099_VOLT",
        "name": "HV battery module 099 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.099"
      },
      {
        "id": "IONIQ5_HVBAT_CMU100_VOLT",
        "name": "HV battery module 100 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.100"
      },
      {
        "id": "IONIQ5_HVBAT_CMU101_VOLT",
        "name": "HV battery module 101 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.101"
      },
      {
        "id": "IONIQ5_HVBAT_CMU102_VOLT",
        "name": "HV battery module 102 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.102"
      },
      {
        "id": "IONIQ5_HVBAT_CMU103_VOLT",
        "name": "HV battery module 103 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.103"
      },
      {
        "id": "IONIQ5_HVBAT_CMU104_VOLT",
        "name": "HV battery module 104 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.104"
      },
      {
        "id": "IONIQ5_HVBAT_CMU105_VOLT",
        "name": "HV battery module 105 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.105"
      },
      {
        "id": "IONIQ5_HVBAT_CMU106_VOLT",
        "name": "HV battery module 106 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.106"
      },
      {
        "id": "IONIQ5_HVBAT_CMU107_VOLT",
        "name": "HV battery module 107 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.107"
      },
      {
        "id": "IONIQ5_HVBAT_CMU108_VOLT",
        "name": "HV battery module 108 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.108"
      },
      {
        "id": "IONIQ5_HVBAT_CMU109_VOLT",
        "name": "HV battery module 109 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.109"
      },
      {
        "id": "IONIQ5_HVBAT_CMU110_VOLT",
        "name": "HV battery module 110 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.110"
      },
      {
        "id": "IONIQ5_HVBAT_CMU111_VOLT",
        "name": "HV battery module 111 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.111"
      },
      {
        "id": "IONIQ5_HVBAT_CMU112_VOLT",
        "name": "HV battery module 112 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.112"
      },
      {
        "id": "IONIQ5_HVBAT_CMU113_VOLT",
        "name": "HV battery module 113 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.113"
      },
      {
        "id": "IONIQ5_HVBAT_CMU114_VOLT",
        "name": "HV battery module 114 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.114"
      },
      {
        "id": "IONIQ5_HVBAT_CMU115_VOLT",
        "name": "HV battery module 115 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.115"
      },
      {
        "id": "IONIQ5_HVBAT_CMU116_VOLT",
        "name": "HV battery module 116 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.116"
      },
      {
        "id": "IONIQ5_HVBAT_CMU117_VOLT",
        "name": "HV battery module 117 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.117"
      },
      {
        "id": "IONIQ5_HVBAT_CMU118_VOLT",
        "name": "HV battery module 118 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.118"
      },
      {
        "id": "IONIQ5_HVBAT_CMU119_VOLT",
        "name": "HV battery module 119 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.119"
      },
      {
        "id": "IONIQ5_HVBAT_CMU120_VOLT",
        "name": "HV battery module 120 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.120"
      },
      {
        "id": "IONIQ5_HVBAT_CMU121_VOLT",
        "name": "HV battery module 121 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.121"
      },
      {
        "id": "IONIQ5_HVBAT_CMU122_VOLT",
        "name": "HV battery module 122 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.122"
      },
      {
        "id": "IONIQ5_HVBAT_CMU123_VOLT",
        "name": "HV battery module 123 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.123"
      },
      {
        "id": "IONIQ5_HVBAT_CMU124_VOLT",
        "name": "HV battery module 124 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.124"
      },
      {
        "id": "IONIQ5_HVBAT_CMU125_VOLT",
        "name": "HV battery module 125 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.125"
      },
      {
        "id": "IONIQ5_HVBAT_CMU126_VOLT",
        "name": "HV battery module 126 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.126"
      },
      {
        "id": "IONIQ5_HVBAT_CMU127_VOLT",
        "name": "HV battery module 127 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.127"
      },
      {
        "id": "IONIQ5_HVBAT_CMU128_VOLT",
        "name": "HV battery module 128 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.128"
      }
    ],
    "7E4_22010B": [
      {
        "id": "IONIQ5_HVBAT_CMU129_VOLT",
        "name": "HV battery module 129 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.129"
      },
      {
        "id": "IONIQ5_HVBAT_CMU130_VOLT",
        "name": "HV battery module 130 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.130"
      },
      {
        "id": "IONIQ5_HVBAT_CMU131_VOLT",
        "name": "HV battery module 131 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.131"
      },
      {
        "id": "IONIQ5_HVBAT_CMU132_VOLT",
        "name": "HV battery module 132 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.132"
      },
      {
        "id": "IONIQ5_HVBAT_CMU133_VOLT",
        "name": "HV battery module 133 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.133"
      },
      {
        "id": "IONIQ5_HVBAT_CMU134_VOLT",
        "name": "HV battery module 134 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.134"
      },
      {
        "id": "IONIQ5_HVBAT_CMU135_VOLT",
        "name": "HV battery module 135 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.135"
      },
      {
        "id": "IONIQ5_HVBAT_CMU136_VOLT",
        "name": "HV battery module 136 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.136"
      },
      {
        "id": "IONIQ5_HVBAT_CMU137_VOLT",
        "name": "HV battery module 137 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.137"
      },
      {
        "id": "IONIQ5_HVBAT_CMU138_VOLT",
        "name": "HV battery module 138 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.138"
      },
      {
        "id": "IONIQ5_HVBAT_CMU139_VOLT",
        "name": "HV battery module 139 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.139"
      },
      {
        "id": "IONIQ5_HVBAT_CMU140_VOLT",
        "name": "HV battery module 140 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.140"
      },
      {
        "id": "IONIQ5_HVBAT_CMU141_VOLT",
        "name": "HV battery module 141 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.141"
      },
      {
        "id": "IONIQ5_HVBAT_CMU142_VOLT",
        "name": "HV battery module 142 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.142"
      },
      {
        "id": "IONIQ5_HVBAT_CMU143_VOLT",
        "name": "HV battery module 143 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.143"
      },
      {
        "id": "IONIQ5_HVBAT_CMU144_VOLT",
        "name": "HV battery module 144 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.144"
      },
      {
        "id": "IONIQ5_HVBAT_CMU145_VOLT",
        "name": "HV battery module 145 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.145"
      },
      {
        "id": "IONIQ5_HVBAT_CMU146_VOLT",
        "name": "HV battery module 146 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.146"
      },
      {
        "id": "IONIQ5_HVBAT_CMU147_VOLT",
        "name": "HV battery module 147 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.147"
      },
      {
        "id": "IONIQ5_HVBAT_CMU148_VOLT",
        "name": "HV battery module 148 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.148"
      },
      {
        "id": "IONIQ5_HVBAT_CMU149_VOLT",
        "name": "HV battery module 149 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.149"
      },
      {
        "id": "IONIQ5_HVBAT_CMU150_VOLT",
        "name": "HV battery module 150 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.150"
      },
      {
        "id": "IONIQ5_HVBAT_CMU151_VOLT",
        "name": "HV battery module 151 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.151"
      },
      {
        "id": "IONIQ5_HVBAT_CMU152_VOLT",
        "name": "HV battery module 152 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.152"
      },
      {
        "id": "IONIQ5_HVBAT_CMU153_VOLT",
        "name": "HV battery module 153 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.153"
      },
      {
        "id": "IONIQ5_HVBAT_CMU154_VOLT",
        "name": "HV battery module 154 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.154"
      },
      {
        "id": "IONIQ5_HVBAT_CMU155_VOLT",
        "name": "HV battery module 155 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.155"
      },
      {
        "id": "IONIQ5_HVBAT_CMU156_VOLT",
        "name": "HV battery module 156 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.156"
      },
      {
        "id": "IONIQ5_HVBAT_CMU157_VOLT",
        "name": "HV battery module 157 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.157"
      },
      {
        "id": "IONIQ5_HVBAT_CMU158_VOLT",
        "name": "HV battery module 158 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.158"
      },
      {
        "id": "IONIQ5_HVBAT_CMU159_VOLT",
        "name": "HV battery module 159 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.159"
      },
      {
        "id": "IONIQ5_HVBAT_CMU160_VOLT",
        "name": "HV battery module 160 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.160"
      }
    ],
    "7E4_22010C": [
      {
        "id": "IONIQ5_HVBAT_CMU161_VOLT",
        "name": "HV battery module 161 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.161"
      },
      {
        "id": "IONIQ5_HVBAT_CMU162_VOLT",
        "name": "HV battery module 162 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.162"
      },
      {
        "id": "IONIQ5_HVBAT_CMU163_VOLT",
        "name": "HV battery module 163 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.163"
      },
      {
        "id": "IONIQ5_HVBAT_CMU164_VOLT",
        "name": "HV battery module 164 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.164"
      },
      {
        "id": "IONIQ5_HVBAT_CMU165_VOLT",
        "name": "HV battery module 165 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.165"
      },
      {
        "id": "IONIQ5_HVBAT_CMU166_VOLT",
        "name": "HV battery module 166 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.166"
      },
      {
        "id": "IONIQ5_HVBAT_CMU167_VOLT",
        "name": "HV battery module 167 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.167"
      },
      {
        "id": "IONIQ5_HVBAT_CMU168_VOLT",
        "name": "HV battery module 168 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.168"
      },
      {
        "id": "IONIQ5_HVBAT_CMU169_VOLT",
        "name": "HV battery module 169 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.169"
      },
      {
        "id": "IONIQ5_HVBAT_CMU170_VOLT",
        "name": "HV battery module 170 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.170"
      },
      {
        "id": "IONIQ5_HVBAT_CMU171_VOLT",
        "name": "HV battery module 171 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.171"
      },
      {
        "id": "IONIQ5_HVBAT_CMU172_VOLT",
        "name": "HV battery module 172 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.172"
      },
      {
        "id": "IONIQ5_HVBAT_CMU173_VOLT",
        "name": "HV battery module 173 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.173"
      },
      {
        "id": "IONIQ5_HVBAT_CMU174_VOLT",
        "name": "HV battery module 174 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.174"
      },
      {
        "id": "IONIQ5_HVBAT_CMU175_VOLT",
        "name": "HV battery module 175 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.175"
      },
      {
        "id": "IONIQ5_HVBAT_CMU176_VOLT",
        "name": "HV battery module 176 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.176"
      },
      {
        "id": "IONIQ5_HVBAT_CMU177_VOLT",
        "name": "HV battery module 177 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.177"
      },
      {
        "id": "IONIQ5_HVBAT_CMU178_VOLT",
        "name": "HV battery module 178 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.178"
      },
      {
        "id": "IONIQ5_HVBAT_CMU179_VOLT",
        "name": "HV battery module 179 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.179"
      },
      {
        "id": "IONIQ5_HVBAT_CMU180_VOLT",
        "name": "HV battery module 180 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.180"
      },
      {
        "id": "IONIQ5_HVBAT_CMU181_VOLT",
        "name": "HV battery module 181 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.181"
      },
      {
        "id": "IONIQ5_HVBAT_CMU182_VOLT",
        "name": "HV battery module 182 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.182"
      },
      {
        "id": "IONIQ5_HVBAT_CMU183_VOLT",
        "name": "HV battery module 183 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.183"
      },
      {
        "id": "IONIQ5_HVBAT_CMU184_VOLT",
        "name": "HV battery module 184 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.184"
      },
      {
        "id": "IONIQ5_HVBAT_CMU185_VOLT",
        "name": "HV battery module 185 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.185"
      },
      {
        "id": "IONIQ5_HVBAT_CMU186_VOLT",
        "name": "HV battery module 186 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.186"
      },
      {
        "id": "IONIQ5_HVBAT_CMU187_VOLT",
        "name": "HV battery module 187 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.187"
      },
      {
        "id": "IONIQ5_HVBAT_CMU188_VOLT",
        "name": "HV battery module 188 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.188"
      },
      {
        "id": "IONIQ5_HVBAT_CMU189_VOLT",
        "name": "HV battery module 189 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.189"
      },
      {
        "id": "IONIQ5_HVBAT_CMU190_VOLT",
        "name": "HV battery module 190 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.190"
      },
      {
        "id": "IONIQ5_HVBAT_CMU191_VOLT",
        "name": "HV battery module 191 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.191"
      },
      {
        "id": "IONIQ5_HVBAT_CMU192_VOLT",
        "name": "HV battery module 192 voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...5.1",
        "path": "Battery.Modules.192"
      }
    ]
  },
  {
    "make": "SAEJ1979",
    "model": "",
    "744_22E001": [],
    "744_22E003": [],
    "750_2116": [],
    "750_2130": [],
    "750_221004": [],
    "750_221005": [],
    "750_222021": [],
    "753_221022": [],
    "7A0_22C00B": [],
    "7B0_2103": [],
    "7B3_220100": [],
    "7C0_2129": [],
    "7C6_22B002": [],
    "7E0_0101": [
      {
        "id": "MIL",
        "name": "Malfunction indicator lamp",
        "unit": "offon",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic"
      },
      {
        "id": "DTC_CNT",
        "name": "Number of DTCs stored in this ECU",
        "unit": "scalar",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic"
      },
      {
        "id": "CCM_RDY",
        "name": "Comprehensive component monitoring ready",
        "unit": "yesno",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "FUEL_RDY",
        "name": "Fuel system monitoring ready",
        "unit": "yesno",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "MIS_RDY",
        "name": "Misfire monitoring ready",
        "unit": "yesno",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "CCM_SUP",
        "name": "Comprehensive component monitoring supported",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Support"
      },
      {
        "id": "FUEL_SUP",
        "name": "Fuel system monitoring supported",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Support"
      },
      {
        "id": "MIS_SUP",
        "name": "Misfire monitoring supported",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Support"
      },
      {
        "id": "EGR_SUP",
        "name": "EGR system monitoring supported",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Support"
      },
      {
        "id": "HTR_SUP",
        "name": "Oxygen sensor heater monitoring supported",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Support"
      },
      {
        "id": "O2S_SUP",
        "name": "Oxygen sensor monitoring supported",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Support"
      },
      {
        "id": "ACRF_SUP",
        "name": "A/C system refrigerant monitoring supported",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Support"
      },
      {
        "id": "AIR_SUP",
        "name": "Secondary air system monitoring supported",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Support"
      },
      {
        "id": "EVAP_SUP",
        "name": "Evaporative system monitoring supported",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Support"
      },
      {
        "id": "HCAT_SUP",
        "name": "Heated catalyst monitoring supported",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Support"
      },
      {
        "id": "CAT_SUP",
        "name": "Catalyst monitoring supported",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Support"
      },
      {
        "id": "EGR_RDY",
        "name": "EGR system monitoring ready",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "HTR_RDY",
        "name": "Oxygen sensor heater monitoring ready",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "O2S_RDY",
        "name": "Oxygen sensor monitoring ready",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "ACRF_RDY",
        "name": "A/C system refrigerant monitoring ready",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "AIR_RDY",
        "name": "Secondary air system monitoring ready",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "EVAP_RDY",
        "name": "Evaporative system monitoring ready",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "HCAT_RDY",
        "name": "Heated catalyst monitoring ready",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "CAT_RDY",
        "name": "Catalyst monitoring ready",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "CIM_SUP",
        "name": "Compression ignition monitoring supported",
        "unit": "",
        "suggestedMetric": "",
        "scaling": "Mapped values: {'0': {'description': 'Spark ignition monitors supported', 'value': 'SPARK'}, '1': {'description': 'Compression ignition monitors supported', 'value': 'COMPRESSION'}}",
        "path": "DTCs.Generic.Support"
      }
    ],
    "7E0_0102": [
      {
        "id": "DTCFRZF",
        "name": "DTC that caused required freeze frame data storage",
        "unit": "hex",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic"
      }
    ],
    "7E0_0103": [
      {
        "id": "FUELSYS1",
        "name": "Fuel system 1 status",
        "unit": "",
        "suggestedMetric": "",
        "scaling": "Mapped values: {'0': {'description': 'Engine is off', 'value': 'OFF'}, '1': {'description': 'Open loop - has not yet satisfied conditions to go closed loop', 'value': 'OL'}, '128': {'description': 'Open loop - due to detected system fault (Bank 2)', 'value': 'OL-Fault B2'}, '16': {'description': 'Closed loop, but fault with at least one oxygen sensor - may be using single oxygen sensor for fuel control', 'value': 'CL-Fault'}, '2': {'description': 'Closed loop - using oxygen sensor(s) as feedback for fuel control', 'value': 'CL'}, '32': {'description': 'Open loop - has not yet satisfied conditions to go closed loop (Bank 2)', 'value': 'OL B2'}, '4': {'description': 'Open loop due to driving conditions (e.g. power enrichment, deceleration enleanment)', 'value': 'OL-Drive'}, '64': {'description': 'Open loop due to driving conditions (Bank 2) (e.g. power enrichment, deceleration enleanment, cylinder deactivation)', 'value': 'OL-Drive B2'}, '8': {'description': 'Open loop - due to detected system fault', 'value': 'OL-Fault'}}",
        "path": "Fuel.Generic"
      },
      {
        "id": "FUELSYS2",
        "name": "Fuel system 2 status",
        "unit": "",
        "suggestedMetric": "",
        "scaling": "Mapped values: {'0': {'description': 'Engine is off', 'value': 'OFF'}, '1': {'description': 'Open loop - has not yet satisfied conditions to go closed loop', 'value': 'OL'}, '128': {'description': 'Open loop - due to detected system fault (Bank 2)', 'value': 'OL-Fault B2'}, '16': {'description': 'Closed loop, but fault with at least one oxygen sensor - may be using single oxygen sensor for fuel control', 'value': 'CL-Fault'}, '2': {'description': 'Closed loop - using oxygen sensor(s) as feedback for fuel control', 'value': 'CL'}, '32': {'description': 'Open loop - has not yet satisfied conditions to go closed loop (Bank 2)', 'value': 'OL B2'}, '4': {'description': 'Open loop due to driving conditions (e.g. power enrichment, deceleration enleanment)', 'value': 'OL-Drive'}, '64': {'description': 'Open loop due to driving conditions (Bank 2) (e.g. power enrichment, deceleration enleanment, cylinder deactivation)', 'value': 'OL-Drive B2'}, '8': {'description': 'Open loop - due to detected system fault', 'value': 'OL-Fault'}}",
        "path": "Fuel.Generic"
      }
    ],
    "7E0_0104": [
      {
        "id": "LOAD_PCT",
        "name": "Calculated engine load",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0105": [
      {
        "id": "ECT",
        "name": "Engine coolant temperature",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "value = (raw+-40) clamped to: -40...215",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0106": [
      {
        "id": "SHRTFT1",
        "name": "Short term fuel trim (bank 1)",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /128 +-100) clamped to: -100...99.2",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0107": [
      {
        "id": "LONGFT1",
        "name": "Long term fuel trim (bank 1)",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /128 +-100) clamped to: -100...99.2",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0108": [
      {
        "id": "SHRTFT2",
        "name": "Short term fuel trim (bank 2)",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /128 +-100) clamped to: -100...99.2",
        "path": "Engine.Generic"
      },
      {
        "id": "SHRTFT4",
        "name": "Short term fuel trim (bank 4)",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /128 +-100) clamped to: -100...99.2",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0109": [
      {
        "id": "LONGFT2",
        "name": "Long term fuel trim (bank 2)",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /128 +-100) clamped to: -100...99.2",
        "path": "Engine.Generic"
      },
      {
        "id": "LONGFT4",
        "name": "Long term fuel trim (bank 4)",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /128 +-100) clamped to: -100...99.2",
        "path": "Engine.Generic"
      }
    ],
    "7E0_010A": [
      {
        "id": "FP",
        "name": "Fuel pressure",
        "unit": "kilopascal",
        "suggestedMetric": "",
        "scaling": "value = (raw*3) clamped to: ...765",
        "path": "Engine.Generic"
      }
    ],
    "7E0_010B": [
      {
        "id": "MAP",
        "name": "Intake manifold absolute pressure",
        "unit": "kilopascal",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic"
      }
    ],
    "7E0_010C": [
      {
        "id": "RPM",
        "name": "Engine RPM",
        "unit": "rpm",
        "suggestedMetric": "",
        "scaling": "value = (raw/4) clamped to: ...16383.75",
        "path": "Engine.Generic"
      }
    ],
    "7E0_010D": [
      {
        "id": "VSS",
        "name": "Vehicle speed",
        "unit": "kilometersPerHour",
        "suggestedMetric": "speed",
        "scaling": "",
        "path": "Movement.Generic"
      }
    ],
    "7E0_010E": [
      {
        "id": "SPARKADV",
        "name": "Timing advance",
        "unit": "degrees",
        "suggestedMetric": "",
        "scaling": "value = (raw/2 +-64) clamped to: -64...63.5",
        "path": "Engine.Generic"
      }
    ],
    "7E0_010F": [
      {
        "id": "IAT",
        "name": "Intake air temperature",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "value = (raw+-40) clamped to: -40...215",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0110": [
      {
        "id": "MAF",
        "name": "Air flow rate from mass air flow sensor",
        "unit": "gramsPerSecond",
        "suggestedMetric": "",
        "scaling": "value = (raw/100) clamped to: ...655.35",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0111": [
      {
        "id": "TP",
        "name": "Absolute throttle position",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Control.Generic"
      }
    ],
    "7E0_0112": [
      {
        "id": "AIR_STAT",
        "name": "Commanded secondary air status",
        "unit": "",
        "suggestedMetric": "",
        "scaling": "Mapped values: {'1': {'description': 'Upstream of first catalytic converter', 'value': 'UPS'}, '2': {'description': 'Downstream of first catalytic converter inlet', 'value': 'DNS'}, '4': {'description': 'Atmosphere / off', 'value': 'OFF'}, '8': {'description': 'Pump commanded on for diagnostics', 'value': 'DIAG'}}",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0113": [
      {
        "id": "O2S24_EXISTS",
        "name": "02S Bank 2, Sensor 4 present",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.OxygenSensors"
      },
      {
        "id": "O2S23_EXISTS",
        "name": "02S Bank 2, Sensor 3 present",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.OxygenSensors"
      },
      {
        "id": "O2S22_EXISTS",
        "name": "02S Bank 2, Sensor 2 present",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.OxygenSensors"
      },
      {
        "id": "O2S21_EXISTS",
        "name": "02S Bank 2, Sensor 1 present",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.OxygenSensors"
      },
      {
        "id": "O2S14_EXISTS",
        "name": "02S Bank 1, Sensor 4 present",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.OxygenSensors"
      },
      {
        "id": "O2S13_EXISTS",
        "name": "02S Bank 1, Sensor 3 present",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.OxygenSensors"
      },
      {
        "id": "O2S12_EXISTS",
        "name": "02S Bank 1, Sensor 2 present",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.OxygenSensors"
      },
      {
        "id": "O2S11_EXISTS",
        "name": "02S Bank 1, Sensor 1 present",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.OxygenSensors"
      }
    ],
    "7E0_0114": [
      {
        "id": "O2S11",
        "name": "O2S Output Voltage Bank 1, Sensor 1",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/200) clamped to: ...1.275",
        "path": "Engine.Generic.OxygenSensors"
      },
      {
        "id": "SHRTFT11",
        "name": "SHRTFT associated with O2S11",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /128 +-100) clamped to: -100...99.22",
        "path": "Engine.Generic.OxygenSensors"
      }
    ],
    "7E0_0115": [
      {
        "id": "O2S12",
        "name": "O2S Output Voltage Bank 1, Sensor 2",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/200) clamped to: ...1.275",
        "path": "Engine.Generic.OxygenSensors"
      },
      {
        "id": "SHRTFT11",
        "name": "SHRTFT associated with O2S12",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /128 +-100) clamped to: -100...99.22",
        "path": "Engine.Generic.OxygenSensors"
      }
    ],
    "7E0_011C": [
      {
        "id": "OBDSUP",
        "name": "OBD requirements to which vehicle is designed",
        "unit": "",
        "suggestedMetric": "",
        "scaling": "Mapped values: {'1': {'description': 'OBD II (California ARB)', 'value': 'OBD II'}, '10': {'description': 'JOBD', 'value': 'JOBD'}, '11': {'description': 'JOBD & OBD II', 'value': 'JOBD & OBD II'}, '12': {'description': 'JOBD & EOBD', 'value': 'JOBD & EOBD'}, '13': {'description': 'JOBD, EOBD, OBD II', 'value': 'JOBD, EOBD, OBD II'}, '14': {'description': 'Heavy duty vehicles (EURO IV) B1', 'value': 'EURO IV B1'}, '15': {'description': 'Heavy duty vehicles (EURO V) B2', 'value': 'EURO V B2'}, '16': {'description': 'Heavy duty vehicles (EURO EEC) C (gas engines)', 'value': 'EURO C'}, '17': {'description': 'Engine manufacturer diagnostics (EMD)', 'value': 'EMD'}, '18': {'description': 'Engine Manufacturer Diagnostics Enhanced (EMD+)', 'value': 'EMD+'}, '19': {'description': 'Heavy Duty On-Board Diagnostics (Child/Partial)', 'value': 'HD OBD-C'}, '2': {'description': 'OBD (Federal EPA)', 'value': 'OBD'}, '20': {'description': 'Heavy Duty On-Board Diagnostics', 'value': 'HD OBD'}, '21': {'description': 'World Wide Harmonized OBD', 'value': 'WWH OBD'}, '23': {'description': 'Heavy Duty Euro OBD Stage I without NOx Control', 'value': 'HD EOBD-I'}, '24': {'description': 'Heavy Duty Euro OBD Stage I with NOx Control', 'value': 'HD EOBD-I N'}, '25': {'description': 'Heavy Duty Euro OBD Stage II without NOx Control', 'value': 'HD EOBD-II'}, '26': {'description': 'Heavy Duty Euro OBD Stage II with NOx Control', 'value': 'HD EOBD-II N'}, '27': {'description': 'Heavy Duty ZEV', 'value': 'HD-ZEV'}, '28': {'description': 'Brazil OBD Phase 1', 'value': 'OBDBr-1'}, '29': {'description': 'Brazil OBD Phase 2 and Phase 2+', 'value': 'OBDBr-2'}, '3': {'description': 'OBD & OBD II', 'value': 'OBD & OBD II'}, '30': {'description': 'Korean OBD', 'value': 'KOBD'}, '31': {'description': 'India BS4 OBD I', 'value': 'IOBD-I-BS4'}, '32': {'description': 'India BS4 OBD II', 'value': 'IOBD-II-BS4'}, '33': {'description': 'Euro VI', 'value': 'HD EOBD-VI'}, '34': {'description': 'OBD, OBD II and HD OBD', 'value': 'OBD, OBD II and HD OBD'}, '35': {'description': 'Brazil OBD Phase 3', 'value': 'OBDBr-3'}, '36': {'description': 'Motorcycle, Euro OBD-I', 'value': 'MC EOBD-I'}, '37': {'description': 'Motorcycle, Euro OBD-II', 'value': 'MC EOBD-II'}, '38': {'description': 'Motorcycle, China OBD-I', 'value': 'MC COBD-I'}, '39': {'description': 'Motorcycle, Taiwan OBD-I', 'value': 'MC TOBD-I'}, '4': {'description': 'OBD I', 'value': 'OBD I'}, '40': {'description': 'Motorcycle, Japan OBD-I', 'value': 'MC JOBD-I'}, '41': {'description': 'China Nationwide Stage 6', 'value': 'CN-OBD-6'}, '42': {'description': 'Brazil OBD Phase 7', 'value': 'OBDBr-P7'}, '43': {'description': 'China Heavy Duty VI', 'value': 'CN-HDOBD-VI'}, '44': {'description': 'India BS6 OBD I', 'value': 'IOBD-I-BS6'}, '45': {'description': 'India BS6 OBD II', 'value': 'IOBD-II-BS6'}, '46': {'description': 'India BSVI HD OBD', 'value': 'IHDOBD-BSVI'}, '47': {'description': 'Brazil OBD Phase 8', 'value': 'OBDBr-P8'}, '48': {'description': 'Japan Heavy Duty OBD-II', 'value': 'HD-JOBD-II'}, '49': {'description': 'Korea Heavy Duty OBD-II', 'value': 'HD-KOBD-II'}, '5': {'description': 'Not OBD compliant', 'value': 'NO OBD'}, '50': {'description': 'China Off-Road IV OBD', 'value': 'CN-OROBD-IV'}, '51': {'description': 'Light Duty ZEV, ACC-II', 'value': 'CARB ACC-II'}, '52': {'description': 'Motorcycle, Japan OBD-II', 'value': 'MC JOBD-II'}, '53': {'description': 'Motorcycle, California (CARB) OBD', 'value': 'MC CARB OBD'}, '54': {'description': 'Motorcycle, Federal (EPA) OBD', 'value': 'MC EPA OBD'}, '55': {'description': 'Motorcycle, 50-State (CARB & EPA) OBD', 'value': 'MC CARB & EPA OBD'}, '56': {'description': 'Heavy Duty ZEV, CARB ZEP', 'value': 'HD ZEV CARB ZEP'}, '57': {'description': 'Light Duty ZEV, CARB ACC-II and EPA Tier 4 (GTR 22)', 'value': 'CARB ACC-II & EPA TIER4'}, '58': {'description': 'Light Duty ZEV, EPA Tier 4 (GTR 22)', 'value': 'EPA TIER4'}, '59': {'description': 'EPA HD OBD', 'value': 'EPA HD'}, '6': {'description': 'EOBD', 'value': 'EOBD'}, '7': {'description': 'EOBD & OBD II', 'value': 'EOBD & OBD II'}, '8': {'description': 'EOBD & OBD', 'value': 'EOBD & OBD'}, '9': {'description': 'EOBD, OBD, OBD II', 'value': 'EOBD, OBD, OBD II'}}",
        "path": "OBD.Generic"
      }
    ],
    "7E0_011D": [
      {
        "id": "O2S42_EXISTS",
        "name": "02S Bank 4, Sensor 2 present",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic"
      },
      {
        "id": "O2S41_EXISTS",
        "name": "02S Bank 4, Sensor 1 present",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic"
      },
      {
        "id": "O2S32_EXISTS",
        "name": "02S Bank 3, Sensor 2 present",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic"
      },
      {
        "id": "O2S31_EXISTS",
        "name": "02S Bank 3, Sensor 1 present",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic"
      },
      {
        "id": "O2S22_EXISTS",
        "name": "02S Bank 2, Sensor 2 present",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic"
      },
      {
        "id": "O2S21_EXISTS",
        "name": "02S Bank 2, Sensor 1 present",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic"
      },
      {
        "id": "O2S12_EXISTS",
        "name": "02S Bank 1, Sensor 2 present",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic"
      },
      {
        "id": "O2S11_EXISTS",
        "name": "02S Bank 1, Sensor 1 present",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic"
      }
    ],
    "7E0_011E": [
      {
        "id": "PTO_STAT",
        "name": "Power take off (PTO) status",
        "unit": "offon",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic"
      }
    ],
    "7E0_011F": [
      {
        "id": "RUNTM",
        "name": "Time since engine start",
        "unit": "seconds",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Clocks.Generic"
      }
    ],
    "7E0_0121": [
      {
        "id": "MIL_DIST",
        "name": "Distance travelled while MIL was activated",
        "unit": "kilometers",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic"
      }
    ],
    "7E0_0122": [
      {
        "id": "FRP_REL",
        "name": "Fuel pressure relative to manifold vacuum",
        "unit": "kilopascal",
        "suggestedMetric": "",
        "scaling": "value = (raw*0.079) clamped to: ...5177.27",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0123": [
      {
        "id": "FRP",
        "name": "Fuel rail pressure",
        "unit": "kilopascal",
        "suggestedMetric": "",
        "scaling": "value = (raw*10) clamped to: ...655350",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0124": [
      {
        "id": "LAMBDA11_WIDE",
        "name": "Lambda value, Equivalence Ratio Bank 1, Sensor 1",
        "unit": "scalar",
        "suggestedMetric": "",
        "scaling": "value = (raw/32768) clamped to: ...1.99",
        "path": "Engine.Generic.OxygenSensors"
      },
      {
        "id": "O2S11_WIDE",
        "name": "Wide Range O2S Voltage, O2 Sensor Bank 1, Sensor 1",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/8196) clamped to: ...7.999",
        "path": "Engine.Generic.OxygenSensors"
      }
    ],
    "7E0_012C": [
      {
        "id": "EGR_PCT",
        "name": "Commanded EGR",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Engine.Generic"
      }
    ],
    "7E0_012D": [
      {
        "id": "EGR_ERR",
        "name": "EGR error",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /128 +-100) clamped to: -100...99.22",
        "path": "Engine.Generic"
      }
    ],
    "7E0_012E": [
      {
        "id": "EVAP_PCT",
        "name": "Commanded evaporative purge",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Engine.Generic"
      }
    ],
    "7E0_012F": [
      {
        "id": "FLI",
        "name": "Fuel tank level",
        "unit": "percent",
        "suggestedMetric": "fuelTankLevel",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Fuel.Generic"
      }
    ],
    "7E0_0130": [
      {
        "id": "WARM_UPS",
        "name": "Number of warm-ups since diagnostic trouble codes cleared",
        "unit": "scalar",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic"
      }
    ],
    "7E0_0131": [
      {
        "id": "CLR_DIST",
        "name": "Distance traveled since diagnostic trouble codes cleared",
        "unit": "kilometers",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic"
      }
    ],
    "7E0_0132": [
      {
        "id": "EVAP_VP",
        "name": "Evap system vapor pressure",
        "unit": "kilopascal",
        "suggestedMetric": "",
        "scaling": "value = (raw/4000) clamped to: -8192...8191.75",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0133": [
      {
        "id": "BARO",
        "name": "Barometric pressure",
        "unit": "kilopascal",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic"
      }
    ],
    "7E0_013C": [
      {
        "id": "CATEMP11",
        "name": "Catalyst temperature bank 1, sensor 1",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "value = (raw/10 +-40) clamped to: -40...6513.5",
        "path": "Engine.Generic"
      }
    ],
    "7E0_013D": [
      {
        "id": "CATEMP21",
        "name": "Catalyst temperature bank 2, sensor 1",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "value = (raw/10 +-40) clamped to: -40...6513.5",
        "path": "Engine.Generic"
      }
    ],
    "7E0_013E": [
      {
        "id": "CATEMP12",
        "name": "Catalyst temperature bank 1, sensor 2",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "value = (raw/10 +-40) clamped to: -40...6513.5",
        "path": "Engine.Generic"
      }
    ],
    "7E0_013F": [
      {
        "id": "CATEMP22",
        "name": "Catalyst temperature bank 2, sensor 2",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "value = (raw/10 +-40) clamped to: -40...6513.5",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0141": [
      {
        "id": "CCM_CMPL",
        "name": "Comprehensive component monitoring completed",
        "unit": "yesno",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "FUEL_CMPL",
        "name": "Fuel system monitoring completed",
        "unit": "yesno",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "MIS_CMPL",
        "name": "Misfire monitoring completed",
        "unit": "yesno",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "CCM_ENA",
        "name": "Comprehensive component monitoring enabled",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Support"
      },
      {
        "id": "FUEL_ENA",
        "name": "Fuel system monitoring enabled",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Support"
      },
      {
        "id": "MIS_ENA",
        "name": "Misfire monitoring enabled",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Support"
      },
      {
        "id": "EGR_ENA",
        "name": "EGR system monitoring",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "HTR_ENA",
        "name": "Oxygen sensor heater monitoring",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "O2S_ENA",
        "name": "Oxygen sensor monitoring",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "ACRF_ENA",
        "name": "A/C system refrigerant monitoring",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "AIR_ENA",
        "name": "Secondary air system monitoring",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "EVAP_ENA",
        "name": "Evaporative system monitoring",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "HCAT_ENA",
        "name": "Heated catalyst monitoring",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "CAT_ENA",
        "name": "Catalyst monitoring",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "EGR_CMPL",
        "name": "EGR system monitoring completed",
        "unit": "yesno",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "HTR_CMPL",
        "name": "Oxygen sensor heater monitoring completed",
        "unit": "yesno",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "O2S_CMPL",
        "name": "Oxygen sensor monitoring completed",
        "unit": "yesno",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "ACRFCMPL",
        "name": "A/C system refrigerant monitoring completed",
        "unit": "yesno",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "AIR_CMPL",
        "name": "Secondary air system monitoring completed",
        "unit": "yesno",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "EVAPCMPL",
        "name": "Evaporative system monitoring completed",
        "unit": "yesno",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "HCATCMPL",
        "name": "Heated catalyst monitoring completed",
        "unit": "yesno",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "CAT_CMPL",
        "name": "Catalyst monitoring completed",
        "unit": "yesno",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic.Status"
      },
      {
        "id": "CIM_SUP_FLAG",
        "name": "Compression ignition monitoring supported",
        "unit": "",
        "suggestedMetric": "",
        "scaling": "Mapped values: {'0': {'description': 'Spark ignition monitors supported', 'value': 'SPARK'}, '1': {'description': 'Compression ignition monitors supported', 'value': 'COMPRESSION'}}",
        "path": "DTCs.Generic.Support"
      }
    ],
    "7E0_0142": [
      {
        "id": "VPWR",
        "name": "Control module voltage",
        "unit": "volts",
        "suggestedMetric": "starterBatteryVoltage",
        "scaling": "value = (raw/1000) clamped to: ...65535",
        "path": "Battery.Generic"
      }
    ],
    "7E0_0143": [
      {
        "id": "LOAD_ABS",
        "name": "Absolute load value",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...25700",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0144": [
      {
        "id": "EQ_RAT",
        "name": "Commanded equivalence ratio",
        "unit": "scalar",
        "suggestedMetric": "",
        "scaling": "value = (raw*2 /65535) clamped to: ...1.99",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0145": [
      {
        "id": "TP_R",
        "name": "Relative throttle position",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Control.Generic"
      }
    ],
    "7E0_0146": [
      {
        "id": "AAT",
        "name": "Ambient air temperature",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "value = (raw+-40) clamped to: -40...215",
        "path": "Climate.Generic"
      }
    ],
    "7E0_0147": [
      {
        "id": "TP_B",
        "name": "Absolute throttle position B",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Control.Generic"
      }
    ],
    "7E0_0148": [
      {
        "id": "TP_C",
        "name": "Absolute throttle position C",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Control.Generic"
      }
    ],
    "7E0_0149": [
      {
        "id": "APP_D",
        "name": "Accelerator pedal position D",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Control.Pedals.Generic"
      }
    ],
    "7E0_014A": [
      {
        "id": "APP_E",
        "name": "Accelerator pedal position E",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Control.Pedals.Generic"
      }
    ],
    "7E0_014B": [
      {
        "id": "APP_F",
        "name": "Accelerator pedal position F",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Control.Pedals.Generic"
      }
    ],
    "7E0_014C": [
      {
        "id": "TAC_PCT",
        "name": "Commanded throttle actuator control",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Engine.Generic"
      }
    ],
    "7E0_014D": [
      {
        "id": "MIL_TIME",
        "name": "Time run by the engine while MIL was activated",
        "unit": "minutes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic"
      }
    ],
    "7E0_014E": [
      {
        "id": "CLR_TIME",
        "name": "Engine run time since diagnostic trouble codes cleared",
        "unit": "minutes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "DTCs.Generic"
      }
    ],
    "7E0_014F": [
      {
        "id": "MAX_EQ_RAT",
        "name": "Maximum value for equivalence ratio",
        "unit": "scalar",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "MAX_O2_VOLT",
        "name": "Maximum value for oxygen sensor voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "MAX_O2_CURR",
        "name": "Maximum value for oxygen sensor current",
        "unit": "milliamps",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "MAX_MAP",
        "name": "Maximum value for intake manifold absolute pressure (MAP)",
        "unit": "kilopascal",
        "suggestedMetric": "",
        "scaling": "value = (raw*10) clamped to: ...2550",
        "path": "Engine.Generic.Internal"
      }
    ],
    "7E0_0150": [
      {
        "id": "MAX_MAF",
        "name": "Maximum value for air flow rate from mass air flow sensor",
        "unit": "gramsPerSecond",
        "suggestedMetric": "",
        "scaling": "value = (raw*10) clamped to: ...2550",
        "path": "Engine.Generic.Internal"
      }
    ],
    "7E0_0151": [
      {
        "id": "FUEL_TYP",
        "name": "Type of fuel currently being used by the vehicle",
        "unit": "",
        "suggestedMetric": "",
        "scaling": "Mapped values: {'1': {'description': 'Gasoline/petrol', 'value': 'GAS'}, '10': {'description': 'Bi-fuel vehicle using methanol', 'value': 'BI_METH'}, '11': {'description': 'Bi-fuel vehicle using ethanol', 'value': 'BI_ETH'}, '12': {'description': 'Bi-fuel vehicle using LPG', 'value': 'BI_LPG'}, '13': {'description': 'Bi-fuel vehicle using CNG', 'value': 'BI_CNG'}, '14': {'description': 'Bi-fuel vehicle using propane', 'value': 'BI_PROP'}, '15': {'description': 'Bi-fuel vehicle using battery', 'value': 'BI_ELEC'}, '16': {'description': 'Bi-fuel vehicle using battery and combustion engine for propulsion', 'value': 'BI_MIX'}, '17': {'description': 'Hybrid vehicle using gasoline engine for propulsion', 'value': 'HYB_GAS'}, '18': {'description': 'Hybrid vehicle using gasoline engine on ethanol for propulsion', 'value': 'HYB_ETH'}, '19': {'description': 'Hybrid vehicle using diesel engine for propulsion', 'value': 'HYB_DSL'}, '2': {'description': 'Methanol', 'value': 'METH'}, '20': {'description': 'Hybrid vehicle using battery for propulsion', 'value': 'HYB_ELEC'}, '21': {'description': 'Hybrid vehicle using battery and combustion engine for propulsion', 'value': 'HYB_MIX'}, '22': {'description': 'Hybrid vehicle in regeneration mode', 'value': 'HYB_REG'}, '23': {'description': 'Bi-fuel vehicle using diesel', 'value': 'BI_DSL'}, '24': {'description': 'Bi-fuel vehicle using natural gas', 'value': 'BI_NG'}, '25': {'description': 'Bi-fuel vehicle using diesel', 'value': 'BI_DSL'}, '26': {'description': 'Natural gas', 'value': 'NG'}, '27': {'description': 'Dual fuel vehicle using diesel and CNG', 'value': 'DSL_CNG'}, '28': {'description': 'Dual fuel vehicle using diesel and LNG', 'value': 'DSL_LNG'}, '29': {'description': 'Fuel cell utilizing hydrogen', 'value': 'FC_H2'}, '3': {'description': 'Ethanol', 'value': 'ETH'}, '30': {'description': 'Hydrogen Internal Combustion Engine', 'value': 'HICE_HHO'}, '31': {'description': 'Kerosene', 'value': 'KERO'}, '32': {'description': 'Heavy Fuel Oil', 'value': 'HFO'}, '4': {'description': 'Diesel', 'value': 'DSL'}, '5': {'description': 'Liquefied petroleum gas', 'value': 'LPG'}, '6': {'description': 'Compressed natural gas', 'value': 'CNG'}, '7': {'description': 'Propane', 'value': 'PROP'}, '8': {'description': 'Battery/electric', 'value': 'ELEC'}, '9': {'description': 'Bi-fuel vehicle using gasoline/petrol', 'value': 'BI_GAS'}}",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0152": [
      {
        "id": "ALCH_PCT",
        "name": "Alcohol fuel percentage",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Fuel.Generic"
      }
    ],
    "7E0_0153": [
      {
        "id": "EVAP_VPA",
        "name": "Absolute evap system vapor pressure",
        "unit": "kilopascal",
        "suggestedMetric": "",
        "scaling": "value = (raw/200) clamped to: ...327.675",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0154": [
      {
        "id": "EVAP_VP_WIDE",
        "name": "Evap system vapor pressure (wide)",
        "unit": "kilopascal",
        "suggestedMetric": "",
        "scaling": "value = (raw/1000) clamped to: -32767...32768",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0155": [
      {
        "id": "STSO2FT1",
        "name": "Short term secondary O2 sensor fuel trim (bank 1)",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /128 +-100) clamped to: -100...99.22",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0156": [
      {
        "id": "LGSO2FT1",
        "name": "Long term secondary O2 sensor fuel trim (bank 1)",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /128 +-100) clamped to: -100...99.22",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0157": [
      {
        "id": "STSO2FT2",
        "name": "Short term secondary O2 sensor fuel trim (bank 2)",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /128 +-100) clamped to: -100...99.22",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0158": [
      {
        "id": "LGSO2FT2",
        "name": "Long term secondary O2 sensor fuel trim (bank 2)",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /128 +-100) clamped to: -100...99.22",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0159": [
      {
        "id": "FRP_ABS",
        "name": "Fuel rail pressure (absolute)",
        "unit": "kilopascal",
        "suggestedMetric": "",
        "scaling": "value = (raw*10) clamped to: ...655350",
        "path": "Engine.Generic"
      }
    ],
    "7E0_015A": [
      {
        "id": "APP_R",
        "name": "Accelerator pedal position\u00a0(relative)",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Control.Pedals.Generic"
      }
    ],
    "7E0_015B": [
      {
        "id": "BAT_SOC",
        "name": "Hybrid battery pack remaining charge",
        "unit": "percent",
        "suggestedMetric": "stateOfCharge",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Battery.Generic"
      }
    ],
    "7E0_015C": [
      {
        "id": "EOT",
        "name": "Engine oil temperature",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "value = (raw+-40) clamped to: -40...210",
        "path": "Engine.Generic"
      }
    ],
    "7E0_015D": [
      {
        "id": "FUEL_TIMING",
        "name": "Fuel injection timing",
        "unit": "degrees",
        "suggestedMetric": "",
        "scaling": "value = (raw/128 +-38665) clamped to: -210...301.992",
        "path": "Engine.Generic"
      }
    ],
    "7E0_015E": [
      {
        "id": "FUEL_RATE",
        "name": "Engine fuel rate",
        "unit": "liters",
        "suggestedMetric": "",
        "scaling": "value = (raw/20) clamped to: ...3212.75",
        "path": "Fuel.Generic"
      }
    ],
    "7E0_015F": [
      {
        "id": "EMIS_SUP",
        "name": "Emission requirements to which vehicle is designed",
        "unit": "",
        "suggestedMetric": "",
        "scaling": "Mapped values: {'14': {'description': 'Heavy duty vehicles (EURO IV) B1', 'value': 'EURO IV B1'}, '15': {'description': 'Heavy duty vehicles (EURO V) B2', 'value': 'EURO V B2'}, '16': {'description': 'Heavy duty vehicles (EURO EEV) C', 'value': 'EURO C'}, '17': {'description': 'Heavy Duty Vehicles (Euro VI)', 'value': 'EURO VI'}}",
        "path": "Emissions.Generic"
      }
    ],
    "7E0_0161": [
      {
        "id": "TQ_DD",
        "name": "Driver's demand engine torque",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw+-125) clamped to: -125...130",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0162": [
      {
        "id": "TQ_ACT",
        "name": "Actual engine torque",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw+-125) clamped to: -125...130",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0163": [
      {
        "id": "TQ_REF",
        "name": "Engine reference torque",
        "unit": "newtonMeters",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0164": [
      {
        "id": "TQ_MAX1",
        "name": "Engine Percent Torque At Idle, Point 1",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw+-125) clamped to: -125...130",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "TQ_MAX2",
        "name": "Engine Percent Torque At Point 2",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw+-125) clamped to: -125...130",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "TQ_MAX3",
        "name": "Engine Percent Torque At Point 3",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw+-125) clamped to: -125...130",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "TQ_MAX4",
        "name": "Engine Percent Torque At Point 4",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw+-125) clamped to: -125...130",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "TQ_MAX5",
        "name": "Engine Percent Torque At Point 5",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw+-125) clamped to: -125...130",
        "path": "Engine.Generic.Internal"
      }
    ],
    "7E0_0165": [
      {
        "id": "GEAR_SUP",
        "name": "Recommended gear supported",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.AuxInputs.Internal"
      },
      {
        "id": "GPL_SUP",
        "name": "Glow plug lamp status supported",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.AuxInputs.Internal"
      },
      {
        "id": "N/G_SUP",
        "name": "Manual trans neutral gear status supported",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.AuxInputs.Internal"
      },
      {
        "id": "N/D_SUP",
        "name": "Auto trans neutral drive status supported",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.AuxInputs.Internal"
      },
      {
        "id": "PTO_SUP",
        "name": "Power Take Off (PTO) output status supported",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.AuxInputs.Internal"
      },
      {
        "id": "GEAR_RCMD",
        "name": "Recommended gear",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.AuxInputs"
      },
      {
        "id": "GPL_STAT",
        "name": "Glow plug lamp status",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.AuxInputs"
      },
      {
        "id": "N/G_STAT",
        "name": "Manual Trans Neutral Gear Status",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.AuxInputs"
      },
      {
        "id": "N/D_STAT",
        "name": "Auto Trans Neutral Drive Status",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.AuxInputs"
      },
      {
        "id": "PTO_STAT_AUX",
        "name": "Power Take Off (PTO) Output Status",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.AuxInputs"
      }
    ],
    "7E0_0166": [
      {
        "id": "MAFB_SUP",
        "name": "MAF Sensor B supported",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "MAFA_SUP",
        "name": "MAF Sensor A supported",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "MAFA",
        "name": "Mass Air Flow Sensor A",
        "unit": "gramsPerSecond",
        "suggestedMetric": "",
        "scaling": "value = (raw/32) clamped to: ...2047.96875",
        "path": "Engine.Generic"
      },
      {
        "id": "MAFB",
        "name": "Mass Air Flow Sensor B",
        "unit": "gramsPerSecond",
        "suggestedMetric": "",
        "scaling": "value = (raw/32) clamped to: ...2047.96875",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0167": [
      {
        "id": "ECT 2_SUP",
        "name": "Is ECT sensor 2 supported?",
        "unit": "scalar",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "ECT 1_SUP",
        "name": "Is ECT sensor 1 supported?",
        "unit": "scalar",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "ECT 1",
        "name": "Engine coolant temperature 1",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "value = (raw+-40) clamped to: -40...215",
        "path": "Engine.Generic"
      },
      {
        "id": "ECT 2",
        "name": "Engine coolant temperature 2",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "value = (raw+-40) clamped to: -40...215",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0169": [
      {
        "id": "EGR_B_ERR_SUP",
        "name": "EGR A error support status",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "EGR_B_ACT_SUP",
        "name": "Actual EGR A support status",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "EGR_B_CMD_SUP",
        "name": "Commanded EGR A support status",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "EGR_A_ERR_SUP",
        "name": "EGR A error support status",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "EGR_A_ACT_SUP",
        "name": "Actual EGR A support status",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "EGR_A_CMD_SUP",
        "name": "Commanded EGR A support status",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "EGR_A_CMD",
        "name": "Commanded EGR A Duty Cycle/Position",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Engine.Generic"
      },
      {
        "id": "EGR_A_ACT",
        "name": "Actual EGR A Duty Cycle/Position",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Engine.Generic"
      },
      {
        "id": "EGR_A_ERR",
        "name": "EGR A error",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /128 +-100) clamped to: -100...99.22",
        "path": "Engine.Generic"
      },
      {
        "id": "EGR_B_CMD",
        "name": "Commanded EGR B Duty Cycle/Position",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Engine.Generic"
      },
      {
        "id": "EGR_B_ACT",
        "name": "Actual EGR B Duty Cycle/Position",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Engine.Generic"
      },
      {
        "id": "EGR_B_ERR",
        "name": "EGR B error",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /128 +-100) clamped to: -100...99.22",
        "path": "Engine.Generic"
      }
    ],
    "7E0_016C": [
      {
        "id": "RTP_B_SUP",
        "name": "Relative Throttle B Position data supported?",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "CTAC_B_SUP",
        "name": "Commanded Throttle Actuator B Control supported?",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "RTP_A_SUP",
        "name": "Relative Throttle A Position data supported?",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "CTAC_A_SUP",
        "name": "Commanded Throttle Actuator A Control supported?",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "TAC_A_CMD",
        "name": "Commanded Throttle Actuator A Control",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Engine.Generic"
      },
      {
        "id": "TP_A_REL",
        "name": "Relative Throttle A Position",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Engine.Generic"
      },
      {
        "id": "TAC_B_CMD",
        "name": "Commanded Throttle Actuator B Control",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Engine.Generic"
      },
      {
        "id": "TP_B_REL",
        "name": "Relative Throttle B Position",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Engine.Generic"
      }
    ],
    "7E0_017F": [
      {
        "id": "PTO_TIME_SUP",
        "name": "Total Run Time With PTO Active supported?",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "IDLE_TIME_SUP",
        "name": "Total Idle Run Time supported?",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "RUN_TIME_SUP",
        "name": "Total Engine Run Time supported?",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic.Internal"
      },
      {
        "id": "RUN_TIME",
        "name": "Total Engine Run Time",
        "unit": "seconds",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic"
      },
      {
        "id": "IDLE_TIME",
        "name": "Total Idle Run Time",
        "unit": "seconds",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic"
      },
      {
        "id": "PTO_TIME",
        "name": "Total Run Time With PTO Active",
        "unit": "seconds",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine.Generic"
      }
    ],
    "7E0_0184": [
      {
        "id": "MST",
        "name": "Manifold surface temperature",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "value = (raw+-40) clamped to: -40...215",
        "path": "Engine.Generic"
      }
    ],
    "7E0_018D": [
      {
        "id": "TP_G",
        "name": "Absolute Throttle Position G",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Engine.Generic"
      }
    ],
    "7E0_018E": [
      {
        "id": "TQ_FR",
        "name": "Engine Friction - Percent Torque",
        "unit": "percent",
        "suggestedMetric": "",
        "scaling": "value = (raw+-125) clamped to: -125...130",
        "path": "Engine.Generic"
      }
    ],
    "7E0_019A": [
      {
        "id": "EHEV_MODE_SUP",
        "name": "Enhanced Hybrid/EV Vehicle Charging State supported?",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Battery.Generic.Internal"
      },
      {
        "id": "HEV_BATT_A_SUP",
        "name": "Hybrid/EV Battery Current supported?",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Battery.Generic.Internal"
      },
      {
        "id": "HEV_BATT_V_SUP",
        "name": "Hybrid/EV Battery Voltage supported?",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Battery.Generic.Internal"
      },
      {
        "id": "HEV_MODE_SUP",
        "name": "Hybrid/EV Vehicle Charging State supported?",
        "unit": "noyes",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Battery.Generic.Internal"
      },
      {
        "id": "HEV_BATT_V",
        "name": "Hybrid/EV Battery System Voltage",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/64) clamped to: ...1023.98",
        "path": "Battery.Generic"
      },
      {
        "id": "HEV_BATT_A",
        "name": "Hybrid/EV Battery System Current",
        "unit": "volts",
        "suggestedMetric": "",
        "scaling": "value = (raw/10) clamped to: -3276.8...3276.7",
        "path": "Battery.Generic"
      },
      {
        "id": "HEV_MODE",
        "name": "Hybrid/EV Vehicle Charging State",
        "unit": "",
        "suggestedMetric": "",
        "scaling": "Mapped values: {'0': {'description': 'Charge sustaining mode', 'value': 'CSM'}, '1': {'description': 'Charge depleting mode', 'value': 'CDM'}}",
        "path": "Battery.Generic"
      },
      {
        "id": "EHEV_MODE",
        "name": "Enhanced Hybrid/EV Vehicle Charging State",
        "unit": "",
        "suggestedMetric": "",
        "scaling": "Mapped values: {'0': {'description': 'Charge sustaining mode', 'value': 'CSM'}, '1': {'description': 'Charge depleting mode', 'value': 'CDM'}, '2': {'description': 'Charge increasing mode', 'value': 'CIM'}}",
        "path": "Battery.Generic"
      }
    ],
    "7E0_019D": [
      {
        "id": "FUEL_RATE_ALT",
        "name": "Engine fuel rate (alternate)",
        "unit": "gramsPerSecond",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...1310.7",
        "path": "Fuel.Generic"
      },
      {
        "id": "VFUEL_RATE",
        "name": "Vehicle fuel rate",
        "unit": "gramsPerSecond",
        "suggestedMetric": "",
        "scaling": "value = (raw/50) clamped to: ...1310.7",
        "path": "Fuel.Generic"
      }
    ],
    "7E0_019E": [
      {
        "id": "EXH_RATE",
        "name": "Engine exhaust flow rate",
        "unit": "kilogramsPerHour",
        "suggestedMetric": "",
        "scaling": "value = (raw/5) clamped to: ...13107",
        "path": "Fuel.Generic"
      }
    ],
    "7E0_01A6": [
      {
        "id": "ODO",
        "name": "Odometer",
        "unit": "kilometers",
        "suggestedMetric": "odometer",
        "scaling": "value = (raw/10) clamped to: ...429496729.5",
        "path": "Trips.Generic"
      }
    ],
    "7E0_01AA": [
      {
        "id": "V_SET",
        "name": "Maximum current vehicle speed limit",
        "unit": "kilometersPerHour",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Movement.Generic"
      }
    ],
    "7E0_01B2": [
      {
        "id": "BAT_SOH",
        "name": "Traction battery pack State of Health",
        "unit": "kilometersPerHour",
        "suggestedMetric": "",
        "scaling": "value = (raw*100 /255) clamped to: ...100",
        "path": "Battery.Generic"
      }
    ],
    "7E0_01D3": [
      {
        "id": "ODO_ENG",
        "name": "Engine odometer",
        "unit": "kilometers",
        "suggestedMetric": "",
        "scaling": "value = (raw/10) clamped to: ...429496729.5",
        "path": "Trips.Generic"
      }
    ],
    "7E0_2128": [],
    "7E0_2151": [],
    "7E0_2185": [],
    "7E4_220101": [],
    "7E4_220102": [],
    "7E4_220103": [],
    "7E4_220104": [],
    "7E4_220105": [],
    "7E4_22010A": [],
    "7E4_22010B": [],
    "7E4_22010C": []
  },
  {
    "make": "Subaru",
    "model": "WRX",
    "744_22E001": [],
    "744_22E003": [],
    "750_2116": [],
    "750_2130": [],
    "750_221004": [],
    "750_221005": [],
    "750_222021": [],
    "753_221022": [
      {
        "id": "WRX_TP_RL",
        "name": "Rear left tire pressure",
        "unit": "psi",
        "suggestedMetric": "rearLeftTirePressure",
        "scaling": "value = (raw/5) clamped to: ...51",
        "path": "Tires"
      },
      {
        "id": "WRX_TP_RR",
        "name": "Rear right tire pressure",
        "unit": "psi",
        "suggestedMetric": "rearRightTirePressure",
        "scaling": "value = (raw/5) clamped to: ...51",
        "path": "Tires"
      },
      {
        "id": "WRX_TP_FR",
        "name": "Front right tire pressure",
        "unit": "psi",
        "suggestedMetric": "frontRightTirePressure",
        "scaling": "value = (raw/5) clamped to: ...51",
        "path": "Tires"
      },
      {
        "id": "WRX_TP_FL",
        "name": "Front left tire pressure",
        "unit": "psi",
        "suggestedMetric": "frontLeftTirePressure",
        "scaling": "value = (raw/5) clamped to: ...51",
        "path": "Tires"
      }
    ],
    "7A0_22C00B": [],
    "7B0_2103": [],
    "7B3_220100": [],
    "7C0_2129": [],
    "7C6_22B002": [],
    "7E0_0101": [],
    "7E0_0102": [],
    "7E0_0103": [],
    "7E0_0104": [],
    "7E0_0105": [],
    "7E0_0106": [],
    "7E0_0107": [],
    "7E0_0108": [],
    "7E0_0109": [],
    "7E0_010A": [],
    "7E0_010B": [],
    "7E0_010C": [],
    "7E0_010D": [],
    "7E0_010E": [],
    "7E0_010F": [],
    "7E0_0110": [],
    "7E0_0111": [],
    "7E0_0112": [],
    "7E0_0113": [],
    "7E0_0114": [],
    "7E0_0115": [],
    "7E0_011C": [],
    "7E0_011D": [],
    "7E0_011E": [],
    "7E0_011F": [],
    "7E0_0121": [],
    "7E0_0122": [],
    "7E0_0123": [],
    "7E0_0124": [],
    "7E0_012C": [],
    "7E0_012D": [],
    "7E0_012E": [],
    "7E0_012F": [],
    "7E0_0130": [],
    "7E0_0131": [],
    "7E0_0132": [],
    "7E0_0133": [],
    "7E0_013C": [],
    "7E0_013D": [],
    "7E0_013E": [],
    "7E0_013F": [],
    "7E0_0141": [],
    "7E0_0142": [],
    "7E0_0143": [],
    "7E0_0144": [],
    "7E0_0145": [],
    "7E0_0146": [],
    "7E0_0147": [],
    "7E0_0148": [],
    "7E0_0149": [],
    "7E0_014A": [],
    "7E0_014B": [],
    "7E0_014C": [],
    "7E0_014D": [],
    "7E0_014E": [],
    "7E0_014F": [],
    "7E0_0150": [],
    "7E0_0151": [],
    "7E0_0152": [],
    "7E0_0153": [],
    "7E0_0154": [],
    "7E0_0155": [],
    "7E0_0156": [],
    "7E0_0157": [],
    "7E0_0158": [],
    "7E0_0159": [],
    "7E0_015A": [],
    "7E0_015B": [],
    "7E0_015C": [],
    "7E0_015D": [],
    "7E0_015E": [],
    "7E0_015F": [],
    "7E0_0161": [],
    "7E0_0162": [],
    "7E0_0163": [],
    "7E0_0164": [],
    "7E0_0165": [],
    "7E0_0166": [],
    "7E0_0167": [],
    "7E0_0169": [],
    "7E0_016C": [],
    "7E0_017F": [],
    "7E0_0184": [],
    "7E0_018D": [],
    "7E0_018E": [],
    "7E0_019A": [],
    "7E0_019D": [],
    "7E0_019E": [],
    "7E0_01A6": [],
    "7E0_01AA": [],
    "7E0_01B2": [],
    "7E0_01D3": [],
    "7E0_2128": [],
    "7E0_2151": [],
    "7E0_2185": [],
    "7E4_220101": [],
    "7E4_220102": [],
    "7E4_220103": [],
    "7E4_220104": [],
    "7E4_220105": [],
    "7E4_22010A": [],
    "7E4_22010B": [],
    "7E4_22010C": []
  },
  {
    "make": "Toyota",
    "model": "Camry",
    "744_22E001": [],
    "744_22E003": [],
    "750_2116": [
      {
        "id": "CAMRY_TT_FL",
        "name": "Front left tire temperature",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "value = (raw+-40) clamped to: -40...215",
        "path": "Tires"
      },
      {
        "id": "CAMRY_TT_FR",
        "name": "Front right tire temperature",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "value = (raw+-40) clamped to: -40...215",
        "path": "Tires"
      },
      {
        "id": "CAMRY_TT_RL",
        "name": "Rear left tire temperature",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "value = (raw+-40) clamped to: -40...215",
        "path": "Tires"
      },
      {
        "id": "CAMRY_TT_RR",
        "name": "Rear right tire temperature",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "value = (raw+-40) clamped to: -40...215",
        "path": "Tires"
      },
      {
        "id": "CAMRY_TT_SPARE",
        "name": "Spare tire temperature",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "value = (raw+-40) clamped to: -40...215",
        "path": "Tires"
      }
    ],
    "750_2130": [
      {
        "id": "CAMRY_TP_FL",
        "name": "Front left tire pressure",
        "unit": "bars",
        "suggestedMetric": "frontLeftTirePressure",
        "scaling": "value = (raw/58 +-0.5) clamped to: ...4",
        "path": "Tires"
      },
      {
        "id": "CAMRY_TP_FR",
        "name": "Front right tire pressure",
        "unit": "bars",
        "suggestedMetric": "frontRightTirePressure",
        "scaling": "value = (raw/58 +-0.5) clamped to: ...4",
        "path": "Tires"
      },
      {
        "id": "CAMRY_TP_RL",
        "name": "Rear left tire pressure",
        "unit": "bars",
        "suggestedMetric": "rearLeftTirePressure",
        "scaling": "value = (raw/58 +-0.5) clamped to: ...4",
        "path": "Tires"
      },
      {
        "id": "CAMRY_TP_RR",
        "name": "Rear right tire pressure",
        "unit": "bars",
        "suggestedMetric": "rearRightTirePressure",
        "scaling": "value = (raw/58 +-0.5) clamped to: ...4",
        "path": "Tires"
      },
      {
        "id": "CAMRY_TP_SPARE",
        "name": "Spare tire pressure",
        "unit": "bars",
        "suggestedMetric": "",
        "scaling": "value = (raw/58 +-0.5) clamped to: ...4",
        "path": "Tires"
      }
    ],
    "750_221004": [],
    "750_221005": [],
    "750_222021": [],
    "753_221022": [],
    "7A0_22C00B": [],
    "7B0_2103": [
      {
        "id": "CAMRY_TIRE_FR_SPD",
        "name": "Front right wheel speed",
        "unit": "kilometersPerHour",
        "suggestedMetric": "",
        "scaling": "value = (raw*256 /200) clamped to: ...326.4",
        "path": "Movement"
      },
      {
        "id": "CAMRY_TIRE_FL_SPD",
        "name": "Front left wheel speed",
        "unit": "kilometersPerHour",
        "suggestedMetric": "",
        "scaling": "value = (raw*256 /200) clamped to: ...326.4",
        "path": "Movement"
      },
      {
        "id": "CAMRY_TIRE_RR_SPD",
        "name": "Rear right wheel speed",
        "unit": "kilometersPerHour",
        "suggestedMetric": "",
        "scaling": "value = (raw*256 /200) clamped to: ...326.4",
        "path": "Movement"
      },
      {
        "id": "CAMRY_TIRE_RL_SPD",
        "name": "Rear left wheel speed",
        "unit": "kilometersPerHour",
        "suggestedMetric": "",
        "scaling": "value = (raw*256 /200) clamped to: ...326.4",
        "path": "Movement"
      }
    ],
    "7B3_220100": [],
    "7C0_2129": [],
    "7C6_22B002": [],
    "7E0_0101": [],
    "7E0_0102": [],
    "7E0_0103": [],
    "7E0_0104": [],
    "7E0_0105": [],
    "7E0_0106": [],
    "7E0_0107": [],
    "7E0_0108": [],
    "7E0_0109": [],
    "7E0_010A": [],
    "7E0_010B": [],
    "7E0_010C": [],
    "7E0_010D": [],
    "7E0_010E": [],
    "7E0_010F": [],
    "7E0_0110": [],
    "7E0_0111": [],
    "7E0_0112": [],
    "7E0_0113": [],
    "7E0_0114": [],
    "7E0_0115": [],
    "7E0_011C": [],
    "7E0_011D": [],
    "7E0_011E": [],
    "7E0_011F": [],
    "7E0_0121": [],
    "7E0_0122": [],
    "7E0_0123": [],
    "7E0_0124": [],
    "7E0_012C": [],
    "7E0_012D": [],
    "7E0_012E": [],
    "7E0_012F": [],
    "7E0_0130": [],
    "7E0_0131": [],
    "7E0_0132": [],
    "7E0_0133": [],
    "7E0_013C": [],
    "7E0_013D": [],
    "7E0_013E": [],
    "7E0_013F": [],
    "7E0_0141": [],
    "7E0_0142": [],
    "7E0_0143": [],
    "7E0_0144": [],
    "7E0_0145": [],
    "7E0_0146": [],
    "7E0_0147": [],
    "7E0_0148": [],
    "7E0_0149": [],
    "7E0_014A": [],
    "7E0_014B": [],
    "7E0_014C": [],
    "7E0_014D": [],
    "7E0_014E": [],
    "7E0_014F": [],
    "7E0_0150": [],
    "7E0_0151": [],
    "7E0_0152": [],
    "7E0_0153": [],
    "7E0_0154": [],
    "7E0_0155": [],
    "7E0_0156": [],
    "7E0_0157": [],
    "7E0_0158": [],
    "7E0_0159": [],
    "7E0_015A": [],
    "7E0_015B": [],
    "7E0_015C": [],
    "7E0_015D": [],
    "7E0_015E": [],
    "7E0_015F": [],
    "7E0_0161": [],
    "7E0_0162": [],
    "7E0_0163": [],
    "7E0_0164": [],
    "7E0_0165": [],
    "7E0_0166": [],
    "7E0_0167": [],
    "7E0_0169": [],
    "7E0_016C": [],
    "7E0_017F": [],
    "7E0_0184": [],
    "7E0_018D": [],
    "7E0_018E": [],
    "7E0_019A": [],
    "7E0_019D": [],
    "7E0_019E": [],
    "7E0_01A6": [],
    "7E0_01AA": [],
    "7E0_01B2": [],
    "7E0_01D3": [],
    "7E0_2128": [],
    "7E0_2151": [],
    "7E0_2185": [],
    "7E4_220101": [],
    "7E4_220102": [],
    "7E4_220103": [],
    "7E4_220104": [],
    "7E4_220105": [],
    "7E4_22010A": [],
    "7E4_22010B": [],
    "7E4_22010C": []
  },
  {
    "make": "Toyota",
    "model": "Corolla-Hybrid",
    "744_22E001": [],
    "744_22E003": [],
    "750_2116": [],
    "750_2130": [],
    "750_221004": [
      {
        "id": "COROLLAHYBRID_TT_1",
        "name": "Rear right tire temperature",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "value = (raw+-40) clamped to: -30...100",
        "path": "Tires"
      },
      {
        "id": "COROLLAHYBRID_TT_2",
        "name": "Rear left tire temperature",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "value = (raw+-40) clamped to: -30...100",
        "path": "Tires"
      },
      {
        "id": "COROLLAHYBRID_TT_3",
        "name": "Front right tire temperature",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "value = (raw+-40) clamped to: -30...100",
        "path": "Tires"
      },
      {
        "id": "COROLLAHYBRID_TT_4",
        "name": "Front left tire temperature",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "value = (raw+-40) clamped to: -30...100",
        "path": "Tires"
      }
    ],
    "750_221005": [
      {
        "id": "COROLLAHYBRID_TP_1",
        "name": "Rear right tire pressure",
        "unit": "psi",
        "suggestedMetric": "rearRightTirePressure",
        "scaling": "value = (raw/4.125 +-5.6969697) clamped to: ...56.8",
        "path": "Tires"
      },
      {
        "id": "COROLLAHYBRID_TP_2",
        "name": "Rear left tire pressure",
        "unit": "psi",
        "suggestedMetric": "rearLeftTirePressure",
        "scaling": "value = (raw/4.125 +-5.6969697) clamped to: ...56.8",
        "path": "Tires"
      },
      {
        "id": "COROLLAHYBRID_TP_3",
        "name": "Front right tire pressure",
        "unit": "psi",
        "suggestedMetric": "frontRightTirePressure",
        "scaling": "value = (raw/4.125 +-5.6969697) clamped to: ...56.8",
        "path": "Tires"
      },
      {
        "id": "COROLLAHYBRID_TP_4",
        "name": "Front left tire pressure",
        "unit": "psi",
        "suggestedMetric": "frontLeftTirePressure",
        "scaling": "value = (raw/4.125 +-5.6969697) clamped to: ...56.8",
        "path": "Tires"
      }
    ],
    "750_222021": [
      {
        "id": "COROLLAHYBRID_TID_1",
        "name": "Tire 1 position",
        "unit": "",
        "suggestedMetric": "",
        "scaling": "Mapped values: {'1': {'description': 'Front left', 'value': 'FL'}, '2': {'description': 'Front right', 'value': 'FR'}, '3': {'description': 'Rear left', 'value': 'RL'}, '4': {'description': 'Rear right', 'value': 'RR'}}",
        "path": "Tires"
      },
      {
        "id": "COROLLAHYBRID_TID_2",
        "name": "Tire 2 position",
        "unit": "",
        "suggestedMetric": "",
        "scaling": "Mapped values: {'1': {'description': 'Front left', 'value': 'FL'}, '2': {'description': 'Front right', 'value': 'FR'}, '3': {'description': 'Rear left', 'value': 'RL'}, '4': {'description': 'Rear right', 'value': 'RR'}}",
        "path": "Tires"
      },
      {
        "id": "COROLLAHYBRID_TID_3",
        "name": "Tire 3 position",
        "unit": "",
        "suggestedMetric": "",
        "scaling": "Mapped values: {'1': {'description': 'Front left', 'value': 'FL'}, '2': {'description': 'Front right', 'value': 'FR'}, '3': {'description': 'Rear left', 'value': 'RL'}, '4': {'description': 'Rear right', 'value': 'RR'}}",
        "path": "Tires"
      },
      {
        "id": "COROLLAHYBRID_TID_4",
        "name": "Tire 4 position",
        "unit": "",
        "suggestedMetric": "",
        "scaling": "Mapped values: {'1': {'description': 'Front left', 'value': 'FL'}, '2': {'description': 'Front right', 'value': 'FR'}, '3': {'description': 'Rear left', 'value': 'RL'}, '4': {'description': 'Rear right', 'value': 'RR'}}",
        "path": "Tires"
      }
    ],
    "753_221022": [],
    "7A0_22C00B": [],
    "7B0_2103": [],
    "7B3_220100": [],
    "7C0_2129": [],
    "7C6_22B002": [],
    "7E0_0101": [],
    "7E0_0102": [],
    "7E0_0103": [],
    "7E0_0104": [],
    "7E0_0105": [],
    "7E0_0106": [],
    "7E0_0107": [],
    "7E0_0108": [],
    "7E0_0109": [],
    "7E0_010A": [],
    "7E0_010B": [],
    "7E0_010C": [],
    "7E0_010D": [],
    "7E0_010E": [],
    "7E0_010F": [],
    "7E0_0110": [],
    "7E0_0111": [],
    "7E0_0112": [],
    "7E0_0113": [],
    "7E0_0114": [],
    "7E0_0115": [],
    "7E0_011C": [],
    "7E0_011D": [],
    "7E0_011E": [],
    "7E0_011F": [],
    "7E0_0121": [],
    "7E0_0122": [],
    "7E0_0123": [],
    "7E0_0124": [],
    "7E0_012C": [],
    "7E0_012D": [],
    "7E0_012E": [],
    "7E0_012F": [],
    "7E0_0130": [],
    "7E0_0131": [],
    "7E0_0132": [],
    "7E0_0133": [],
    "7E0_013C": [],
    "7E0_013D": [],
    "7E0_013E": [],
    "7E0_013F": [],
    "7E0_0141": [],
    "7E0_0142": [],
    "7E0_0143": [],
    "7E0_0144": [],
    "7E0_0145": [],
    "7E0_0146": [],
    "7E0_0147": [],
    "7E0_0148": [],
    "7E0_0149": [],
    "7E0_014A": [],
    "7E0_014B": [],
    "7E0_014C": [],
    "7E0_014D": [],
    "7E0_014E": [],
    "7E0_014F": [],
    "7E0_0150": [],
    "7E0_0151": [],
    "7E0_0152": [],
    "7E0_0153": [],
    "7E0_0154": [],
    "7E0_0155": [],
    "7E0_0156": [],
    "7E0_0157": [],
    "7E0_0158": [],
    "7E0_0159": [],
    "7E0_015A": [],
    "7E0_015B": [],
    "7E0_015C": [],
    "7E0_015D": [],
    "7E0_015E": [],
    "7E0_015F": [],
    "7E0_0161": [],
    "7E0_0162": [],
    "7E0_0163": [],
    "7E0_0164": [],
    "7E0_0165": [],
    "7E0_0166": [],
    "7E0_0167": [],
    "7E0_0169": [],
    "7E0_016C": [],
    "7E0_017F": [],
    "7E0_0184": [],
    "7E0_018D": [],
    "7E0_018E": [],
    "7E0_019A": [],
    "7E0_019D": [],
    "7E0_019E": [],
    "7E0_01A6": [],
    "7E0_01AA": [],
    "7E0_01B2": [],
    "7E0_01D3": [],
    "7E0_2128": [],
    "7E0_2151": [],
    "7E0_2185": [],
    "7E4_220101": [],
    "7E4_220102": [],
    "7E4_220103": [],
    "7E4_220104": [],
    "7E4_220105": [],
    "7E4_22010A": [],
    "7E4_22010B": [],
    "7E4_22010C": []
  },
  {
    "make": "Toyota",
    "model": "RAV4",
    "744_22E001": [],
    "744_22E003": [],
    "750_2116": [],
    "750_2130": [],
    "750_221004": [],
    "750_221005": [],
    "750_222021": [],
    "753_221022": [],
    "7A0_22C00B": [],
    "7B0_2103": [
      {
        "id": "RAV4_TIRE_FR_SPD",
        "name": "Front right wheel speed",
        "unit": "kilometersPerHour",
        "suggestedMetric": "",
        "scaling": "value = (raw*256 /200) clamped to: ...326.4",
        "path": "Movement"
      },
      {
        "id": "RAV4_TIRE_FL_SPD",
        "name": "Front left wheel speed",
        "unit": "kilometersPerHour",
        "suggestedMetric": "",
        "scaling": "value = (raw*256 /200) clamped to: ...326.4",
        "path": "Movement"
      },
      {
        "id": "RAV4_TIRE_RR_SPD",
        "name": "Rear right wheel speed",
        "unit": "kilometersPerHour",
        "suggestedMetric": "",
        "scaling": "value = (raw*256 /200) clamped to: ...326.4",
        "path": "Movement"
      },
      {
        "id": "RAV4_TIRE_RL_SPD",
        "name": "Rear left wheel speed",
        "unit": "kilometersPerHour",
        "suggestedMetric": "",
        "scaling": "value = (raw*256 /200) clamped to: ...326.4",
        "path": "Movement"
      }
    ],
    "7B3_220100": [],
    "7C0_2129": [
      {
        "id": "RAV4_FLI_VOL",
        "name": "Fuel level (volume)",
        "unit": "liters",
        "suggestedMetric": "",
        "scaling": "value = (raw/2) clamped to: ...127.5",
        "path": "Fuel"
      }
    ],
    "7C6_22B002": [],
    "7E0_0101": [],
    "7E0_0102": [],
    "7E0_0103": [],
    "7E0_0104": [],
    "7E0_0105": [],
    "7E0_0106": [],
    "7E0_0107": [],
    "7E0_0108": [],
    "7E0_0109": [],
    "7E0_010A": [],
    "7E0_010B": [],
    "7E0_010C": [],
    "7E0_010D": [],
    "7E0_010E": [],
    "7E0_010F": [],
    "7E0_0110": [],
    "7E0_0111": [],
    "7E0_0112": [],
    "7E0_0113": [],
    "7E0_0114": [],
    "7E0_0115": [],
    "7E0_011C": [],
    "7E0_011D": [],
    "7E0_011E": [],
    "7E0_011F": [],
    "7E0_0121": [],
    "7E0_0122": [],
    "7E0_0123": [],
    "7E0_0124": [],
    "7E0_012C": [],
    "7E0_012D": [],
    "7E0_012E": [],
    "7E0_012F": [],
    "7E0_0130": [],
    "7E0_0131": [],
    "7E0_0132": [],
    "7E0_0133": [],
    "7E0_013C": [],
    "7E0_013D": [],
    "7E0_013E": [],
    "7E0_013F": [],
    "7E0_0141": [],
    "7E0_0142": [],
    "7E0_0143": [],
    "7E0_0144": [],
    "7E0_0145": [],
    "7E0_0146": [],
    "7E0_0147": [],
    "7E0_0148": [],
    "7E0_0149": [],
    "7E0_014A": [],
    "7E0_014B": [],
    "7E0_014C": [],
    "7E0_014D": [],
    "7E0_014E": [],
    "7E0_014F": [],
    "7E0_0150": [],
    "7E0_0151": [],
    "7E0_0152": [],
    "7E0_0153": [],
    "7E0_0154": [],
    "7E0_0155": [],
    "7E0_0156": [],
    "7E0_0157": [],
    "7E0_0158": [],
    "7E0_0159": [],
    "7E0_015A": [],
    "7E0_015B": [],
    "7E0_015C": [],
    "7E0_015D": [],
    "7E0_015E": [],
    "7E0_015F": [],
    "7E0_0161": [],
    "7E0_0162": [],
    "7E0_0163": [],
    "7E0_0164": [],
    "7E0_0165": [],
    "7E0_0166": [],
    "7E0_0167": [],
    "7E0_0169": [],
    "7E0_016C": [],
    "7E0_017F": [],
    "7E0_0184": [],
    "7E0_018D": [],
    "7E0_018E": [],
    "7E0_019A": [],
    "7E0_019D": [],
    "7E0_019E": [],
    "7E0_01A6": [],
    "7E0_01AA": [],
    "7E0_01B2": [],
    "7E0_01D3": [],
    "7E0_2128": [
      {
        "id": "RAV4_ODO",
        "name": "Odometer",
        "unit": "kilometers",
        "suggestedMetric": "odometer",
        "scaling": "",
        "path": "Trips"
      }
    ],
    "7E0_2151": [
      {
        "id": "RAV4_PREV_TRIP_DST",
        "name": "Previous trip distance",
        "unit": "kilometers",
        "suggestedMetric": "",
        "scaling": "value = (raw/100) clamped to: ...655.35",
        "path": "Trips"
      },
      {
        "id": "RAV4_VVTOT",
        "name": "Variable valve timing oil temperature",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine"
      },
      {
        "id": "RAV4_EOT",
        "name": "Engine oil temperature",
        "unit": "celsius",
        "suggestedMetric": "",
        "scaling": "",
        "path": "Engine"
      }
    ],
    "7E0_2185": [
      {
        "id": "RAV4_GEAR",
        "name": "Gear",
        "unit": "",
        "suggestedMetric": "",
        "scaling": "Mapped values: {'1': {'description': 'Park', 'value': 'PARK'}}",
        "path": "Engine"
      }
    ],
    "7E4_220101": [],
    "7E4_220102": [],
    "7E4_220103": [],
    "7E4_220104": [],
    "7E4_220105": [],
    "7E4_22010A": [],
    "7E4_22010B": [],
    "7E4_22010C": []
  }
];
const ecuPidCombos = [
  [
    "744",
    "22E001"
  ],
  [
    "744",
    "22E003"
  ],
  [
    "750",
    "2116"
  ],
  [
    "750",
    "2130"
  ],
  [
    "750",
    "221004"
  ],
  [
    "750",
    "221005"
  ],
  [
    "750",
    "222021"
  ],
  [
    "753",
    "221022"
  ],
  [
    "7A0",
    "22C00B"
  ],
  [
    "7B0",
    "2103"
  ],
  [
    "7B3",
    "220100"
  ],
  [
    "7C0",
    "2129"
  ],
  [
    "7C6",
    "22B002"
  ],
  [
    "7E0",
    "0101"
  ],
  [
    "7E0",
    "0102"
  ],
  [
    "7E0",
    "0103"
  ],
  [
    "7E0",
    "0104"
  ],
  [
    "7E0",
    "0105"
  ],
  [
    "7E0",
    "0106"
  ],
  [
    "7E0",
    "0107"
  ],
  [
    "7E0",
    "0108"
  ],
  [
    "7E0",
    "0109"
  ],
  [
    "7E0",
    "010A"
  ],
  [
    "7E0",
    "010B"
  ],
  [
    "7E0",
    "010C"
  ],
  [
    "7E0",
    "010D"
  ],
  [
    "7E0",
    "010E"
  ],
  [
    "7E0",
    "010F"
  ],
  [
    "7E0",
    "0110"
  ],
  [
    "7E0",
    "0111"
  ],
  [
    "7E0",
    "0112"
  ],
  [
    "7E0",
    "0113"
  ],
  [
    "7E0",
    "0114"
  ],
  [
    "7E0",
    "0115"
  ],
  [
    "7E0",
    "011C"
  ],
  [
    "7E0",
    "011D"
  ],
  [
    "7E0",
    "011E"
  ],
  [
    "7E0",
    "011F"
  ],
  [
    "7E0",
    "0121"
  ],
  [
    "7E0",
    "0122"
  ],
  [
    "7E0",
    "0123"
  ],
  [
    "7E0",
    "0124"
  ],
  [
    "7E0",
    "012C"
  ],
  [
    "7E0",
    "012D"
  ],
  [
    "7E0",
    "012E"
  ],
  [
    "7E0",
    "012F"
  ],
  [
    "7E0",
    "0130"
  ],
  [
    "7E0",
    "0131"
  ],
  [
    "7E0",
    "0132"
  ],
  [
    "7E0",
    "0133"
  ],
  [
    "7E0",
    "013C"
  ],
  [
    "7E0",
    "013D"
  ],
  [
    "7E0",
    "013E"
  ],
  [
    "7E0",
    "013F"
  ],
  [
    "7E0",
    "0141"
  ],
  [
    "7E0",
    "0142"
  ],
  [
    "7E0",
    "0143"
  ],
  [
    "7E0",
    "0144"
  ],
  [
    "7E0",
    "0145"
  ],
  [
    "7E0",
    "0146"
  ],
  [
    "7E0",
    "0147"
  ],
  [
    "7E0",
    "0148"
  ],
  [
    "7E0",
    "0149"
  ],
  [
    "7E0",
    "014A"
  ],
  [
    "7E0",
    "014B"
  ],
  [
    "7E0",
    "014C"
  ],
  [
    "7E0",
    "014D"
  ],
  [
    "7E0",
    "014E"
  ],
  [
    "7E0",
    "014F"
  ],
  [
    "7E0",
    "0150"
  ],
  [
    "7E0",
    "0151"
  ],
  [
    "7E0",
    "0152"
  ],
  [
    "7E0",
    "0153"
  ],
  [
    "7E0",
    "0154"
  ],
  [
    "7E0",
    "0155"
  ],
  [
    "7E0",
    "0156"
  ],
  [
    "7E0",
    "0157"
  ],
  [
    "7E0",
    "0158"
  ],
  [
    "7E0",
    "0159"
  ],
  [
    "7E0",
    "015A"
  ],
  [
    "7E0",
    "015B"
  ],
  [
    "7E0",
    "015C"
  ],
  [
    "7E0",
    "015D"
  ],
  [
    "7E0",
    "015E"
  ],
  [
    "7E0",
    "015F"
  ],
  [
    "7E0",
    "0161"
  ],
  [
    "7E0",
    "0162"
  ],
  [
    "7E0",
    "0163"
  ],
  [
    "7E0",
    "0164"
  ],
  [
    "7E0",
    "0165"
  ],
  [
    "7E0",
    "0166"
  ],
  [
    "7E0",
    "0167"
  ],
  [
    "7E0",
    "0169"
  ],
  [
    "7E0",
    "016C"
  ],
  [
    "7E0",
    "017F"
  ],
  [
    "7E0",
    "0184"
  ],
  [
    "7E0",
    "018D"
  ],
  [
    "7E0",
    "018E"
  ],
  [
    "7E0",
    "019A"
  ],
  [
    "7E0",
    "019D"
  ],
  [
    "7E0",
    "019E"
  ],
  [
    "7E0",
    "01A6"
  ],
  [
    "7E0",
    "01AA"
  ],
  [
    "7E0",
    "01B2"
  ],
  [
    "7E0",
    "01D3"
  ],
  [
    "7E0",
    "2128"
  ],
  [
    "7E0",
    "2151"
  ],
  [
    "7E0",
    "2185"
  ],
  [
    "7E4",
    "220101"
  ],
  [
    "7E4",
    "220102"
  ],
  [
    "7E4",
    "220103"
  ],
  [
    "7E4",
    "220104"
  ],
  [
    "7E4",
    "220105"
  ],
  [
    "7E4",
    "22010A"
  ],
  [
    "7E4",
    "22010B"
  ],
  [
    "7E4",
    "22010C"
  ]
];