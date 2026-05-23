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
]
