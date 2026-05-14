import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { IgdsCarouselContext } from './context';
declare class CarouselItem extends IGDSElement {
    context: IgdsCarouselContext;
    createRenderRoot(): this;
    _listItems: Array<HTMLElement>;
    connectedCallback(): void;
}
export { CarouselItem };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.carouselItem]: CarouselItem;
    }
}
