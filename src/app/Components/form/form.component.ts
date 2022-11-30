import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Children } from 'src/app/Classes/children';
import { HMO } from 'src/app/Classes/hmo';
import { Kind } from 'src/app/Classes/kind';
import { Person } from 'src/app/Classes/person';
import { PersonLocalDetailsService } from 'src/app/Service/person-local-details.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private personLD:PersonLocalDetailsService, 
    private router:Router) { }

  // האובייקט שיכיל בביקור חדש נתונים נקיים
  // HTMLויקבל לתוכו את הנתונים שיכנסו מקובץ ה
  personDetails = {
    firstName:"",
        lastName:"",
        idNumber:"",
        birthDate:new Date(),
        kind:Kind,
        hmo:HMO,
        children:Array<Children>()
  };
  kinds = ["זכר","נקבה"];
  HMO = ["מאוחדת", "כללית", "מכבי", "לאומית"];
  children = [];
  location=0;
  // פרמטר הקובע האם להציג הערת שגיאה
  invalidIdNumber:boolean = false;

  // @Output("on-living")onLiving: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    // קבלת מידע מהסרביס האם יש כבר שדות מלאים
    // routeז"א שזה לא ביקור ראשון בקומפוננטה אלא מעבר ב
    this.personDetails = this.personLD.personDetails;
    this.location = this.personLD.location;

    for(let i =0; i<=this.location; i++){
      this.router.navigate(['form/child',i]);
    }
  }



  // addLocation(location:number){
  //   this.location=location+1;
  // }

  initialChildrenArray(numOfChildren:string){
     var nC = parseInt(numOfChildren);
    //  var child = {
    //   name:"",
    //   idNumber:"",
    //   birthDate:new Date()
    //  }
     this.location = nC-1;
     
     if(this.location > this.personLD.location){
      this.personLD.addChild();
      this.router.navigate(['form/child',this.location]);
     }
     else{
      this.personLD
     }
      
     this.personLD.location = this.location;
      this.personDetails.children=this.personLD.personDetails.children;
     
    // this.personLD.personDetails.children = new Array<Children>(nC);
    
  }

  // בדיקת תקינות על הערך שהוכנס בתור מספר ת"ז
  checkId(){
    var curNum = 0;
    var sum = 0;
    for(let i=0;i<=8; i++){
      curNum = parseInt(this.personDetails.idNumber.charAt(i));
      if(i % 2 == 0)
        sum+=curNum;
      else
        sum = sum+(curNum*2);
    }
    if(sum % 10 !=0){
      this.invalidIdNumber = true;
    }
    else
    this.invalidIdNumber = false;
  }

  // שמירת הנתונים בסרביס בעת מעבר לקומפוננטה אחרת
  // בכדי שהנתונים לא יאבדו וכן כדי שהם יהיו נגישים בשאר המחלקות
  saveLocalData(){
    this.personLD.personDetails = this.personDetails;
    // this.onLiving.emit();
  }

  // שמירת הנתונים והורדת קובץ עם הפרטים האישיים למחשב
  onSubmit(){
    this.personLD.saveAsProject();
    alert("שים לב לקובץ פרטים אישיים שהורד למחשב שלך")
  }

  // getLocation(){
  //   return this.location;
  // }

  

}
