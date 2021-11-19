import {loader} from './components/loader.js'
import {slideAnim} from './components/slideAnim.js'
import {openImg} from './components/openImg.js'
import { readMore } from './components/readMoreBtn.js'

readMore()
slideAnim()
openImg()

window.addEventListener('keyup', e => {
  switch(e.key) {
    case 'ArrowLeft': 
      console.log('Left')
      break
    case 'ArrowRight': 
      console.log('Right')
      break
    case 'ArrowUp':
      console.log('Up')
      break
    case 'ArrowDown':
      console.log('Down')
      break
  }
})