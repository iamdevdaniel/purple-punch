import template from '../templates/button.html'
import styles from '../styles/button.css'
import { getTemplateContent } from '../utils/html-helpers.js'
import { getInlineStyle } from '../utils/css-helpers.js'
export default class Button extends HTMLElement {

    static tagName = 'punch-button'

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(getInlineStyle(styles))
        this.shadowRoot.appendChild(getTemplateContent(template))
    }

    static get observedattributes() {
        return ['onClick']
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }
}
