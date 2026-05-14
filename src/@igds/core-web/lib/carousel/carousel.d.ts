import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { IgdsCarouselContext } from './context';
declare class Carousel extends IGDSElement {
    static styles: import("lit").CSSResult;
    context: IgdsCarouselContext;
    title: string;
    subtitle: string;
    variant: 'inline' | 'edge';
    slidesPerView: number;
    loop: boolean;
    autoplay: boolean;
    interval: number;
    autopause: boolean;
    private items;
    private readonly swiperContainer;
    private readonly prevButton;
    private readonly nextButton;
    private readonly paginationEl;
    connectedCallback(): void;
    firstUpdated(): void;
    private emitSlideChange;
    private handleNextClick;
    private handlePrevClick;
    private getCarouselClasses;
    private getNavBtnClasses;
    private getNavBtnIcon;
    private getParentDirection;
    render(): import("lit").TemplateResult<1>;
}
export { Carousel };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.carousel]: Carousel;
    }
}
