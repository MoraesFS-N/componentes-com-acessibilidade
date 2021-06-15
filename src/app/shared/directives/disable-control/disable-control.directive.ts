import { Directive, Input } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
  selector: '[appDisableControl]'
})

export class DisableControlDirective{

  @Input() appDisableControl = false;

  constructor( private ngControl: NgControl ) { }
}
