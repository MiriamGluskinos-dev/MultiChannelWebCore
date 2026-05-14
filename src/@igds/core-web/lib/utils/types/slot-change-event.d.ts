export type SlotChangeEvent = Event & {
    target: {
        assignedNodes: (params: {
            flatten: boolean;
        }) => HTMLElement[];
    };
};
