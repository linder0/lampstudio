import type { ProjectConfig } from '../../types/project'

// Import images - replace with your own images when ready
// Add candle_holder_on.png and candle_holder_off.png to ./assets/
import candleHolderOn from '../lamp/assets/lamp_on.png'
import candleHolderOff from '../lamp/assets/lamp_off.png'

export const candleHolderConfig: ProjectConfig = {
  slug: 'candle-holder',
  title: 'The Candelabra',
  subtitle: 'Light Study No. 09',
  description: `Ancient light, modern form. This candelabra returns to the primal source of artificial light—the flame—while expressing it through contemporary sculptural language.

Multiple tapered candles rise at varying heights, creating a dynamic composition that changes as the candles burn down. The heavy bronze base provides stability and anchors the piece visually.

Materials: Cast bronze, hand-finished patina
Dimensions: 14" H × 8" W
Edition: Limited run of 45`,
  year: 2025,
  tags: ['Lighting', 'Candle', 'Bronze'],
  featured: false,
  thumbnail: {
    on: candleHolderOn,
    off: candleHolderOff,
    alt: 'The Candelabra - Multi-arm candle holder',
  },
  images: [
    {
      on: candleHolderOn,
      off: candleHolderOff,
      alt: 'The Candelabra - Table setting',
    },
  ],
}

