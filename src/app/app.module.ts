import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./v1/Navbar/navbar.component";
import { HeroComponent } from "./v1/Hero/hero.component";
import { SkillsComponent } from "./v1/Skills/skills.component";
import { ExperienceComponent } from "./v1/experience/experience.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HeroComponent,
        SkillsComponent,
        ExperienceComponent
    ],
    imports: [
        BrowserModule,
        CommonModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule{}