import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faShoppingCart)

export default {
  install: (app, options) => {
    app.component('FontAwesomeIcon', FontAwesomeIcon)
  }
}
