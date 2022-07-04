import { ErrorMessage, handleError } from '../utils/error-helpers.js'
import { getInlineStyle } from '../utils/css-helpers.js'
import { getTemplateContent } from '../utils/html-helpers.js'
import icons from '../icons/'
import styles from '../styles/icon.css'
import template from '../templates/icon.html'

export default class Icon extends HTMLElement {

    static tagName = 'punch-icon'

    constructor() {
        super()
        
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(getInlineStyle(styles))
        this.shadowRoot.appendChild(getTemplateContent(template))
        this.#defineProperties()
        this.#defineEvents()
    }

    #defineProperties() {
        this.svg = this.shadowRoot.querySelector('svg')
    }

    #defineEvents() {

    }

    static get observedAttributes() {
        return ['path', 'icon']
    }

    attributeChangedCallback(name, _, newValue) {

        console.log(name, newValue)

        switch(name) {
            case 'icon': {
                const svgIcon = icons[newValue].regular
                if(svgIcon) {

                }
                else {
                    handleError(tagName, ErrorMessage.ICON_NOT_FOUND)
                }
            
                break
            }
            default: {
                break
            }
        }
    }
}
