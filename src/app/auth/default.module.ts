// Modules
import {NgModule} from '@angular/core';
import {AmPmPipe, EllipsisPipe, SafeHtmlPipe} from './ellipsis.pipe';
import {ReadMoreDirective} from "./read-more.directive";
import {OrderBy} from "./alphabatical-sorting";
import {EqualValidator} from "./validation";
import {HasAnyAuthorityDirective} from "./has-any-authority.directive";
import {MycurrencyPipe} from "./mycurrency.pipe";
import {MycurrencyDirective} from "./mycurrency.directive";
import {DragDirective} from "./dragDrop.directive";
import {
  AutofocusDirective, ClickElsewhereDirective, ClickOutsideDirective, NumberDirective,
  ShowHideInput
} from "./show-hide-input";
@NgModule({
  declarations: [
    EllipsisPipe,
    ReadMoreDirective,
    OrderBy,
    SafeHtmlPipe,
    AmPmPipe,
    EqualValidator,
    HasAnyAuthorityDirective,
    MycurrencyPipe,
    MycurrencyDirective,
    DragDirective,
    ShowHideInput,
    AutofocusDirective,
    NumberDirective,
    ClickOutsideDirective,
    ClickElsewhereDirective
  ],
  exports: [
    EllipsisPipe,
    ReadMoreDirective,
    OrderBy,
    SafeHtmlPipe,
    AmPmPipe,
    EqualValidator,
    HasAnyAuthorityDirective,
    MycurrencyPipe,
    MycurrencyDirective,
    DragDirective
  ]
})
export class DefaultModule {
}
