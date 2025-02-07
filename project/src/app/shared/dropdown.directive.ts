import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.show') isOpen = false;

    constructor(private elRef: ElementRef) {}

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
        
        // Find the dropdown menu inside this dropdown container
        const dropdownMenu = this.elRef.nativeElement.querySelector('.dropdown-menu');
        
        if (dropdownMenu) {
            if (this.isOpen) {
                dropdownMenu.classList.add('show');
            } else {
                dropdownMenu.classList.remove('show');
            }
        }
    }
}
