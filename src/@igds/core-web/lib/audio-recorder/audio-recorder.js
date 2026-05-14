var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { AudioRecordController, handleAudioError } from '../utils';
import { mic } from '@igds/icons';
import styles from './audio-recorder.scss?inline';
const STEP = 1000;
const LIMIT = 60 * STEP;
let AudioRecorder = class AudioRecorder extends IGDSElement {
    constructor() {
        super(...arguments);
        this._controller = new AudioRecordController();
        this._limitTimer = null;
        this._counter = 0;
        this.isRecording = false;
        this.limit = LIMIT;
        this.disabled = false;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.clearTimer();
    }
    start() {
        this.isRecording = true;
        this._limitTimer = setInterval(() => {
            this._counter += STEP;
            if (this._counter > this.limit) {
                this.stop();
            }
        }, STEP);
        return this._controller
            .start()
            .then(() => {
            this.emit(IGDS_EVENTS.start, new Date().toISOString());
            this.emit(IGDS_EVENTS.voice);
        })
            .catch((error) => {
            handleAudioError(error);
            this.isRecording = false;
        });
    }
    stop() {
        this.isRecording = false;
        this._counter = 0;
        this.clearTimer();
        return this._controller
            .stop()
            .then((audioBlob) => {
            this.emit(IGDS_EVENTS.stop, new Date().toISOString(), {
                completed: true,
                audio: audioBlob,
            });
            return audioBlob;
        })
            .catch((error) => {
            handleAudioError(error);
        });
    }
    handleClick() {
        this.isRecording ? this.stop() : this.start();
    }
    clearTimer() {
        this._limitTimer && clearInterval(this._limitTimer);
    }
    render() {
        return html `
      <button
        role="status"
        aria-live="polite"
        aria-label="Audio recorder"
        ?disabled=${this.disabled}
        class=${classMap({
            'audio-recorder': true,
            'audio-recorder--active': this.isRecording,
            'audio-recorder--disabled': this.disabled,
        })}
        @click=${this.handleClick}
      >
        <igds-icon aria-hidden="true" node=${mic}></igds-icon>
      </button>
    `;
    }
};
AudioRecorder.styles = unsafeCSS(styles);
__decorate([
    state()
], AudioRecorder.prototype, "isRecording", void 0);
__decorate([
    property({ type: Number })
], AudioRecorder.prototype, "limit", void 0);
__decorate([
    property({ type: Boolean })
], AudioRecorder.prototype, "disabled", void 0);
AudioRecorder = __decorate([
    customElement(IGDS_TAGS.audioRecorder)
], AudioRecorder);
export { AudioRecorder };
