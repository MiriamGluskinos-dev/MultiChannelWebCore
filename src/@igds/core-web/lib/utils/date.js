/**
 * Computes the elapsedTime since the moment the function is called in the format mm:ss or hh:mm:ss
 * @param {Date} startTime - start time to compute the elapsed time since
 * @returns {String} elapsed time in mm:ss format or hh:mm:ss format, if elapsed hours are 0.
 */
export function computeElapsedTime(startTime) {
    const endTime = new Date();
    const timeDiff = endTime.getTime() - startTime.getTime();
    const seconds = Math.floor(timeDiff / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const displaySeconds = seconds % 60;
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = displaySeconds.toString().padStart(2, '0');
    return hours === 0
        ? `${formattedMinutes}:${formattedSeconds}`
        : `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
