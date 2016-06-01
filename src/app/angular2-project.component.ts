import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES , ROUTER_PROVIDERS} from '@angular/router';
import { HomeComponent } from './+home';
import { RegisterComponent } from './+register';
import { EncountersComponent } from './+encounters';
import { ReportsComponent } from './+reports';

@Component({
  moduleId: module.id,
  selector: 'angular2-project-app',
  templateUrl: 'angular2-project.component.html',
  styleUrls: ['angular2-project.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/home', component: HomeComponent},
  {path: '/register', component: RegisterComponent},
  {path: '/encounters', component: EncountersComponent},
  {path: '/reports', component: ReportsComponent}
])
export class Angular2ProjectAppComponent implements OnInit{
  
  
  constructor(private router: Router) {
    
  }

  ngOnInit(){
    this.router.navigate(['/home']);
  }
}
