import { type PropertyValues } from 'lit';
import { IGDSElement } from '../abstractions';
import { DirectiveResult } from 'lit/async-directive.js';
import { ClassMapDirective } from 'lit/directives/class-map.js';
import { IGDS_TAGS } from '../constants';
import { IGDS_CARD_DIRECTIONS, IGDS_CARD_IMAGE_FIT, IGDS_CARD_SIZES, IGDS_CARD_TYPES, IGDS_CARD_VARIANTS } from './constants';
import { type IGDSButtonInteractionEventClick, type IGDSButtonInteractionEventKeyDown } from '../button';
import '../icon';
import '../button';
declare class Card extends IGDSElement {
    static styles: import("lit").CSSResult[];
    variant?: `${IGDS_CARD_VARIANTS}`;
    type?: `${IGDS_CARD_TYPES}`;
    size?: `${IGDS_CARD_SIZES}`;
    direction?: `${IGDS_CARD_DIRECTIONS}`;
    interactive: boolean;
    disabled: boolean;
    title: string;
    subtitle?: string;
    description?: string;
    imageSrc: string;
    imageFit: `${IGDS_CARD_IMAGE_FIT}`;
    imageAlt?: string;
    label?: string;
    favoriteVisible: boolean;
    defaultFavoriteState: boolean;
    favoriteIconStateActive: string;
    favoriteIconStateInactive: string;
    favoriteLabel: string;
    primaryActionLabel?: string;
    secondaryActionLabel?: string;
    private forcedDirection;
    private favoriteState;
    private isAnyFullPicture;
    constructor();
    willUpdate(changedProperties: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private updateWidth;
    private getForcedDirection;
    private getForcedDirectionBreakpointWidth;
    private getImageFitClassModifier;
    handleClick(_: PointerEvent): void;
    handleFavoriteToggle(event: IGDSButtonInteractionEventClick | IGDSButtonInteractionEventKeyDown): void;
    handlePrimaryAction(): void;
    handleSecondaryAction(): void;
    private handleKeydown;
    private handleKeyup;
    private handleFocus;
    private handleBlur;
    getCardTabindex(): 0 | -1;
    getCardCssClasses(): DirectiveResult<typeof ClassMapDirective>;
    renderFavoriteButton(): import("lit").TemplateResult<1> | undefined;
    renderCtaButtons(): import("lit").TemplateResult<1> | undefined;
    renderCardImage(): import("lit").TemplateResult<1> | undefined;
    hasSubtitle(): boolean | "" | undefined;
    hasDescription(): boolean | "" | undefined;
    hasLabel(): boolean | "" | undefined;
    render(): import("lit").TemplateResult<1>;
}
export { Card };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.card]: Card;
    }
}
