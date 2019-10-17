import { ReplaySubject } from "rxjs/internal/ReplaySubject";
import { MatDialogRef } from '@angular/material';
import { VirtualKeyboardComponent } from './virtual-keyboard.component';
export declare class VirtualKeyboardService {
    private dialogRef;
    shift$: ReplaySubject<boolean>;
    capsLock$: ReplaySubject<boolean>;
    next$: ReplaySubject<boolean>;
    caretPosition$: ReplaySubject<number>;
    private capsLock;
    private shift;
    constructor(dialogRef: MatDialogRef<VirtualKeyboardComponent>);
    /**
     * Setter for Shift value, note that this also sets CapsLock value.
     *
     * @param {boolean} value
     */
    setShift(value: boolean): void;
    /**
     * Setter for CapsLock value
     *
     * @param {boolean} value
     */
    setCapsLock(value: boolean): void;
    /**
     * Toggle for Shift, note that this also toggles CapsLock
     */
    toggleShift(): void;
    /**
     * Toggle for CapsLock
     */
    toggleCapsLock(): void;
    /**
     * Click for CapsLock
     */
    clickNext(): void;
    /**
     * Setter for caret position value.
     *
     * @param {number}  position
     */
    setCaretPosition(position: number): void;
    /**
     * Method to reset Shift and CapsLock values to default ones.
     */
    reset(): void;
    closeAll(): void;
}
