import type { ProjectConfig } from '../../types/project'

// Import images - replace with your own images when ready
// Add desk_lamp_on.png and desk_lamp_off.png to ./assets/
import deskLampOn from '../lamp/assets/lamp_on.png'
import deskLampOff from '../lamp/assets/lamp_off.png'

export const deskLampConfig: ProjectConfig = {
  slug: 'desk-lamp',
  title: 'The Desk Lamp',
  subtitle: 'Light Study No. 05',
  description: `Task lighting reimagined. This desk lamp brings focused illumination to workspaces while maintaining the sculptural presence that defines our collection.

The articulating arm allows precise positioning, while the weighted base provides stability. When lit, a warm pool of light creates an intimate workspace within larger rooms.

Materials: Brushed aluminum, weighted steel base, linen cord
Dimensions: 18" H × 6" base diameter
Edition: Limited run of 35`,
  year: 2024,
  tags: ['Lighting', 'Task Light', 'Workspace'],
  featured: false,
  thumbnail: {
    on: deskLampOn,
    off: deskLampOff,
    alt: 'The Desk Lamp - Articulating task lamp',
  },
  images: [
    {
      on: deskLampOn,
      off: deskLampOff,
      alt: 'The Desk Lamp - Full view',
    },
  ],
}

