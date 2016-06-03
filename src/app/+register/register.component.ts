import { Component, OnInit } from '@angular/core';
import { Colonist, IOccupation } from '../shared/models';
import { ColonistService, OccupationService } from '../shared/services';
import { NgForm } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ap-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
  providers: [ColonistService, OccupationService]
})
export class RegisterComponent implements OnInit {
  public NO_OCCUPATION_SELECTED: string;
  public occupations: IOccupation[];
  public colonist: Colonist;

  constructor(
  private router: Router,
  private colonistService: ColonistService,
  private occupationService: OccupationService
  ) {
    this.NO_OCCUPATION_SELECTED = '(none)';
  }

  ngOnInit(): void {
    this.colonist = new Colonist(null, null, this.NO_OCCUPATION_SELECTED);
    this.occupationService.getJobs()
      .then( jobs => this.occupations = jobs);
  }
  onSubmit(event, form): void {
    this.colonistService.createColonist(this.colonist)
      .then( colonist => this.router.navigate(['/encounters']) )
  }
  get noOccupation() : boolean {
    return this.colonist.job_id === this.NO_OCCUPATION_SELECTED;
  }
}
