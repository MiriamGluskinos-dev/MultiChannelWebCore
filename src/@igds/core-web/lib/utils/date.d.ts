/**
 * Computes the elapsedTime since the moment the function is called in the format mm:ss or hh:mm:ss
 * @param {Date} startTime - start time to compute the elapsed time since
 * @returns {String} elapsed time in mm:ss format or hh:mm:ss format, if elapsed hours are 0.
 */
export declare function computeElapsedTime(startTime: Date): string;
