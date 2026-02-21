import React, { useState } from 'react';
import { useEnergyStore } from '../../store/energyStore';

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre
      style={{
        backgroundColor: '#16161e',
        borderRadius: 6,
        padding: 12,
        margin: '8px 0',
        fontFamily: '"Fira Code", "Cascadia Code", "Consolas", monospace',
        fontSize: 12,
        lineHeight: 1.6,
        color: '#a9b1d6',
        overflowX: 'auto',
        border: '1px solid #2a2a3e',
      }}
    >
      {children}
    </pre>
  );
}

function ProtocolCard({
  title,
  isOpen,
  onToggle,
  accentColor,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  accentColor: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor: '#1e1e2e',
        borderRadius: 8,
        marginBottom: 10,
        overflow: 'hidden',
        border: '1px solid #2a2a3e',
        borderLeft: `3px solid ${accentColor}`,
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '14px 18px',
          backgroundColor: isOpen ? '#2a2a4e' : 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: accentColor,
          fontSize: 15,
          fontWeight: 600,
          textAlign: 'left',
          transition: 'background-color 0.2s',
        }}
      >
        <span>{title}</span>
        <span
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
            fontSize: 12,
          }}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <div
          style={{
            padding: '14px 18px',
            color: '#e0e0e0',
            fontSize: 14,
            lineHeight: 1.7,
            borderTop: '1px solid #2a2a3e',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProtocolsSection() {
  const userLevel = useEnergyStore((s) => s.userLevel);
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <div style={{ padding: '0 4px' }}>
      <div style={{ marginBottom: 16 }}>
        <h2
          style={{
            margin: '0 0 6px',
            fontSize: 20,
            fontWeight: 700,
            color: '#c0caf5',
          }}
        >
          Communication Protocols
        </h2>
        <p style={{ margin: 0, fontSize: 13, color: '#888' }}>
          How devices in a home energy system talk to each other.
          {userLevel === 'advanced' && ' Advanced view includes additional protocols and technical details.'}
        </p>
      </div>

      {/* Modbus */}
      <ProtocolCard
        title="Modbus — Industrial Communication Protocol"
        isOpen={openSections.has('modbus')}
        onToggle={() => toggle('modbus')}
        accentColor="#e0af68"
      >
        <p style={{ margin: '0 0 10px' }}>
          <strong style={{ color: '#e0af68' }}>What it is:</strong> Modbus is a serial communication protocol originally published by Modicon in 1979. It has become the de facto standard for connecting industrial electronic devices and is widely used in home energy systems.
        </p>

        <p style={{ margin: '0 0 8px' }}>
          <strong style={{ color: '#bb9af7' }}>How it works:</strong>
        </p>
        <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
          <li style={{ marginBottom: 4 }}>
            <strong>Master-slave architecture:</strong> One master device (e.g., your energy management system) initiates requests; slave devices (inverter, meter) respond with data.
          </li>
          <li style={{ marginBottom: 4 }}>
            <strong>Register-based data model:</strong> All data is organized as numbered registers. Each register holds a 16-bit value (0–65535).
          </li>
          <li style={{ marginBottom: 4 }}>
            <strong>Request-response:</strong> The master asks &quot;read register 40001&quot; and the slave returns the value stored there.
          </li>
        </ul>

        <p style={{ margin: '0 0 8px' }}>
          <strong style={{ color: '#bb9af7' }}>In home energy systems:</strong>
        </p>
        <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
          <li style={{ marginBottom: 4 }}>
            <strong>Inverters:</strong> SMA, Fronius, Huawei, GoodWe, and most others support Modbus TCP or RTU for reading production data and setting power limits
          </li>
          <li style={{ marginBottom: 4 }}>
            <strong>Smart meters:</strong> Devices like the Eastron SDM630 or Carlo Gavazzi provide real-time power readings via Modbus
          </li>
          <li style={{ marginBottom: 4 }}>
            <strong>Heat pumps:</strong> Many modern heat pumps expose operational data and accept control commands via Modbus
          </li>
        </ul>

        <p style={{ margin: '0 0 8px' }}>
          <strong style={{ color: '#bb9af7' }}>Modbus TCP vs RTU:</strong>
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 10,
            marginBottom: 12,
          }}
        >
          <div
            style={{
              backgroundColor: '#16161e',
              borderRadius: 6,
              padding: 12,
              borderLeft: '3px solid #7aa2f7',
            }}
          >
            <strong style={{ color: '#7aa2f7' }}>Modbus TCP</strong>
            <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>Over Ethernet / Wi-Fi</li>
              <li style={{ marginBottom: 3 }}>Port 502 (default)</li>
              <li style={{ marginBottom: 3 }}>Easy to integrate with software</li>
              <li>Standard TCP/IP networking</li>
            </ul>
          </div>
          <div
            style={{
              backgroundColor: '#16161e',
              borderRadius: 6,
              padding: 12,
              borderLeft: '3px solid #9ece6a',
            }}
          >
            <strong style={{ color: '#9ece6a' }}>Modbus RTU</strong>
            <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>Over RS-485 serial bus</li>
              <li style={{ marginBottom: 3 }}>Wired, 2-wire connection</li>
              <li style={{ marginBottom: 3 }}>Up to 32 devices on one bus</li>
              <li>Common for meters and sensors</li>
            </ul>
          </div>
        </div>

        <p style={{ margin: '0 0 8px' }}>
          <strong style={{ color: '#bb9af7' }}>Register types:</strong>
        </p>
        <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
          <li style={{ marginBottom: 4 }}>
            <strong>Holding Registers (4xxxx):</strong> Read/write — used for setpoints and configuration (e.g., set power limit)
          </li>
          <li style={{ marginBottom: 4 }}>
            <strong>Input Registers (3xxxx):</strong> Read-only — used for measurements (e.g., current power, voltage, frequency)
          </li>
        </ul>

        {userLevel === 'beginner' && (
          <div
            style={{
              backgroundColor: '#1a2e1a',
              borderRadius: 6,
              padding: 12,
              border: '1px solid #2a3e2a',
            }}
          >
            <strong style={{ color: '#9ece6a' }}>Beginner tip:</strong> Think of Modbus like a filing cabinet — each drawer (register) holds one piece of data. You ask for a specific drawer number, and the device tells you what is inside.
          </div>
        )}

        {userLevel === 'advanced' && (
          <>
            <p style={{ margin: '12px 0 8px' }}>
              <strong style={{ color: '#bb9af7' }}>Function codes:</strong>
            </p>
            <CodeBlock>
              {`FC03 - Read Holding Registers (read setpoints, config)
FC04 - Read Input Registers  (read measurements)
FC06 - Write Single Register  (set one value)
FC16 - Write Multiple Registers (set a range of values)`}
            </CodeBlock>
            <p style={{ margin: '8px 0 8px' }}>
              <strong style={{ color: '#bb9af7' }}>Register map example (Fronius Symo inverter via SunSpec):</strong>
            </p>
            <CodeBlock>
              {`Register  | Length | Description          | Unit
----------|--------|----------------------|------
40072     | 1      | AC Power (total)     | W
40074     | 1      | AC Frequency         | Hz
40084     | 1      | DC Power             | W
40092     | 1      | Operating State      | enum
40236     | 1      | WMaxLimPct           | %
40242     | 1      | WMaxLim_Ena          | enum`}
            </CodeBlock>
            <p style={{ margin: '8px 0 0', fontSize: 13, color: '#888' }}>
              Note: Register addresses and data formats vary by manufacturer. Always consult the device&apos;s Modbus register map documentation.
            </p>
          </>
        )}
      </ProtocolCard>

      {/* OCPP */}
      <ProtocolCard
        title="OCPP — Open Charge Point Protocol"
        isOpen={openSections.has('ocpp')}
        onToggle={() => toggle('ocpp')}
        accentColor="#7aa2f7"
      >
        <p style={{ margin: '0 0 10px' }}>
          <strong style={{ color: '#7aa2f7' }}>What it is:</strong> OCPP (Open Charge Point Protocol) is an open, standardized protocol for communication between EV charging stations and a central management system (CSMS). It enables remote monitoring, control, and smart charging.
        </p>

        <p style={{ margin: '0 0 8px' }}>
          <strong style={{ color: '#bb9af7' }}>OCPP 1.6 vs 2.0.1:</strong>
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 10,
            marginBottom: 12,
          }}
        >
          <div
            style={{
              backgroundColor: '#16161e',
              borderRadius: 6,
              padding: 12,
              borderLeft: '3px solid #e0af68',
            }}
          >
            <strong style={{ color: '#e0af68' }}>OCPP 1.6</strong>
            <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>JSON or SOAP over WebSocket</li>
              <li style={{ marginBottom: 3 }}>Widely adopted, most chargers support it</li>
              <li style={{ marginBottom: 3 }}>Basic smart charging profiles</li>
              <li style={{ marginBottom: 3 }}>Simpler message structure</li>
              <li>No device model / security profiles</li>
            </ul>
          </div>
          <div
            style={{
              backgroundColor: '#16161e',
              borderRadius: 6,
              padding: 12,
              borderLeft: '3px solid #7aa2f7',
            }}
          >
            <strong style={{ color: '#7aa2f7' }}>OCPP 2.0.1</strong>
            <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>JSON over WebSocket only</li>
              <li style={{ marginBottom: 3 }}>Device model for configuration</li>
              <li style={{ marginBottom: 3 }}>Enhanced security profiles</li>
              <li style={{ marginBottom: 3 }}>ISO 15118 support (Plug &amp; Charge)</li>
              <li>Improved smart charging with cost-based profiles</li>
            </ul>
          </div>
        </div>

        <p style={{ margin: '0 0 8px' }}>
          <strong style={{ color: '#bb9af7' }}>Core operations:</strong>
        </p>
        <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
          <li style={{ marginBottom: 4 }}>
            <strong>BootNotification:</strong> Charger registers itself with the CSMS on startup
          </li>
          <li style={{ marginBottom: 4 }}>
            <strong>Authorize:</strong> Validates user identity (RFID, app, or Plug &amp; Charge)
          </li>
          <li style={{ marginBottom: 4 }}>
            <strong>StartTransaction / StopTransaction:</strong> Begins and ends a charging session, tracking energy delivered
          </li>
          <li style={{ marginBottom: 4 }}>
            <strong>MeterValues:</strong> Periodic energy readings sent from charger to CSMS during a session
          </li>
          <li style={{ marginBottom: 4 }}>
            <strong>SetChargingProfile:</strong> The CSMS sends a power limit schedule to the charger
          </li>
        </ul>

        <p style={{ margin: '0 0 8px' }}>
          <strong style={{ color: '#bb9af7' }}>Smart charging profiles:</strong>
        </p>
        <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
          <li style={{ marginBottom: 4 }}>
            <strong>ChargePointMaxProfile:</strong> Sets the overall power limit for the entire charge point
          </li>
          <li style={{ marginBottom: 4 }}>
            <strong>TxDefaultProfile:</strong> Default charging schedule applied to all transactions on a connector
          </li>
          <li style={{ marginBottom: 4 }}>
            <strong>TxProfile:</strong> Charging schedule for a specific active transaction — highest priority
          </li>
        </ul>

        <p style={{ margin: '0 0 10px' }}>
          <strong style={{ color: '#bb9af7' }}>How it enables solar charging:</strong> The energy management system (acting as or communicating with a CSMS) reads current solar surplus from the inverter/meter, calculates available power for EV charging, and sends a SetChargingProfile message to the charger with the updated power limit. The charger adjusts its output accordingly, typically updated every 5–60 seconds.
        </p>

        <div
          style={{
            backgroundColor: '#16213e',
            borderRadius: 6,
            padding: 12,
            border: '1px solid #1e3a5f',
            marginBottom: 12,
          }}
        >
          <strong style={{ color: '#7aa2f7' }}>Australian market context:</strong>
          <p style={{ margin: '6px 0 0', fontSize: 13 }}>
            Most residential EV chargers sold in Australia today support <strong>OCPP 1.6</strong>, which is sufficient for basic smart charging and solar integration. <strong>OCPP 2.0.1</strong> — required for ISO 15118 Plug &amp; Charge and bidirectional V2G charging — is only just beginning to appear in the Australian market (2024–2025).
          </p>
          <p style={{ margin: '6px 0 0', fontSize: 13 }}>
            AEMO and ARENA have run smart charging trials using OCPP as the control protocol, treating home chargers as flexible loads. This positions OCPP as the likely standard for any future grid-interactive EV charging programs in Australia. When choosing a charger, OCPP 1.6 support is sufficient for current solar charging needs; OCPP 2.0.1 is worth prioritising if you anticipate participating in V2G or future demand response programs.
          </p>
        </div>

        {userLevel === 'beginner' && (
          <div
            style={{
              backgroundColor: '#1a2e1a',
              borderRadius: 6,
              padding: 12,
              border: '1px solid #2a3e2a',
            }}
          >
            <strong style={{ color: '#9ece6a' }}>Beginner tip:</strong> OCPP is like a language that your EV charger speaks to the energy management system. The management system says &quot;you can use 3 kW right now&quot; and the charger obeys, adjusting in real time as solar production changes.
          </div>
        )}

        {userLevel === 'advanced' && (
          <>
            <p style={{ margin: '12px 0 8px' }}>
              <strong style={{ color: '#bb9af7' }}>Message structure (OCPP 1.6 JSON):</strong>
            </p>
            <CodeBlock>
              {`// Request: [MessageTypeId, UniqueId, Action, Payload]
[2, "msg001", "SetChargingProfile", {
  "connectorId": 1,
  "csChargingProfiles": {
    "chargingProfileId": 1,
    "stackLevel": 0,
    "chargingProfilePurpose": "TxProfile",
    "chargingProfileKind": "Absolute",
    "chargingSchedule": {
      "chargingRateUnit": "W",
      "chargingSchedulePeriod": [
        { "startPeriod": 0, "limit": 7400.0 }
      ]
    }
  }
}]

// Response: [MessageTypeId, UniqueId, Payload]
[3, "msg001", { "status": "Accepted" }]`}
            </CodeBlock>
            <p style={{ margin: '8px 0 8px' }}>
              <strong style={{ color: '#bb9af7' }}>Smart charging stack (priority low to high):</strong>
            </p>
            <CodeBlock>
              {`1. ChargePointMaxProfile  (site-level limit)
2. TxDefaultProfile       (connector default)
3. TxProfile              (per-transaction override)

The effective limit = min(all applicable profiles)
Stack level: higher stackLevel overrides lower within same purpose`}
            </CodeBlock>
            <p style={{ margin: '8px 0 8px' }}>
              <strong style={{ color: '#bb9af7' }}>ISO 15118 integration (OCPP 2.0.1):</strong>
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                Plug &amp; Charge: Automatic authentication via TLS certificates — no RFID needed
              </li>
              <li style={{ marginBottom: 4 }}>
                Enables bidirectional power transfer (V2G) with coordinated CSMS control
              </li>
              <li style={{ marginBottom: 4 }}>
                15118-20 adds scheduled and dynamic control modes for granular power management
              </li>
            </ul>
          </>
        )}
      </ProtocolCard>

      {/* Other Protocols — Advanced only */}
      {userLevel === 'advanced' && (
        <ProtocolCard
          title="Other Energy Protocols"
          isOpen={openSections.has('other')}
          onToggle={() => toggle('other')}
          accentColor="#9ece6a"
        >
          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#e0af68' }}>SunSpec</h4>
            <p style={{ margin: '0 0 6px' }}>
              A standardized data model built on top of Modbus for solar and storage equipment. Defines consistent register maps so that a SunSpec-compliant inverter from any manufacturer exposes the same data at the same registers.
            </p>
            <CodeBlock>
              {`SunSpec Common Model (Model 1):
  Register 40001: "SunS" identifier (0x53756e53)
  Register 40003: Manufacturer
  Register 40021: Model
  Register 40045: Serial Number

SunSpec Inverter Model (Model 101/103):
  AC Power, Frequency, Voltage, Current, Energy counters`}
            </CodeBlock>
          </div>

          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#7aa2f7' }}>EEBUS</h4>
            <p style={{ margin: '0 0 6px' }}>
              A European smart home energy communication standard. Uses SPINE (Smart Premises Interoperable Neutral-message Exchange) protocol over IP networks. Designed for device-to-device communication without cloud dependency.
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                Use cases: EV charging coordination, heat pump control, battery management
              </li>
              <li style={{ marginBottom: 4 }}>
                Supported by major European manufacturers (SMA, Viessmann, BMW, Porsche)
              </li>
              <li style={{ marginBottom: 4 }}>
                Enables device negotiation: charger requests power, HEMS approves/limits
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#f7768e' }}>OpenADR</h4>
            <p style={{ margin: '0 0 6px' }}>
              Open Automated Demand Response — enables utilities to send demand response signals to buildings and devices. Used for grid stabilization during peak demand events.
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                VTN (Virtual Top Node) sends DR events to VEN (Virtual End Node) devices
              </li>
              <li style={{ marginBottom: 4 }}>
                Signals include price, load level, or simple event notifications
              </li>
              <li style={{ marginBottom: 4 }}>
                Primarily used in commercial buildings and aggregated residential fleets
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#bb9af7' }}>MQTT</h4>
            <p style={{ margin: '0 0 6px' }}>
              Lightweight publish-subscribe messaging protocol widely used for IoT energy monitoring. Not energy-specific, but commonly used to transport energy data.
            </p>
            <CodeBlock>
              {`Topic structure example:
  home/energy/solar/power      → 4523    (watts)
  home/energy/grid/import      → 312     (watts)
  home/energy/battery/soc      → 72      (percent)
  home/energy/ev/charging      → true
  home/energy/ev/power         → 7400    (watts)

Broker receives and distributes messages to subscribers.
QoS levels: 0 (fire & forget), 1 (at least once), 2 (exactly once)`}
            </CodeBlock>
          </div>

          <div>
            <h4 style={{ margin: '0 0 8px', color: '#73daca' }}>Matter / Thread</h4>
            <p style={{ margin: '0 0 6px' }}>
              Emerging smart home standards backed by Apple, Google, Amazon, and Samsung. While primarily focused on general smart home devices (lights, locks, sensors), energy management use cases are expanding.
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                <strong>Matter:</strong> Application-layer protocol. Energy management device types are being added in newer versions.
              </li>
              <li style={{ marginBottom: 4 }}>
                <strong>Thread:</strong> Low-power mesh networking protocol (IP-based). Provides the network layer for Matter devices.
              </li>
              <li style={{ marginBottom: 4 }}>
                Future potential for standardized EV charger, battery, and solar inverter communication in the consumer smart home ecosystem.
              </li>
            </ul>
          </div>
        </ProtocolCard>
      )}
    </div>
  );
}
