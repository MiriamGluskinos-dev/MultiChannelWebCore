export declare function handleAudioError(error: Error): void;
/**
 * A utility class for recording audio
 */
export declare class AudioRecordController {
    private audioBlobs;
    private mediaRecorder;
    private streamBeingCaptured;
    /**
     * Start recording the audio
     * @returns {Promise} - returns a promise that resolves if audio recording successfully started
     */
    start(): Promise<void>;
    /**
     * Stop the started audio recording
     * @returns {Promise} - returns a promise that resolves to the audio as a blob file
     */
    stop(): Promise<Blob>;
    /**
     * Cancel audio recording
     */
    cancel(): void;
    /**
     * Stop all the tracks on the active stream in order to stop the stream and remove
     * the red flashing dot showing in the tab
     */
    private stopStream;
    /**
     * Reset all the recording properties including the media recorder and stream being captured
     */
    private resetRecordingProperties;
}
