import { ElementRef, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { KeyboardLayout } from './layouts';
import { VirtualKeyboardService } from './virtual-keyboard.service';
export declare class NgVirtualKeyboardDirective {
    private element;
    private dialog;
    private virtualKeyboardService;
    private opened;
    private focus;
    private virtualKeyboardSubscription;
    layout: KeyboardLayout | string;
    placeholder: string;
    type: string;
    emitter: EventEmitter<{}>;
    onWindowBlur(): void;
    onWindowFocus(): void;
    onFocus(): void;
    onClick(): void;
    /**
     * Constructor of the class.
     *
     * @param {ElementRef}  element
     * @param {MatDialog}    dialog
     */
    constructor(element: ElementRef, dialog: MatDialog, virtualKeyboardService: VirtualKeyboardService);
    ngOnInit(): void;
    /**
     * Method to open virtual keyboard
     */
    private openKeyboard;
    /**
     * Getter for used keyboard layout.
     *
     * @returns {KeyboardLayout}
     */
    private getLayout;
    /**
     * Getter for used placeholder for virtual keyboard input field.
     *
     * @returns {string}
     */
    private getPlaceHolder;
    /**
     * Getter for used type for virtual keyboard input field.
     *
     * @return {string}
     */
    private getType;
}
