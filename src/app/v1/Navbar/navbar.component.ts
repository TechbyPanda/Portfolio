import { Component } from "@angular/core";

@Component({
    selector: 'app-v1-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})

export class NavbarComponent{
    name:string = "Palash"
    links: string[] = ['Skills', 'Experience', 'Project', 'Education']
    showMobileMenu:boolean = false;

    toggleMenu = () => {
        this.showMobileMenu = !this.showMobileMenu
    }
}