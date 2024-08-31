import { Component } from "@angular/core";

@Component({
    selector: "app-v1-hero",
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})

export class HeroComponent{
    currentIndex:number = 0;

    constructor(){
        setInterval(() => this.typeFunction(), 1000)
    }
    iamArray = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer']
    iam:string = this.iamArray[this.currentIndex];

    typeFunction(){
        if(this.currentIndex === this.iamArray.length) this.currentIndex = 0;

        this.iam = this.iamArray[this.currentIndex];
        this.currentIndex++;
    }
}