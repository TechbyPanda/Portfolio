import { Component } from "@angular/core";

@Component({
    selector: "app-v1-experience",
    templateUrl: "./experience.component.html",
    styleUrl: "./experience.component.scss"
})

export class ExperienceComponent{
    data = [
        {
            name: "Giva",
            joiningDate: "Jan 2024",
            endDate: "Current",
            points: [
                "Working as MERN Stack developer.",
                "My task to build UI with nextjs.",
                "Doing proper system desing to optimize code."
            ]
        },
        {
            name: "Webkorps",
            joiningDate: "Aug 2022",
            endDate: "May 2024",
            points: [
                "Working as MERN Stack developer.",
                "My task to build UI with nextjs.",
                "Doing proper system desing to optimize code."
            ]
        },
        {
            name: "Infobeans Foundation",
            joiningDate: "Oct 2021",
            endDate: "Aug 2022",
            points: [
                "Working as MERN Stack developer.",
                "My task to build UI with nextjs.",
                "Doing proper system desing to optimize code."
            ]
        },
    ]
}