var AudioErrorMessages;
(function (AudioErrorMessages) {
    AudioErrorMessages["ABORT_ERROR"] = "An AbortError has occurred.";
    AudioErrorMessages["DEFAULT_ERROR"] = "An error occurred with the error name ";
    AudioErrorMessages["INVALID_STATE_ERROR"] = "An InvalidStateError has occurred.";
    AudioErrorMessages["NOT_ALLOWED_ERROR"] = "A NotAllowedError has occurred. User might have denied permission.";
    AudioErrorMessages["NOT_FOUND_ERROR"] = "A NotFoundError has occurred.";
    AudioErrorMessages["NOT_READABLE_ERROR"] = "A NotReadableError has occurred.";
    AudioErrorMessages["NO_BROWSER_SUPPORT"] = "mediaDevices API or getUserMedia method is not supported in this browser.";
    AudioErrorMessages["SECURITY_ERROR"] = "A SecurityError has occurred.";
    AudioErrorMessages["TYPE_ERROR"] = "A TypeError has occurred.";
    AudioErrorMessages["UNKNOWN_ERROR"] = "An UnknownError has occurred.";
})(AudioErrorMessages || (AudioErrorMessages = {}));
const errorMap = {
    AbortError: AudioErrorMessages.ABORT_ERROR,
    NotAllowedError: AudioErrorMessages.NOT_ALLOWED_ERROR,
    NotFoundError: AudioErrorMessages.NOT_FOUND_ERROR,
    NotReadableError: AudioErrorMessages.NOT_READABLE_ERROR,
    SecurityError: AudioErrorMessages.SECURITY_ERROR,
    TypeError: AudioErrorMessages.TYPE_ERROR,
    InvalidStateError: AudioErrorMessages.INVALID_STATE_ERROR,
    UnknownError: AudioErrorMessages.UNKNOWN_ERROR,
};
export function handleAudioError(error) {
    if (error.message.includes(AudioErrorMessages.NO_BROWSER_SUPPORT)) {
        console.warn(AudioErrorMessages.NO_BROWSER_SUPPORT);
        return;
    }
    const errorMessage = errorMap[error.name] || `${AudioErrorMessages.DEFAULT_ERROR} ${error.name}`;
    console.warn(errorMessage);
}
/**
 * A utility class for recording audio
 */
export class AudioRecordController {
    constructor() {
        this.audioBlobs = [];
        this.mediaRecorder = null;
        this.streamBeingCaptured = null;
    }
    /**
     * Start recording the audio
     * @returns {Promise} - returns a promise that resolves if audio recording successfully started
     */
    start() {
        const isBrowserSupportAPI = Boolean(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
        if (!isBrowserSupportAPI) {
            return Promise.reject(new Error(AudioErrorMessages.NO_BROWSER_SUPPORT));
        }
        return navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((stream) => {
            this.streamBeingCaptured = stream;
            this.mediaRecorder = new MediaRecorder(stream);
            this.audioBlobs = [];
            this.mediaRecorder.addEventListener('dataavailable', (event) => {
                this.audioBlobs.push(event.data);
            });
            this.mediaRecorder.start();
        });
    }
    /**
     * Stop the started audio recording
     * @returns {Promise} - returns a promise that resolves to the audio as a blob file
     */
    stop() {
        return new Promise((resolve) => {
            const mimeType = this.mediaRecorder?.mimeType;
            this.mediaRecorder?.addEventListener('stop', () => {
                const audioBlob = new Blob(this.audioBlobs, { type: mimeType });
                resolve(audioBlob);
            });
            this.cancel();
        });
    }
    /**
     * Cancel audio recording
     */
    cancel() {
        this.mediaRecorder?.stop();
        this.stopStream();
        this.resetRecordingProperties();
    }
    /**
     * Stop all the tracks on the active stream in order to stop the stream and remove
     * the red flashing dot showing in the tab
     */
    stopStream() {
        this.streamBeingCaptured
            ?.getTracks()
            .forEach((track) => track.stop());
    }
    /**
     * Reset all the recording properties including the media recorder and stream being captured
     */
    resetRecordingProperties() {
        this.mediaRecorder = null;
        this.streamBeingCaptured = null;
    }
}
