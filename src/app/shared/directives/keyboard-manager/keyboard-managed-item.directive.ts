import { ElementRef, EventEmitter, Output } from "@angular/core";
import { Directive } from "@angular/core";

@Directive({
  selector: '[app-keyboard-managed-item]'
})

export class KeyboardManagedItemDirective {

  @Output() public focused = new EventEmitter<void>();

  constructor(
    private elementRef: ElementRef<HTMLElement> ){ }


  public focus(): void {
    this.elementRef.nativeElement.focus();
    this.focused.emit();
  }

  public isFocused(): boolean {
    return this.elementRef.nativeElement === document.activeElement;
  }

 }
