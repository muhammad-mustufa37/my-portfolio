import timerControlledLed from './images/timerControlledLed.jpeg'
import timerControlledLed2 from './images/timerControlledLed2.jpeg'

export const projects = [
  {
    id: 1,
    title: 'Timer-Controlled LED System',
    category: 'Embedded Systems',
    technologies: ['C++','millis()', 'Debounce logic', 'GPIO'],
    description:
      'Hardware timer-driven LED control without HAL libraries. Demonstrates register-level GPIO and timer configuration.',
    images: [timerControlledLed, timerControlledLed2],
    github: 'https://github.com/muhammad-mustufa37/module1Project',
    demo: null,
    featured: true,
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Smart Power Monitor',
    category: 'Embedded Systems',
    technologies: ['Embedded C', 'ADC', 'UART', 'Filtering'],
    description:
      'Working on a real-time power monitor with data logging and serial insights.',
    images: [],
    github: null,
    demo: null,
    featured: true,
    status: 'Working on it',
  },
  {
    id: 3,
    title: 'IoT Sensor Mesh',
    category: 'Networking',
    technologies: ['MQTT', 'ESP32', 'Wi-Fi', 'Node-RED'],
    description:
      'In progress sensor network for reliable environmental data collection.',
    images: [],
    github: null,
    demo: null,
    featured: true,
    status: 'In progress',
  },
  {
    id: 4,
    title: 'RTOS Task Scheduler',
    category: 'Embedded Systems',
    technologies: ['FreeRTOS', 'Scheduling', 'Queues', 'Timers'],
    description:
      'Coming soon: multitasking demo with priority-based scheduling and IPC.',
    images: [],
    github: null,
    demo: null,
    featured: true,
    status: 'Coming soon',
  },
  {
    id: 5,
    title: 'Secure Device Provisioning',
    category: 'Security',
    technologies: ['TLS', 'Certificates', 'Bootstrapping', 'PKI'],
    description:
      'In progress secure provisioning workflow for embedded devices.',
    images: [],
    github: null,
    demo: null,
    featured: true,
    status: 'In progress',
  },
]
