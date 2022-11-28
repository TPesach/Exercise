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

  

  saveAsProject(){
    //you can enter your own file name and extension
    debugger;
    let myTxt=`פרטים אישיים:
שם פרטי: ${this.personDetails.firstName}
שם משפחה: ${this.personDetails.lastName}
מספר תעודת זהות: ${this.personDetails.idNumber}
תאריך לידה: ${this.personDetails.birthDate}
מין: ${this.personDetails.kind}
קופת חולים: ${this.personDetails.hmo}
ילדים: ${this.personDetails.children.toString()}
    `
    this.writeContents(myTxt, 'My Details File'+'.txt', 'text/plain');
  }
  writeContents(content:any, fileName:any, contentType:any) {
    debugger;
    var a = document.createElement('a');
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
}
