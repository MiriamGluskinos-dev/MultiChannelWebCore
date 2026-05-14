import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
declare class AudioRecorder extends IGDSElement {
    static styles: import("lit").CSSResult;
    private readonly _controller;
    private _limitTimer;
    private _counter;
    isRecording: boolean;
    limit: number;
    disabled: boolean;
    disconnectedCallback(): void;
    start(): Promise<void>;
    stop(): Promise<void | Blob>;
    private handleClick;
    private clearTimer;
    render(): import("lit").TemplateResult<1>;
}
export { AudioRecorder };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.audioRecorder]: AudioRecorder;
    }
}
