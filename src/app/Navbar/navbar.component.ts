import { Component } from "@angular/core";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})

export class NavbarComponent{
    name:string = "Palash"
    links: string[] = ['Home', 'Services', 'Work', 'About']
    showMobileMenu:boolean = false;

    toggleMenu = () => {
        this.showMobileMenu = !this.showMobileMenu
    }
}