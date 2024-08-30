import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./Navbar/navbar.component";
import { HeroComponent } from "./Hero/hero.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HeroComponent
    ],
    imports: [
        BrowserModule,
        CommonModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule{}