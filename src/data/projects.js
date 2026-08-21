import timerControlledLed from './images/timerControlledLed.jpeg'
import timerControlledLed2 from './images/timerControlledLed2.jpeg'
import inProgressLFR from './images/inProgressLFR.jpeg'

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
    title: 'Line Following Robot - LFR',
    category: 'Embedded Systems',
    technologies: ['PID','Non-blocking timer', 'QTR8A IR Sensors', 'Motor Control','C++','mega2560'],
    description:
      'High-performance line-following robot driven by a custom modular C++ HAL, precise PID control, QTR-8A IR sensor integration, and a non-blocking motor execution system.',
    images: [inProgressLFR],
    github: 'https://github.com/muhammad-mustufa37/ModularLFR',
    demo: null,
    featured: true,
    status: 'Working on it',
  },
  {
    id: 3,
    title: 'Coming Soon',
    category: 'Networking',
    technologies: ['<technology1>', '<technology2>', '<technology3>',],
    description:
      '',
    images: [],
    github: null,
    demo: null,
    featured: true,
    status: 'In progress',
  },
  {
    id: 4,
    title: 'Coming Soon',
    category: 'Embedded Systems',
    technologies: ['<technology1>', '<technology2>', '<technology3>',],
    description:
      '',
    images: [],
    github: null,
    demo: null,
    featured: true,
    status: 'Coming soon',
  },
  {
    id: 5,
    title: 'Coming Soon',
    category: 'Security',
    technologies: ['<technology1>', '<technology2>', '<technology3>',],
    description:
      '',
    images: [],
    github: null,
    demo: null,
    featured: true,
    status: 'In progress',
  },
]
