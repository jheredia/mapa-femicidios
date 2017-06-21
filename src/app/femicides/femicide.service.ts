import { Injectable } from '@angular/core';
import { Femicide } from './femicide';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FemicideService {
    private femicidesUrl = '/api/femicides';

    constructor (private http: Http) {}

    // get("/api/femicides")
    getFemicides(): Promise<Femicide[]> {
      return this.http.get(this.femicidesUrl)
                 .toPromise()
                 .then(response => response.json() as Femicide[])
                 .catch(this.handleError);
    }

    // post("/api/femicides")
    createFemicide(newFemicide: Femicide): Promise<Femicide> {
      return this.http.post(this.femicidesUrl, newFemicide)
                 .toPromise()
                 .then(response => response.json() as Femicide)
                 .catch(this.handleError);
    }

    // get("/api/femicides/:id") endpoint not used by Angular app

    // delete("/api/femicides/:id")
    deleteFemicide(delFemicideId: String): Promise<String> {
      return this.http.delete(this.femicidesUrl + '/' + delFemicideId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/femicides/:id")
    updateFemicide(putFemicide: Femicide): Promise<Femicide> {
      var putUrl = this.femicidesUrl + '/' + putFemicide._id;
      return this.http.put(putUrl, putFemicide)
                 .toPromise()
                 .then(response => response.json() as Femicide)
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}