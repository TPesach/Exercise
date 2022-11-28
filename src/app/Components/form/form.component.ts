import { Component, OnInit, Output , EventEmitter} from '@angular/core';
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

  constructor(private personLD:PersonLocalDetailsService) { }

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
  invalidIdNumber:boolean = false;

  @Output("on-living")onLiving: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.personDetails = this.personLD.personDetails;
  }

  initialChildrenArray(numOfChildren:string){
     var nC = parseInt(numOfChildren);
     var child = {
      name:"",
      idNumber:"",
      birthDate:new Date()
     }
     
      this.personLD.personDetails.children.push(new Children("","",new Date()));
      this.personDetails.children=this.personLD.personDetails.children;
     
    //this.personLD.personDetails.children = new Array<Children>(nC);
    
  }

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

  saveLocalData(){
    this.personLD.personDetails = this.personDetails;
    this.onLiving.emit();
  }

  onSubmit(){
    this.personLD.saveAsProject();
    alert("שים לב לקובץ פרטים אישיים שהורד למחשב שלך")
  }

}
