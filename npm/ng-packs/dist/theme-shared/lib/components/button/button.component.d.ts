import { EventEmitter, ElementRef, Renderer2, OnInit } from '@angular/core';
import { ABP } from '@abp/ng.core';
export declare class ButtonComponent implements OnInit {
    private renderer;
    buttonId: string;
    buttonClass: string;
    buttonType: string;
    iconClass: string;
    loading: boolean;
    disabled: boolean;
    attributes: ABP.Dictionary<string>;
    readonly click: EventEmitter<MouseEvent>;
    readonly focus: EventEmitter<FocusEvent>;
    readonly blur: EventEmitter<FocusEvent>;
    readonly abpClick: EventEmitter<MouseEvent>;
    readonly abpFocus: EventEmitter<FocusEvent>;
    readonly abpBlur: EventEmitter<FocusEvent>;
    buttonRef: ElementRef<HTMLButtonElement>;
    readonly icon: string;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
}
