import { IGDSElement } from '../abstractions';
import { IGDS_TAGS } from '../constants';
import { IGDS_PROFILE_PICKER_SIZES } from './constants';
import '../icon/icon';
declare class ProfilePicker extends IGDSElement {
    static styles: import("lit").CSSResult;
    avatarSize: `${IGDS_PROFILE_PICKER_SIZES}`;
    username: string;
    userId: string;
    avatarUrl: string;
    open: boolean;
    render(): import("lit").TemplateResult<1>;
}
export { ProfilePicker };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.profilePicker]: ProfilePicker;
    }
}
