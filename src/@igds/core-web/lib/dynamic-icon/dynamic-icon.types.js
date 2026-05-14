import * as libIcons from '@igds/icons';
export const ALL_ICON_NAMES = Object.entries(libIcons).map(([name]) => name);
export function isIconName(name) {
    return ALL_ICON_NAMES.includes(name);
}
