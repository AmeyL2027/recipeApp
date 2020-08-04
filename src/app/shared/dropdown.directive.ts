import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: "[appDropdown]"
})
export class DropdownDirective{
    @HostBinding('class.open') isOpener = false;

    @HostListener('click') toggleOpen(){
        this.isOpener = !this.isOpener
    }
}