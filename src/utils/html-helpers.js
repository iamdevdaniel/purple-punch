import { ErrorMessage } from './error-helpers.js'

export const getTemplateContent = (htmlString) => {
    
    try {
        return new DOMParser()
            .parseFromString(htmlString, 'text/html')
            ?.querySelector('template')
            .content
            .cloneNode(true)
    }
    catch(_) {
        console.error(ErrorMessage.TEMPLATE_UNDEFINED)
    }
}
