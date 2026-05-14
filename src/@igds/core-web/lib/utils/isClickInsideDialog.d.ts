/**
 * Checks if a mouse click occurred inside the boundaries of a dialog element.
 *
 * @param event - The MouseEvent object containing click coordinates
 * @param rect - The DOMRect object representing the dialog's position and dimensions
 * @returns {boolean} True if the click coordinates are within the dialog boundaries, false otherwise
 */
export declare function isClickInsideDialog(event: MouseEvent, rect: DOMRect): boolean;
