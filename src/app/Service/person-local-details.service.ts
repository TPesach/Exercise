import { Injectable } from '@angular/core';
import { Children } from '../Classes/children';
import { HMO } from '../Classes/hmo';
import { Kind } from '../Classes/kind';

@Injectable({
  providedIn: 'root'
})
export class PersonLocalDetailsService {

  constructor() { }

  // אובייקט שיכיל במהלך הביקור באתר את הנתונים שהוכנסו
  // (DI האובייקט יהיה זמין בכל המחלקות (ע"י הזרקת
  personDetails={
    firstName:"",
        lastName:"",
        idNumber:"",
        birthDate:new Date(),
        kind:Kind,
        hmo:HMO,
        children:Array<Children>()
  }

  location=-1;

  addChild(){
    var child={
      name:"",
      idNumber:"",
      birthDate:new Date()
    }
    this.personDetails.children.push(child);
  }

  sliceChild(){
    this.personDetails.children.pop();
  }

  
//שמירת הנתונים
  saveAsProject(){
    //המרת הפרטים האישיים לטקסט
    //כדי לאפשר כתיבה לקובץ
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

  //כתיבת הפרטים לקובץ
  writeContents(content:any, fileName:any, contentType:any) {
    var a = document.createElement('a');
    //יצירת הקובץ וכתיבת התוכן לתוכו
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    //הורדת הקובץ כדי שיהיה זמין
    a.download = fileName;
    a.click();
  }
}
