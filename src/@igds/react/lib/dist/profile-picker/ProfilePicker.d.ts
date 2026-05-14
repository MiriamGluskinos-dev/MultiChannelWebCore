import React from 'react';
import { ProfilePicker as ProfilePickerWC } from '@igds/core-web/profile-picker';
declare const ProfilePicker: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<ProfilePickerWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "open" | "avatarSize" | "username" | "userId" | "avatarUrl"> & {} & Partial<Omit<ProfilePickerWC, keyof HTMLElement>> & React.RefAttributes<ProfilePickerWC>, "ref"> & React.RefAttributes<ProfilePickerWC>>;
export { ProfilePicker, ProfilePickerWC };
