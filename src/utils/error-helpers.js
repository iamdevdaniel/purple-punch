export const ErrorMessage = {
    TEMPLATE_UNDEFINED: 'Template undefined.',
    ICON_NOT_FOUND: 'Icon not found.',
}

export const handleError = (component, message, thrown = false) => {

    const errorToDisplay = `${component}: ${message}`
    
    if(thrown) {
        throw new Error(errorToDisplay)
    }
    else {
        console.error(errorToDisplay)
    }
}
