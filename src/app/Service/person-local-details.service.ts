import { Injectable } from '@angular/core';
import { Children } from '../Classes/children';
import { HMO } from '../Classes/hmo';
import { Kind } from '../Classes/kind';

@Injectable({
  providedIn: 'root'
})
export class PersonLocalDetailsService {

  constructor() { }

  personDetails={
    firstName:"",
        lastName:"",
        idNumber:"",
        birthDate:new Date(),
        kind:Kind,
        hmo:HMO,
        children:Array<Children>()
  }
}
