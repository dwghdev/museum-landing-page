import { homePage } from './includes/pages/home/homePage.js'
import { eventsPage } from './includes/pages/events/eventsPage.js'
import { galleryPage } from './includes/pages/gallery/galleryPage.js'
import { locationsPage } from './includes/pages/locations/locationsPage.js'
import { navButton } from './includes/navMenu/nav.js'

// function that accepts array of arguments as a string 
// and removes the array(list) separators(,) 
const includeHTML = (...args) => document.body.innerHTML += args.join('') 

// include html string here!
includeHTML(
  homePage,
  galleryPage,
  eventsPage,
  locationsPage,
  navButton
)