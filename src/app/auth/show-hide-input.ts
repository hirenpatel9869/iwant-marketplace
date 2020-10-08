import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';
/**
 * Created by ovesh on 27/12/17.
 */


@Directive({ selector: '[show-hide-input]'
})
export class ShowHideInput {
  @HostBinding() type: string;

  constructor() {
    this.type = 'password';
  }

  changeType(type: string): void {
    this.type = type;
  }
}


@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective {
  private focus = true;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    if (this.focus) {
      // Otherwise Angular throws error: Expression has changed after it was checked.
      window.setTimeout(() => {
        this.el.nativeElement.focus(); // For SSR (server side rendering) this is not safe. Use: https://github.com/angular/angular/issues/15008#issuecomment-285141070)
      });
    }
  }

  @Input() set autofocus(condition: boolean) {
    this.focus = condition !== false;
  }
}

@Directive({
  selector: 'input[numbersOnly]'
})
export class NumberDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if ( initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}



@Directive({
  selector: '[clickoutside]'
})
export class ClickOutsideDirective {

  @Output() clickoutside: EventEmitter<any>;
  @Input() enableWhiteListing: boolean;
  constructor(private elementRef: ElementRef) {
    this.clickoutside = new EventEmitter<any>();
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {

    const isInsideClicked = this.elementRef.nativeElement.contains(targetElement);
    /**
     * If whitelisting is enabled this directive will only
     *  emit if the clicked element is outside and has a class whitelisted
     * In all the other cases it will emit if we click outside
     */
    if (this.enableWhiteListing) {
      const isWhiteListed = targetElement.classList.contains('whitelisted');
      if (!isInsideClicked && isWhiteListed) {
        this.clickoutside.emit(null);
      }
    } else {
      this.clickoutside.emit(null);
    }
  }

}


@Directive({ selector: '[clickElsewhere]' })
export class ClickElsewhereDirective {
  @Output() clickElsewhere = new EventEmitter<MouseEvent>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;

    // Check if the click was outside the element
    if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {

      this.clickElsewhere.emit(event);
    }
  }
}
