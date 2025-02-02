/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/table-empty-message/table-empty-message.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class TableEmptyMessageComponent {
    constructor() {
        this.colspan = 2;
        this.localizationResource = 'AbpAccount';
        this.localizationProp = 'NoDataAvailableInDatatable';
    }
    /**
     * @return {?}
     */
    get emptyMessage() {
        return this.message || `${this.localizationResource}::${this.localizationProp}`;
    }
}
TableEmptyMessageComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: '[abp-table-empty-message]',
                template: `
    <td class="text-center" [attr.colspan]="colspan">
      {{ emptyMessage | abpLocalization }}
    </td>
  `
            }] }
];
TableEmptyMessageComponent.propDecorators = {
    colspan: [{ type: Input }],
    message: [{ type: Input }],
    localizationResource: [{ type: Input }],
    localizationProp: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TableEmptyMessageComponent.prototype.colspan;
    /** @type {?} */
    TableEmptyMessageComponent.prototype.message;
    /** @type {?} */
    TableEmptyMessageComponent.prototype.localizationResource;
    /** @type {?} */
    TableEmptyMessageComponent.prototype.localizationProp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZW1wdHktbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYmxlLWVtcHR5LW1lc3NhZ2UvdGFibGUtZW1wdHktbWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVd6RCxNQUFNLE9BQU8sMEJBQTBCO0lBVHZDO1FBV0UsWUFBTyxHQUFHLENBQUMsQ0FBQztRQU1aLHlCQUFvQixHQUFHLFlBQVksQ0FBQztRQUdwQyxxQkFBZ0IsR0FBRyw0QkFBNEIsQ0FBQztJQUtsRCxDQUFDOzs7O0lBSEMsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixLQUFLLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ2xGLENBQUM7OztZQXhCRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRTs7OztHQUlUO2FBQ0Y7OztzQkFFRSxLQUFLO3NCQUdMLEtBQUs7bUNBR0wsS0FBSzsrQkFHTCxLQUFLOzs7O0lBVE4sNkNBQ1k7O0lBRVosNkNBQ2dCOztJQUVoQiwwREFDb0M7O0lBRXBDLHNEQUNnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbYWJwLXRhYmxlLWVtcHR5LW1lc3NhZ2VdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIFthdHRyLmNvbHNwYW5dPVwiY29sc3BhblwiPlxuICAgICAge3sgZW1wdHlNZXNzYWdlIHwgYWJwTG9jYWxpemF0aW9uIH19XG4gICAgPC90ZD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUVtcHR5TWVzc2FnZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGNvbHNwYW4gPSAyO1xuXG4gIEBJbnB1dCgpXG4gIG1lc3NhZ2U6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBsb2NhbGl6YXRpb25SZXNvdXJjZSA9ICdBYnBBY2NvdW50JztcblxuICBASW5wdXQoKVxuICBsb2NhbGl6YXRpb25Qcm9wID0gJ05vRGF0YUF2YWlsYWJsZUluRGF0YXRhYmxlJztcblxuICBnZXQgZW1wdHlNZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZSB8fCBgJHt0aGlzLmxvY2FsaXphdGlvblJlc291cmNlfTo6JHt0aGlzLmxvY2FsaXphdGlvblByb3B9YDtcbiAgfVxufVxuIl19