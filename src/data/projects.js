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
    title: 'Coming Soon',
    category: 'Embedded Systems',
    technologies: ['xxxxxx', 'xxxxxxx', 'xxxxx', 'xxxxx'],
    description:
      'xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx.',
    images: [],
    github: null,
    demo: null,
    featured: true,
    status: 'Working on it',
  },
  {
    id: 3,
    title: 'Coming Soon',
    category: 'Networking',
    technologies: ['xxxxxx', 'xxxxxxx', 'xxxxx', 'xxxxx'],
    description:
      'xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx.',
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
    technologies: ['xxxxxx', 'xxxxxxx', 'xxxxx', 'xxxxx'],
    description:
      'Coming soon xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx.',
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
    technologies: ['xxxxxx', 'xxxxxxx', 'xxxxx', 'xxxxx'],
    description:
      'xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx.',
    images: [],
    github: null,
    demo: null,
    featured: true,
    status: 'In progress',
  },
]
