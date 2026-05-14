import * as libIcons from '@igds/icons';
export type IconName = keyof typeof libIcons;
export declare const ALL_ICON_NAMES: string[];
export declare function isIconName(name: string): name is IconName;
