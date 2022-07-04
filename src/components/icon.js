import { ErrorMessage, handleError } from '../utils/error-helpers.js'
import { getInlineStyle } from '../utils/css-helpers.js'
import { getTemplateContent } from '../utils/html-helpers.js'
import icons from '../icons/'
import styles from '../styles/icon.css'
import template from '../templates/icon.html'

export default class Icon extends HTMLElement {

    static tagName = 'punch-icon'
    static sizeClassSelector = {
        s: 'small',
        m: 'medium',
        l: 'large',
        xl: 'extra-large',
        default: 'medium',
    }
    static colorClassSelector = {
        primary0: 'primary-0',
        primary1: 'primary-1',
        primary2: 'primary-2',
        primary3: 'primary-3',
        primary4: 'primary-4',
        pink:
    }
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(getInlineStyle(styles))
        this.shadowRoot.appendChild(getTemplateContent(template))
        this.#defineProperties()
        this.#defineEvents()
    }

    #defineProperties() {
        this.svgElement = this.shadowRoot.querySelector('svg')

    }

    #defineEvents() {

    }

    connectedCallback() {

    }

    static get observedAttributes() {
        return ['icon', 'size']
    }

    attributeChangedCallback(attributeName, oldValue, newValue) {

        switch(attributeName) {
            case 'icon': {
                const iconFamily = icons[newValue]

                if(iconFamily) {
                    this.svgElement.innerHTML = iconFamily.regular
                }
                else {
                    const errorContext = `${this.tagName.toLowerCase()} '${newValue}'`
                    handleError(errorContext, ErrorMessage.ICON_NOT_FOUND)
                }
                break
            }
            case 'size': {
                const sizeClass = this.sizeClassSelector[newValue]
                const oldSizeClass = this.sizeClassSelector[oldValue]

                if(sizeClass) {
                    this.svgElement.classList.remove(oldSizeClass)
                    this.svgElement.classList.add(sizeClass)
                }
                else {
                    this.svgElement.classList.remove(oldSizeClass)
                    this.svgElement.classList.add(this.sizeClassSelector.default)
                    const errorContext = `${this.tagName.toLowerCase()} '${newValue}'`
                    handleError(errorContext, ErrorMessage.ICON_SIZE_NOT_FOUND)
                }
            }
        }
    }
}
