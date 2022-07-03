import { ERROR } from './error-messages.js'

export const getTemplateContent = (htmlString) => {
    
    try {
        return new DOMParser()
            .parseFromString(htmlString, 'text/html')
            ?.querySelector('template')
            .content
            .cloneNode(true)
    }
    catch(_) {
        console.error(ERROR.TEMPLATE_UNDEFINED)
    }
}
