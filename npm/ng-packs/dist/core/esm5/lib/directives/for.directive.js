/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/for.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, IterableDiffers, TemplateRef, ViewContainerRef, } from '@angular/core';
import compare from 'just-compare';
import clone from 'just-clone';
var AbpForContext = /** @class */ (function () {
    function AbpForContext($implicit, index, count, list) {
        this.$implicit = $implicit;
        this.index = index;
        this.count = count;
        this.list = list;
    }
    return AbpForContext;
}());
if (false) {
    /** @type {?} */
    AbpForContext.prototype.$implicit;
    /** @type {?} */
    AbpForContext.prototype.index;
    /** @type {?} */
    AbpForContext.prototype.count;
    /** @type {?} */
    AbpForContext.prototype.list;
}
var RecordView = /** @class */ (function () {
    function RecordView(record, view) {
        this.record = record;
        this.view = view;
    }
    return RecordView;
}());
if (false) {
    /** @type {?} */
    RecordView.prototype.record;
    /** @type {?} */
    RecordView.prototype.view;
}
var ForDirective = /** @class */ (function () {
    function ForDirective(tempRef, vcRef, differs) {
        this.tempRef = tempRef;
        this.vcRef = vcRef;
        this.differs = differs;
    }
    Object.defineProperty(ForDirective.prototype, "compareFn", {
        get: /**
         * @return {?}
         */
        function () {
            return this.compareBy || compare;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForDirective.prototype, "trackByFn", {
        get: /**
         * @return {?}
         */
        function () {
            return this.trackBy || ((/**
             * @param {?} index
             * @param {?} item
             * @return {?}
             */
            function (index, item) { return ((/** @type {?} */ (item))).id || index; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    ForDirective.prototype.iterateOverAppliedOperations = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        /** @type {?} */
        var rw = [];
        changes.forEachOperation((/**
         * @param {?} record
         * @param {?} previousIndex
         * @param {?} currentIndex
         * @return {?}
         */
        function (record, previousIndex, currentIndex) {
            if (record.previousIndex == null) {
                /** @type {?} */
                var view = _this.vcRef.createEmbeddedView(_this.tempRef, new AbpForContext(null, -1, -1, _this.items), currentIndex);
                rw.push(new RecordView(record, view));
            }
            else if (currentIndex == null) {
                _this.vcRef.remove(previousIndex);
            }
            else {
                /** @type {?} */
                var view = _this.vcRef.get(previousIndex);
                _this.vcRef.move(view, currentIndex);
                rw.push(new RecordView(record, (/** @type {?} */ (view))));
            }
        }));
        for (var i = 0, l = rw.length; i < l; i++) {
            rw[i].view.context.$implicit = rw[i].record.item;
        }
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    ForDirective.prototype.iterateOverAttachedViews = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        for (var i = 0, l = this.vcRef.length; i < l; i++) {
            /** @type {?} */
            var viewRef = (/** @type {?} */ (this.vcRef.get(i)));
            viewRef.context.index = i;
            viewRef.context.count = l;
            viewRef.context.list = this.items;
        }
        changes.forEachIdentityChange((/**
         * @param {?} record
         * @return {?}
         */
        function (record) {
            /** @type {?} */
            var viewRef = (/** @type {?} */ (_this.vcRef.get(record.currentIndex)));
            viewRef.context.$implicit = record.item;
        }));
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    ForDirective.prototype.projectItems = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        if (!items.length && this.emptyRef) {
            this.vcRef.clear();
            // tslint:disable-next-line: no-unused-expression
            this.vcRef.createEmbeddedView(this.emptyRef).rootNodes;
            this.isShowEmptyRef = true;
            this.differ = null;
            return;
        }
        if (this.emptyRef && this.isShowEmptyRef) {
            this.vcRef.clear();
            this.isShowEmptyRef = false;
        }
        if (!this.differ && items) {
            this.differ = this.differs.find(items).create(this.trackByFn);
        }
        if (this.differ) {
            /** @type {?} */
            var changes = this.differ.diff(items);
            if (changes) {
                this.iterateOverAppliedOperations(changes);
                this.iterateOverAttachedViews(changes);
            }
        }
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    ForDirective.prototype.sortItems = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        if (this.orderBy) {
            items.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return (a[_this.orderBy] > b[_this.orderBy] ? 1 : a[_this.orderBy] < b[_this.orderBy] ? -1 : 0); }));
        }
        else {
            items.sort();
        }
    };
    /**
     * @return {?}
     */
    ForDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var items = (/** @type {?} */ (clone(this.items)));
        if (!Array.isArray(items))
            return;
        /** @type {?} */
        var compareFn = this.compareFn;
        if (typeof this.filterBy !== 'undefined' && typeof this.filterVal !== 'undefined' && this.filterVal !== '') {
            items = items.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return compareFn(item[_this.filterBy], _this.filterVal); }));
        }
        switch (this.orderDir) {
            case 'ASC':
                this.sortItems(items);
                this.projectItems(items);
                break;
            case 'DESC':
                this.sortItems(items);
                items.reverse();
                this.projectItems(items);
                break;
            default:
                this.projectItems(items);
        }
    };
    ForDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[abpFor]',
                },] }
    ];
    /** @nocollapse */
    ForDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: IterableDiffers }
    ]; };
    ForDirective.propDecorators = {
        items: [{ type: Input, args: ['abpForOf',] }],
        orderBy: [{ type: Input, args: ['abpForOrderBy',] }],
        orderDir: [{ type: Input, args: ['abpForOrderDir',] }],
        filterBy: [{ type: Input, args: ['abpForFilterBy',] }],
        filterVal: [{ type: Input, args: ['abpForFilterVal',] }],
        trackBy: [{ type: Input, args: ['abpForTrackBy',] }],
        compareBy: [{ type: Input, args: ['abpForCompareBy',] }],
        emptyRef: [{ type: Input, args: ['abpForEmptyRef',] }]
    };
    return ForDirective;
}());
export { ForDirective };
if (false) {
    /** @type {?} */
    ForDirective.prototype.items;
    /** @type {?} */
    ForDirective.prototype.orderBy;
    /** @type {?} */
    ForDirective.prototype.orderDir;
    /** @type {?} */
    ForDirective.prototype.filterBy;
    /** @type {?} */
    ForDirective.prototype.filterVal;
    /** @type {?} */
    ForDirective.prototype.trackBy;
    /** @type {?} */
    ForDirective.prototype.compareBy;
    /** @type {?} */
    ForDirective.prototype.emptyRef;
    /**
     * @type {?}
     * @private
     */
    ForDirective.prototype.differ;
    /**
     * @type {?}
     * @private
     */
    ForDirective.prototype.isShowEmptyRef;
    /**
     * @type {?}
     * @private
     */
    ForDirective.prototype.tempRef;
    /**
     * @type {?}
     * @private
     */
    ForDirective.prototype.vcRef;
    /**
     * @type {?}
     * @private
     */
    ForDirective.prototype.differs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2Zvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFJTCxlQUFlLEVBRWYsV0FBVyxFQUVYLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLE9BQU8sTUFBTSxjQUFjLENBQUM7QUFDbkMsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBSS9CO0lBQ0UsdUJBQW1CLFNBQWMsRUFBUyxLQUFhLEVBQVMsS0FBYSxFQUFTLElBQVc7UUFBOUUsY0FBUyxHQUFULFNBQVMsQ0FBSztRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBTztJQUFHLENBQUM7SUFDdkcsb0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7O0lBRGEsa0NBQXFCOztJQUFFLDhCQUFvQjs7SUFBRSw4QkFBb0I7O0lBQUUsNkJBQWtCOztBQUduRztJQUNFLG9CQUFtQixNQUFpQyxFQUFTLElBQW9DO1FBQTlFLFdBQU0sR0FBTixNQUFNLENBQTJCO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBZ0M7SUFBRyxDQUFDO0lBQ3ZHLGlCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7OztJQURhLDRCQUF3Qzs7SUFBRSwwQkFBMkM7O0FBR25HO0lBd0NFLHNCQUNVLE9BQW1DLEVBQ25DLEtBQXVCLEVBQ3ZCLE9BQXdCO1FBRnhCLFlBQU8sR0FBUCxPQUFPLENBQTRCO1FBQ25DLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLFlBQU8sR0FBUCxPQUFPLENBQWlCO0lBQy9CLENBQUM7SUFaSixzQkFBSSxtQ0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8s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UixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6QixNQUFNO1lBRVI7Z0JBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7O2dCQXRKRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCOzs7O2dCQW5CQyxXQUFXO2dCQUVYLGdCQUFnQjtnQkFKaEIsZUFBZTs7O3dCQXVCZCxLQUFLLFNBQUMsVUFBVTswQkFHaEIsS0FBSyxTQUFDLGVBQWU7MkJBR3JCLEtBQUssU0FBQyxnQkFBZ0I7MkJBR3RCLEtBQUssU0FBQyxnQkFBZ0I7NEJBR3RCLEtBQUssU0FBQyxpQkFBaUI7MEJBR3ZCLEtBQUssU0FBQyxlQUFlOzRCQUdyQixLQUFLLFNBQUMsaUJBQWlCOzJCQUd2QixLQUFLLFNBQUMsZ0JBQWdCOztJQThIekIsbUJBQUM7Q0FBQSxBQXZKRCxJQXVKQztTQXBKWSxZQUFZOzs7SUFDdkIsNkJBQ2E7O0lBRWIsK0JBQ2dCOztJQUVoQixnQ0FDeUI7O0lBRXpCLGdDQUNpQjs7SUFFakIsaUNBQ2U7O0lBRWYsK0JBQ1E7O0lBRVIsaUNBQ3FCOztJQUVyQixnQ0FDMkI7Ozs7O0lBRTNCLDhCQUFvQzs7Ozs7SUFFcEMsc0NBQWdDOzs7OztJQVc5QiwrQkFBMkM7Ozs7O0lBQzNDLDZCQUErQjs7Ozs7SUFDL0IsK0JBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIElucHV0LFxuICBJdGVyYWJsZUNoYW5nZVJlY29yZCxcbiAgSXRlcmFibGVDaGFuZ2VzLFxuICBJdGVyYWJsZURpZmZlcixcbiAgSXRlcmFibGVEaWZmZXJzLFxuICBPbkNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBUcmFja0J5RnVuY3Rpb24sXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGNvbXBhcmUgZnJvbSAnanVzdC1jb21wYXJlJztcbmltcG9ydCBjbG9uZSBmcm9tICdqdXN0LWNsb25lJztcblxuZXhwb3J0IHR5cGUgQ29tcGFyZUZuPFQgPSBhbnk+ID0gKHZhbHVlOiBULCBjb21wYXJpc29uOiBUKSA9PiBib29sZWFuO1xuXG5jbGFzcyBBYnBGb3JDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocHVibGljICRpbXBsaWNpdDogYW55LCBwdWJsaWMgaW5kZXg6IG51bWJlciwgcHVibGljIGNvdW50OiBudW1iZXIsIHB1YmxpYyBsaXN0OiBhbnlbXSkge31cbn1cblxuY2xhc3MgUmVjb3JkVmlldyB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWNvcmQ6IEl0ZXJhYmxlQ2hhbmdlUmVjb3JkPGFueT4sIHB1YmxpYyB2aWV3OiBFbWJlZGRlZFZpZXdSZWY8QWJwRm9yQ29udGV4dD4pIHt9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thYnBGb3JdJyxcbn0pXG5leHBvcnQgY2xhc3MgRm9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCdhYnBGb3JPZicpXG4gIGl0ZW1zOiBhbnlbXTtcblxuICBASW5wdXQoJ2FicEZvck9yZGVyQnknKVxuICBvcmRlckJ5OiBzdHJpbmc7XG5cbiAgQElucHV0KCdhYnBGb3JPcmRlckRpcicpXG4gIG9yZGVyRGlyOiAnQVNDJyB8ICdERVNDJztcblxuICBASW5wdXQoJ2FicEZvckZpbHRlckJ5JylcbiAgZmlsdGVyQnk6IHN0cmluZztcblxuICBASW5wdXQoJ2FicEZvckZpbHRlclZhbCcpXG4gIGZpbHRlclZhbDogYW55O1xuXG4gIEBJbnB1dCgnYWJwRm9yVHJhY2tCeScpXG4gIHRyYWNrQnk7XG5cbiAgQElucHV0KCdhYnBGb3JDb21wYXJlQnknKVxuICBjb21wYXJlQnk6IENvbXBhcmVGbjtcblxuICBASW5wdXQoJ2FicEZvckVtcHR5UmVmJylcbiAgZW1wdHlSZWY6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgcHJpdmF0ZSBkaWZmZXI6IEl0ZXJhYmxlRGlmZmVyPGFueT47XG5cbiAgcHJpdmF0ZSBpc1Nob3dFbXB0eVJlZjogYm9vbGVhbjtcblxuICBnZXQgY29tcGFyZUZuKCk6IENvbXBhcmVGbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZUJ5IHx8IGNvbXBhcmU7XG4gIH1cblxuICBnZXQgdHJhY2tCeUZuKCk6IFRyYWNrQnlGdW5jdGlvbjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy50cmFja0J5IHx8ICgoaW5kZXg6IG51bWJlciwgaXRlbTogYW55KSA9PiAoaXRlbSBhcyBhbnkpLmlkIHx8IGluZGV4KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGVtcFJlZjogVGVtcGxhdGVSZWY8QWJwRm9yQ29udGV4dD4sXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGRpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcbiAgKSB7fVxuXG4gIHByaXZhdGUgaXRlcmF0ZU92ZXJBcHBsaWVkT3BlcmF0aW9ucyhjaGFuZ2VzOiBJdGVyYWJsZUNoYW5nZXM8YW55Pikge1xuICAgIGNvbnN0IHJ3OiBSZWNvcmRWaWV3W10gPSBbXTtcblxuICAgIGNoYW5nZXMuZm9yRWFjaE9wZXJhdGlvbigocmVjb3JkOiBJdGVyYWJsZUNoYW5nZVJlY29yZDxhbnk+LCBwcmV2aW91c0luZGV4OiBudW1iZXIsIGN1cnJlbnRJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAocmVjb3JkLnByZXZpb3VzSW5kZXggPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy52Y1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcoXG4gICAgICAgICAgdGhpcy50ZW1wUmVmLFxuICAgICAgICAgIG5ldyBBYnBGb3JDb250ZXh0KG51bGwsIC0xLCAtMSwgdGhpcy5pdGVtcyksXG4gICAgICAgICAgY3VycmVudEluZGV4LFxuICAgICAgICApO1xuXG4gICAgICAgIHJ3LnB1c2gobmV3IFJlY29yZFZpZXcocmVjb3JkLCB2aWV3KSk7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMudmNSZWYucmVtb3ZlKHByZXZpb3VzSW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMudmNSZWYuZ2V0KHByZXZpb3VzSW5kZXgpO1xuICAgICAgICB0aGlzLnZjUmVmLm1vdmUodmlldywgY3VycmVudEluZGV4KTtcblxuICAgICAgICBydy5wdXNoKG5ldyBSZWNvcmRWaWV3KHJlY29yZCwgdmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8QWJwRm9yQ29udGV4dD4pKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gcncubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICByd1tpXS52aWV3LmNvbnRleHQuJGltcGxpY2l0ID0gcndbaV0ucmVjb3JkLml0ZW07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpdGVyYXRlT3ZlckF0dGFjaGVkVmlld3MoY2hhbmdlczogSXRlcmFibGVDaGFuZ2VzPGFueT4pIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMudmNSZWYubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCB2aWV3UmVmID0gdGhpcy52Y1JlZi5nZXQoaSkgYXMgRW1iZWRkZWRWaWV3UmVmPEFicEZvckNvbnRleHQ+O1xuICAgICAgdmlld1JlZi5jb250ZXh0LmluZGV4ID0gaTtcbiAgICAgIHZpZXdSZWYuY29udGV4dC5jb3VudCA9IGw7XG4gICAgICB2aWV3UmVmLmNvbnRleHQubGlzdCA9IHRoaXMuaXRlbXM7XG4gICAgfVxuXG4gICAgY2hhbmdlcy5mb3JFYWNoSWRlbnRpdHlDaGFuZ2UoKHJlY29yZDogSXRlcmFibGVDaGFuZ2VSZWNvcmQ8YW55PikgPT4ge1xuICAgICAgY29uc3Qgdmlld1JlZiA9IHRoaXMudmNSZWYuZ2V0KHJlY29yZC5jdXJyZW50SW5kZXgpIGFzIEVtYmVkZGVkVmlld1JlZjxBYnBGb3JDb250ZXh0PjtcbiAgICAgIHZpZXdSZWYuY29udGV4dC4kaW1wbGljaXQgPSByZWNvcmQuaXRlbTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvamVjdEl0ZW1zKGl0ZW1zOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmICghaXRlbXMubGVuZ3RoICYmIHRoaXMuZW1wdHlSZWYpIHtcbiAgICAgIHRoaXMudmNSZWYuY2xlYXIoKTtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICAgIHRoaXMudmNSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuZW1wdHlSZWYpLnJvb3ROb2RlcztcbiAgICAgIHRoaXMuaXNTaG93RW1wdHlSZWYgPSB0cnVlO1xuICAgICAgdGhpcy5kaWZmZXIgPSBudWxsO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZW1wdHlSZWYgJiYgdGhpcy5pc1Nob3dFbXB0eVJlZikge1xuICAgICAgdGhpcy52Y1JlZi5jbGVhcigpO1xuICAgICAgdGhpcy5pc1Nob3dFbXB0eVJlZiA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5kaWZmZXIgJiYgaXRlbXMpIHtcbiAgICAgIHRoaXMuZGlmZmVyID0gdGhpcy5kaWZmZXJzLmZpbmQoaXRlbXMpLmNyZWF0ZSh0aGlzLnRyYWNrQnlGbik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlmZmVyKSB7XG4gICAgICBjb25zdCBjaGFuZ2VzID0gdGhpcy5kaWZmZXIuZGlmZihpdGVtcyk7XG5cbiAgICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuaXRlcmF0ZU92ZXJBcHBsaWVkT3BlcmF0aW9ucyhjaGFuZ2VzKTtcbiAgICAgICAgdGhpcy5pdGVyYXRlT3ZlckF0dGFjaGVkVmlld3MoY2hhbmdlcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzb3J0SXRlbXMoaXRlbXM6IGFueVtdKSB7XG4gICAgaWYgKHRoaXMub3JkZXJCeSkge1xuICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gKGFbdGhpcy5vcmRlckJ5XSA+IGJbdGhpcy5vcmRlckJ5XSA/IDEgOiBhW3RoaXMub3JkZXJCeV0gPCBiW3RoaXMub3JkZXJCeV0gPyAtMSA6IDApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbXMuc29ydCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGxldCBpdGVtcyA9IGNsb25lKHRoaXMuaXRlbXMpIGFzIGFueVtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHJldHVybjtcblxuICAgIGNvbnN0IGNvbXBhcmVGbiA9IHRoaXMuY29tcGFyZUZuO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlckJ5ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGhpcy5maWx0ZXJWYWwgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuZmlsdGVyVmFsICE9PSAnJykge1xuICAgICAgaXRlbXMgPSBpdGVtcy5maWx0ZXIoaXRlbSA9PiBjb21wYXJlRm4oaXRlbVt0aGlzLmZpbHRlckJ5XSwgdGhpcy5maWx0ZXJWYWwpKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMub3JkZXJEaXIpIHtcbiAgICAgIGNhc2UgJ0FTQyc6XG4gICAgICAgIHRoaXMuc29ydEl0ZW1zKGl0ZW1zKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0SXRlbXMoaXRlbXMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnREVTQyc6XG4gICAgICAgIHRoaXMuc29ydEl0ZW1zKGl0ZW1zKTtcbiAgICAgICAgaXRlbXMucmV2ZXJzZSgpO1xuICAgICAgICB0aGlzLnByb2plY3RJdGVtcyhpdGVtcyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnByb2plY3RJdGVtcyhpdGVtcyk7XG4gICAgfVxuICB9XG59XG4iXX0=