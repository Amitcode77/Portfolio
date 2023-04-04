import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  projects = [
    {pLink:"https://github.com/Amitcode77/Indiabes", pImage:"../../assets/project.png",
    pName: "Indiabes - Ecommerce App",
    pDesc: "An E-commerce Android App with both seller and buyers interface.Technologies used are Firebase Authentication, Realtime Database, Storage and built using Java language and XML"
    },
    {pLink:"https://play.google.com/store/apps/details?id=com.elitechdevelopers.bhagavadgeeta", pImage:"../../assets/project.png",
    pName: "Bhagawat Geeta Android App",
    pDesc: "A android app where you can read all the bhagawat geeta shloks with its meaning and way interpretation. This app is built using the kotlin by following MVVM architecture."
    },
    {pLink:"https://github.com/Amitcode77/EmployeeManagementSystem", pImage:"../../assets/project.png",
    pName: "Employee Management System",
    pDesc: "A responsive web app where you can manage the employee of an organizations in a systematic way. This web app is built using python by following flask framework."
    },
    {pLink:"https://github.com/Amitcode77/Indiabes", pImage:"../../assets/project.png",
    pName: "ToDo List",
    pDesc: "A Android app where to can organize your task. Your task will be stored in local storage."
    }
  ]

  ngOnInit(): void {
  }

}
