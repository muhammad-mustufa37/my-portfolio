import { motion } from 'framer-motion'
import './Terminal.css'

const lines = [
  '$ initializing portfolio_system...',
  '',
  '$ engineer --name="Muhammad"',
  '  └─ specialty: embedded_systems + iot',
  '  └─ stack: bare_metal_c + ccna',
  '',
  '$ cat current_focus.txt',
  '  └─ register_level_embedded_c',
  '  └─ avr_architecture',
  '  └─ fsm_design_patterns',
  '',
  '$ cat next_targets.txt',
  '  └─ freertos_basics',
  '  └─ uart_i2c_spi_protocols',
  '  └─ iot_capstone_esp32_mqtt',
  '',
  '$ status --verbose',
  '  [█████░░░░░] Phase 1: C Mastery                    50%',
  '  [██░░░░░░░░] Phase 2: AVR Microcontroller          20%',
  '  [░░░░░░░░░░] Phase 3: FreeRTOS                     0%',
  '',
  '$ echo "Building in public. Growing every day."',
  '  Building in public. Growing every day.',
  '',
  '$ _',
]

const sectionMotion = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function Terminal() {
  return (
    <motion.section
      id="terminal"
      className="terminal-section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionMotion}
    >
      <div className="container">
        <p className="section-title">TERMINAL</p>
        <h2 className="section-heading">Signature system log</h2>
        <div className="terminal-panel">
          <div className="terminal-output">
            {lines.map((line, index) => (
              <div
                key={`${line}-${index}`}
                className="terminal-line"
                style={{ '--delay': `${index * 0.6}s` }}
              >
                {line}
                {index === lines.length - 1 && (
                  <span className="terminal-cursor" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Terminal
