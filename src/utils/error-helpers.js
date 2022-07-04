export const ErrorMessage = {
    TEMPLATE_UNDEFINED: 'Template undefined.',
    ICON_NOT_FOUND: 'The identifier for the icon was not found.',
    // ATTRIBUTE_NOT_FOUND: 'The attribute identifier does not exist.',
}

export const handleError = (context, message, thrown = false) => {

    const errorToDisplay = `${context}: ${message}`

    if(thrown) {
        throw new Error(errorToDisplay)
    }
    else {
        console.error(errorToDisplay)
    }
}
