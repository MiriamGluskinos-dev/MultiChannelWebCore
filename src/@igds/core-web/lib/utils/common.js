/**
 * Returns the value of a CSS property from the document's body.
 * If the CSS property is not found, it returns a fallback value.
 *
 * @param {string} property - The CSS property to retrieve.
 * @param {string} fallback - The value to return when the property is not found.
 * @returns {string} The value of the CSS property.
 */
export function getCssValue(property, fallback) {
    return (window.getComputedStyle(document.body).getPropertyValue(property) ||
        fallback);
}
/**
 * Returns the direction of the element or 'ltr' if it's not set.
 *
 * @param {Element} element - The element to check.
 * @returns {string} The direction of the element.
 */
export function getDirection(element) {
    return window.getComputedStyle(element).direction === 'rtl' ? 'rtl' : 'ltr';
}
/**
 * Clamps a number between a minimum and a maximum value.
 *
 * @param value - The number to be clamped.
 * @param min - The minimum value to clamp to.
 * @param max - The maximum value to clamp to.
 * @returns The clamped value.
 */
export function clampNumber(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * Throttle function calls
 *
 * @param fn - The function to throttle.
 * @param ms - The number of milliseconds to throttle invocations to.
 * @returns Returns the new throttled function.
 */
export function throttle(fn, ms) {
    let timerId;
    return () => {
        if (timerId !== undefined) {
            return;
        }
        timerId = setTimeout(() => {
            fn();
            timerId = undefined;
        }, ms);
    };
}
/**
 * Calculate increment index for keyboard navigation
 * @param eventKey
 * @return increment index
 */
export function calculateIndexIncrement(eventKey) {
    if (["ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */, "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */].includes(eventKey)) {
        return -1;
    }
    else if (["ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */, "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */].includes(eventKey)) {
        return 1;
    }
    return 0;
}
/**
 * Pseudo-random number generator for html node identifications
 * self.crypto.randomUUID is undefined for non https domains
 *
 * @returns Pseudo-random string id.
 */
export function generateId() {
    return self.crypto.randomUUID !== undefined
        ? self.crypto.randomUUID()
        : `id-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
/**
 * Function to check if an element is visible within the viewport
 *
 * @param element Element
 * @returns {boolean} value is element entire in viewport.
 */
export function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}
