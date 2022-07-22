import { ErrorMessage, handleError } from '../utils/error-helpers.js'
import { getInlineStyle } from '../utils/css-helpers.js'
import { getTemplateContent } from '../utils/html-helpers.js'
import iconFamilies from '../icons/'
import styles from '../styles/icon.css'
import template from '../templates/icon.html'

export default class Icon extends HTMLElement {

    static tagName = 'punch-icon'
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(getTemplateContent(template))
        this.shadowRoot.appendChild(getInlineStyle(styles))
    }

    static get observedAttributes() {
        return ['icon', 'type']
    }

    attributeChangedCallback(attributeName, _, newValue) {

        this.svgElement = this.shadowRoot.querySelector('svg')
        const calculatedIcon = attributeName === 'icon'
            ? newValue
            : this.getAttribute('icon')
        const calculatedType = attributeName === 'type'
            ? newValue
            : this.getAttribute('type')
        this.svgElement.innerHTML = iconFamilies
            [calculatedIcon]
            [calculatedType ? calculatedType : 'regular']
    }
}
