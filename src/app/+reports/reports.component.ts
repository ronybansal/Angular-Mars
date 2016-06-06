import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { AlienService, EncounterService } from '../shared/services';
import { IAlien, Encounter } from '../shared/models';

@Component({
  moduleId: module.id,
  selector: 'app-reports',
  templateUrl: 'reports.component.html',
  styleUrls: ['reports.component.css'],
  providers: [AlienService, EncounterService],
  directives: [ROUTER_DIRECTIVES]
})
export class ReportsComponent implements OnInit {
  public NO_ALIEN_SELECTED: string;
  public colonistId: string;
  public aliens: IAlien[];
  public encounters: Encounter;

  constructor(
    private router: Router,
    private alienService: AlienService,
    private encounterService: EncounterService
  ) {
    this.NO_ALIEN_SELECTED = '(none)';
  }

  ngOnInit() : void {
    this.colonistId = sessionStorage.getItem('colonistId');
    this.alienService.getAliens().then( alien => this.aliens = alien );
    this.encounters = new Encounter (this.NO_ALIEN_SELECTED, '', '', this.colonistId);
  }
  onSubmit(event) : void {
    this.encounterService.createEncounter(this.encounters)
      .then( encounters => this.router.navigate(['/encounters']) )
  }
  get noEncounters() : boolean {
    return this.encounters.atype === this.NO_ALIEN_SELECTED;
  }
}
