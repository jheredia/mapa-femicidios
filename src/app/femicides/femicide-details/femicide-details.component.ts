import { Component, Input } from '@angular/core';
import { Femicide } from '../femicide';
import { FemicideService } from '../femicide.service';

@Component({
  selector: 'femicide-details',
  templateUrl: './femicide-details.component.html',
  styleUrls: ['./femicide-details.component.css']
})

export class FemicideDetailsComponent {
  @Input()
  femicide: Femicide;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private femicideService: FemicideService) {}

  createFemicide(femicide: Femicide) {
    this.femicideService.createFemicide(femicide).then((newFemicide: Femicide) => {
      this.createHandler(newFemicide);
    });
  }

  updateFemicide(femicide: Femicide): void {
    this.femicideService.updateFemicide(femicide).then((updatedFemicide: Femicide) => {
      this.updateHandler(updatedFemicide);
    });
  }

  deleteFemicide(femicideId: String): void {
    this.femicideService.deleteFemicide(femicideId).then((deletedFemicideId: String) => {
      this.deleteHandler(deletedFemicideId);
    });
  }
}