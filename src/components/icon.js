import { ColorClassSelector } from '../utils/palette-helpers.js'
import { ErrorMessage, handleError } from '../utils/error-helpers.js'
import { getInlineStyle } from '../utils/css-helpers.js'
import { getTemplateContent } from '../utils/html-helpers.js'
import icons from '../icons/'
import styles from '../styles/icon.css'
import template from '../templates/icon.html'

export const sizeClassSelector = {
    s: 'small',
    m: 'medium',
    l: 'large',
    xl: 'extra-large',
    default: 'medium',
}
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
        this.svgElement = this.shadowRoot.querySelector('svg')

    }

    #defineEvents() {

    }

    connectedCallback() {

    }

    static get observedAttributes() {
        return ['icon', 'size', 'color']
    }

    attributeChangedCallback(attributeName, oldValue, newValue) {

        switch(attributeName) {
            case 'icon': {
                const iconFamily = icons[newValue]

                if(iconFamily) {
                    this.svgElement.innerHTML = iconFamily.regular
                }
                else {
                    const errorContext = `${Icon.tagName} '${newValue}'`
                    handleError(errorContext, ErrorMessage.ICON_NOT_FOUND)
                }
                break
            }
            case 'size': {
                const sizeClass = sizeClassSelector[newValue]
                const oldSizeClass = sizeClassSelector[oldValue]

                if(sizeClass) {
                    this.svgElement.classList.remove(oldSizeClass)
                    this.svgElement.classList.add(sizeClass)
                }
                else {
                    this.svgElement.classList.remove(oldSizeClass)
                    this.svgElement.classList.add(sizeClassSelector.default)
                    const errorContext = `${Icon.tagName} '${newValue}'`
                    handleError(errorContext, ErrorMessage.ICON_SIZE_NOT_FOUND)
                }
                break
            }
            case 'color': {
                const colorClass = ColorClassSelector[newValue]
                const oldColorClass = ColorClassSelector[oldValue]

                if(colorClass) {
                    this.svgElement.classList.remove(oldColorClass)
                    this.svgElement.classList.add(colorClass)
                }
                else {
                    this.svgElement.classList.remove(oldSizeClass)
                    this.svgElement.classList.add(ColorClassSelector.PRIMARY_0)
                    const errorContext = `${Icon.tagName} '${newValue}'`
                    handleError(errorContext, ErrorMessage.COLOR_NOT_FOUND)
                }
                break
            }
        }
    }
}
