import { Component } from '@angular/core'

@Component({
    selector: "app-v1-skills",
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})

export class SkillsComponent{
    allSkills = [
        {name: 'HTTP', img: "./assets/img/http.png"},
        {name: "HTML", img: "./assets/img/html.png"},
        {name: 'CSS', img: "./assets/img/css.png"},
        {name: "Bootstrap", img: "./assets/img/bootstrap.png"},
        {name: "Git", img: "./assets/img/git.png"},
        {name: "REST", img: "./assets/img/rest.png"},
        {name: "Javascript", img: "./assets/img/javascript.png"},
        {name: "React", img: "./assets/img/react.png"},
        {name: "Node JS", img: "./assets/img/nodejs.png"},
        {name: "Express JS", img: "./assets/img/express.png"},
        {name: "Mongo DB", img: "./assets/img/Mongodb.png"},
        {name: "Mongoose", img: "./assets/img/mongoose.png"},
        {name: "Postman", img: "./assets/img/postman.png"},
        {name: "SQL", img: "./assets/img/sql.png"},
        {name: "AWS", img: "./assets/img/aws.png"},
        {name: "Ruby on Rails", img: "./assets/img/ruby-on-rails.png"},
        {name: "Next JS", img: "./assets/img/nextjs.png"},
        {name: "Typescript", img: "./assets/img/typescript.png"},
        {name: "Java", img: "./assets/img/java.png"},
        {name: "Python", img: "./assets/img/python.png"},
        {name: "Angular", img: "./assets/img/angular.png"}
    ]
    hideSkills = true;
    visibleSkills = this.allSkills.slice(0, 6)

    toggleSkills(){
        this.visibleSkills = this.hideSkills ? this.allSkills : this.allSkills.slice(0,6);
        this.hideSkills = !this.hideSkills;
    }
}