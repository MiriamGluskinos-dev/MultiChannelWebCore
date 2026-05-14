export const isBubbledEvent = (event) => {
    return event.currentTarget !== event.target;
};
export const isEventInvokedInsideOfShadowDOM = (event) => {
    return event.composedPath()[0] !== event.target;
};
