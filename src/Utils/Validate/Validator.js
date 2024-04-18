export const reqField = (value) => {
    if (value) return undefined;
    return 'field is required';
}
export const maxLengthUser = (maxLength) => {
    return (value) => {
        if (value && value.length < maxLength) return undefined;
        return `max length ${maxLength} symbols`;
    }
}