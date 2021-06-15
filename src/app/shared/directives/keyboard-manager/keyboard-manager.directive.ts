import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';
import { ContentChildren } from "@angular/core";
import { HostListener } from "@angular/core";
import { Directive } from "@angular/core";
import { QueryList } from '@angular/core';

@Directive({
  selector: '[app-keyboard-manager]'
})

export class KeyboardManagerDirective{

  @ContentChildren(KeyboardManagedItemDirective) public items: QueryList<KeyboardManagedItemDirective> = null;

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        console.log('Up');
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
        case 'ArrowDown':
            console.log('Down');
            this.moveFocus(ArrowDirection.LEFT).focus();
            break;
            case 'ArrowLeft':
                console.log('Left');
                this.moveFocus(ArrowDirection.LEFT).focus();
                break;
                case 'ArrowRight':
                    console.log('Right');
                    this.moveFocus(ArrowDirection.RIGHT).focus();
                    break;
                      default:
                        break;
    }
  }

  public moveFocus(direction: ArrowDirection): KeyboardManagedItemDirective{

    const items = this.items.toArray();
    const currentSelectedIndex = items.findIndex(item => item.isFocused())
    const targetElementFocus = items[currentSelectedIndex + direction];

    if (targetElementFocus) {
      return targetElementFocus;
    }

    return direction === ArrowDirection.LEFT
      ? items[items.length - 1]
      : items[0];
  }
}

enum ArrowDirection{
  LEFT = -1,
  RIGHT = 1
}
