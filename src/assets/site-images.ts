/**
 * Central image map for Vihills Hotel — all assets live under src/assets/images/.
 * Canonical room keys: standard-room.jpeg, standard-double.jpeg, superior-double.jpeg
 * (plus numbered variants for carousels where available).
 */
import heroBanner from './images/vihillshotelheroimagecurrent.jpeg';

import welcome1 from './images/vihillshotelhomeimage1.jpeg';
import welcome2 from './images/vihillsroomview.jpeg';
import welcome3 from './images/vihillsreceptionimage.jpeg';
import welcome4 from './images/vihillroomview2.jpeg';

import standardRoomPrimary from './images/standard-room.jpeg';
import standardRoom2 from './images/standardroom2.jpeg';
import standardRoom3 from './images/standardroom3.jpeg';
import standardRoom4 from './images/standardroom4.jpeg';

import standardDoublePrimary from './images/standard-double.jpeg';
import standardDoubleSecondary from './images/standarddoubleroom2.jpeg';

import superiorDoublePrimary from './images/superior-double.jpeg';
import superiorDouble2 from './images/superiordoubleroom2.jpeg';
import superiorDouble3 from './images/superiordoubleroom3.jpeg';
import superiorDouble4 from './images/superiordoubleroom4.jpeg';

import deluxe1 from './images/deluxeroom.jpeg';
import deluxe2 from './images/deluxeroom1.jpeg';
import deluxe3 from './images/deluxeroom2.jpeg';
import deluxe4 from './images/deluxeroom3.jpeg';

// Event images replaced with curated Unsplash URLs / placeholders
const eventWeddings = 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const eventReceptions = 'https://plus.unsplash.com/premium_photo-1661775263105-57b126d6bb4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const eventParties = 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export const siteImages = {
  heroBanner,
  welcomeCarousel: [welcome1, welcome2, welcome3, welcome4],
  rooms: {
    standardRoom: [standardRoomPrimary, standardRoom2, standardRoom3, standardRoom4],
    standardDouble: [
      standardDoublePrimary,
      standardDoubleSecondary,
      standardDoubleSecondary,
      standardDoublePrimary,
    ],
    superiorDouble: [superiorDoublePrimary, superiorDouble2, superiorDouble3, superiorDouble4],
    deluxeRoom: [deluxe1, deluxe2, deluxe3, deluxe4],
  },
  events: {
    weddings: eventWeddings,
    receptions: eventReceptions,
    parties: eventParties,
  },
} as const;
