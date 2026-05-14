import { IGDS_EVENT_KEYS } from '../constants';
/**
 * Returns the value of a CSS property from the document's body.
 * If the CSS property is not found, it returns a fallback value.
 *
 * @param {string} property - The CSS property to retrieve.
 * @param {string} fallback - The value to return when the property is not found.
 * @returns {string} The value of the CSS property.
 */
export declare function getCssValue(property: string, fallback: string): string;
/**
 * Returns the direction of the element or 'ltr' if it's not set.
 *
 * @param {Element} element - The element to check.
 * @returns {string} The direction of the element.
 */
export declare function getDirection(element: Element): 'rtl' | 'ltr';
/**
 * Clamps a number between a minimum and a maximum value.
 *
 * @param value - The number to be clamped.
 * @param min - The minimum value to clamp to.
 * @param max - The maximum value to clamp to.
 * @returns The clamped value.
 */
export declare function clampNumber(value: number, min: number, max: number): number;
/**
 * Throttle function calls
 *
 * @param fn - The function to throttle.
 * @param ms - The number of milliseconds to throttle invocations to.
 * @returns Returns the new throttled function.
 */
export declare function throttle(fn: () => void, ms: number): () => void;
/**
 * Calculate increment index for keyboard navigation
 * @param eventKey
 * @return increment index
 */
export declare function calculateIndexIncrement(eventKey: IGDS_EVENT_KEYS): number;
/**
 * Pseudo-random number generator for html node identifications
 * self.crypto.randomUUID is undefined for non https domains
 *
 * @returns Pseudo-random string id.
 */
export declare function generateId(): string;
/**
 * Function to check if an element is visible within the viewport
 *
 * @param element Element
 * @returns {boolean} value is element entire in viewport.
 */
export declare function isElementInViewport(element: Element): boolean;
