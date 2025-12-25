import type { ProjectConfig } from '../../types/project'

// Import images - replace with your own images when ready
// Add nightlight_on.png and nightlight_off.png to ./assets/
import nightlightOn from '../lamp/assets/lamp_on.png'
import nightlightOff from '../lamp/assets/lamp_off.png'

export const nightlightConfig: ProjectConfig = {
  slug: 'nightlight',
  title: 'The Nightlight',
  subtitle: 'Light Study No. 10',
  description: `Gentle guardians of the dark hours. This nightlight provides just enough illumination to navigate nighttime spaces without disrupting sleep patterns.

The warm, amber-shifted LED mimics candlelight while the touch-sensitive dimming allows intuitive control. Small enough to be unobtrusive, beautiful enough to be noticed.

Materials: Turned walnut, amber LED, touch sensor
Dimensions: 4" H × 3" diameter
Edition: Open edition`,
  year: 2025,
  tags: ['Lighting', 'Nightlight', 'Walnut'],
  featured: false,
  thumbnail: {
    on: nightlightOn,
    off: nightlightOff,
    alt: 'The Nightlight - Compact wooden nightlight',
  },
  images: [
    {
      on: nightlightOn,
      off: nightlightOff,
      alt: 'The Nightlight - Bedroom setting',
    },
  ],
}

