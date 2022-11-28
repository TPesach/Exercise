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

  @Output("on-living")onLiving: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.personDetails = this.personLD.personDetails;
  }

  initialChildrenArray(numOfChildren:string){
     var nC = parseInt(numOfChildren)
    this.personDetails.children = new Array<Children>(nC);
    
  }

  saveLocalData(){
    this.personLD.personDetails = this.personDetails;
    this.onLiving.emit();
  }

  onSubmit(){
    
  }

}
