const locks = new Set();
/** Returns the width of the document's scrollbar */
function getScrollbarWidth() {
    const rootElement = document.documentElement;
    const documentWidth = rootElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
}
/**
 * Used in conjunction with `scrollbarWidth` to set proper body padding in case the user has padding already on the `<body>` element.
 */
function getExistingBodyPadding() {
    const padding = Number(getComputedStyle(document.body).paddingRight.replace(/px/, ''));
    if (isNaN(padding) || !padding) {
        return 0;
    }
    return padding;
}
/**
 * Prevents body scrolling. Keeps track of which elements requested a lock so multiple levels of locking are possible
 * without premature unlocking.
 */
export function lockBodyScrolling(lockingEl) {
    locks.add(lockingEl);
    const rootElement = document.documentElement;
    const isBodyLocked = rootElement.classList.contains('igds-scroll-lock');
    if (isBodyLocked) {
        return;
    }
    const scrollbarWidth = getScrollbarWidth();
    const lockSize = scrollbarWidth + getExistingBodyPadding();
    let { scrollbarGutter } = getComputedStyle(rootElement);
    if (!scrollbarGutter || scrollbarGutter === 'auto') {
        scrollbarGutter = 'stable';
    }
    if (!getScrollbarWidth()) {
        scrollbarGutter = '';
    }
    rootElement.style.setProperty('--igds-scroll-lock-gutter', scrollbarGutter);
    rootElement.classList.add('igds-scroll-lock');
    rootElement.style.setProperty('--igds-scroll-lock-size', `${lockSize}px`);
}
/**
 * Unlocks body scrolling. Scrolling will only be unlocked once all elements that requested a lock call this method.
 */
export function unlockBodyScrolling(lockingEl) {
    locks.delete(lockingEl);
    if (locks.size === 0) {
        const rootElement = document.documentElement;
        rootElement.classList.remove('igds-scroll-lock');
        rootElement.style.removeProperty('--igds-scroll-lock-size');
    }
}
