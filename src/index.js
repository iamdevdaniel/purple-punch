import Button from './components/button.js'
import Icon from './components/icon.js'

window.customElements.define(Button.tagName, Button)
window.customElements.define(Icon.tagName, Icon)

const onContentLoaded = () => {
    document.querySelectorAll('.palette .primary > div')
        .forEach((colorElement, i) => colorElement.innerHTML = i)
    document.querySelectorAll('.palette .colors > div')
        .forEach(colorElement => 
            colorElement.innerHTML = colorElement.className)
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', onContentLoaded)
} else {
	onContentLoaded()
}
