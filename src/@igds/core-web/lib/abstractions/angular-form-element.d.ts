import { IGDSElement } from './igds-element';
declare abstract class AngularFormElement extends IGDSElement {
    private passiveElement;
    private _value;
    private _checked;
    protected DEFAULT_VALUE: string;
    set checked(value: boolean);
    get checked(): boolean;
    set value(newValue: string | null);
    get value(): string | null;
    private dispatchAngularSpecificEvent;
    protected setAsAngularLibFormElement(): void;
}
export { AngularFormElement };
