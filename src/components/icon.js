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

    attributeChangedCallback(attributeName, _, newValue) {

        switch(attributeName) {
            case 'icon': {
                const iconFamily = icons[newValue]

                if(iconFamily) {
                    this.svg.innerHTML = iconFamily.regular
                }
                else {
                    const errorContext = `${this.tagName.toLowerCase()} '${newValue}'`
                    handleError(errorContext, ErrorMessage.ICON_NOT_FOUND)
                }
                break
            }
        }
    }
}
