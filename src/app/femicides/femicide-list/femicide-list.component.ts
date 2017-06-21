import { Component, OnInit } from '@angular/core';
import { Femicide } from '../femicide';
import { FemicideService } from '../femicide.service';
import { FemicideDetailsComponent } from '../femicide-details/femicide-details.component';

@Component({
  selector: 'femicide-list',
  templateUrl: './femicide-list.component.html',
  styleUrls: ['./femicide-list.component.css'],
  providers: [FemicideService]
})

export class FemicideListComponent implements OnInit {

  femicides: Femicide[]
  selectedFemicide: Femicide

  constructor(private femicideService: FemicideService) { }

  ngOnInit() {
     this.femicideService
      .getFemicides()
      .then((femicides: Femicide[]) => {
        this.femicides = femicides.map((femicide) => {
          /*if (!femicide.phone) {
            femicide.phone = {
              mobile: '',
              work: ''
            }
          }*/
          return femicide;
        });
      });
  }

  private getIndexOfFemicide = (femicideId: String) => {
    return this.femicides.findIndex((femicide) => {
      return femicide._id === femicideId;
    });
  }

  selectFemicide(femicide: Femicide) {
    this.selectedFemicide = femicide
  }

  createNewFemicide() {
    var femicide: Femicide = {
      name: '',
      age: '',
      description: '',
      date: ''
    };

    // By default, a newly-created femicide will have the selected state.
    this.selectFemicide(femicide);
  }

  deleteFemicide = (femicideId: String) => {
    var idx = this.getIndexOfFemicide(femicideId);
    if (idx !== -1) {
      this.femicides.splice(idx, 1);
      this.selectFemicide(null);
    }
    return this.femicides;
  }

  addFemicide = (femicide: Femicide) => {
    this.femicides.push(femicide);
    this.selectFemicide(femicide);
    return this.femicides;
  }

  updateFemicide = (femicide: Femicide) => {
    var idx = this.getIndexOfFemicide(femicide._id);
    if (idx !== -1) {
      this.femicides[idx] = femicide;
      this.selectFemicide(femicide);
    }
    return this.femicides;
  }
}