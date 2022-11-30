import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Children } from 'src/app/Classes/children';
import { PersonLocalDetailsService } from 'src/app/Service/person-local-details.service';

@Component({
  selector: 'app-children-form',
  templateUrl: './children-form.component.html',
  styleUrls: ['./children-form.component.css']
})
export class ChildrenFormComponent implements OnInit {

  constructor(private personLD:PersonLocalDetailsService, 
    private active:ActivatedRoute,
    private router:Router) { }

  child={
    name:"",
    idNumber:"",
    birthDate:new Date()
  };

  // @Output("on-entering")onEntering: EventEmitter<any> = new EventEmitter<any>();
  // @Input("location") location:any
location = 0;
  invalidIdNumber:boolean = false;

  ngOnInit(): void {
    // this.onEntering.emit(this.location);
    //this.realLocation = this.location;this.active.params.subscribe(
    this.active.params.subscribe(  
    myParams=>{
         this.location = myParams["location"]; 
          },
          err=>{alert(err.massege)}
        );
    this.child = this.personLD.personDetails.children[this.location];
    if(this.child == undefined)
      this.child={
        name:"",
        idNumber:"",
        birthDate:new Date()
      };
      console.log(this.personLD.personDetails.children.toString());
      
    console.log(this.location);
    console.log(this.child);
    
  }

  checkId(){
    var curNum = 0;
    var sum = 0;
    for(let i=0;i<=8; i++){
      curNum = parseInt(this.child.idNumber.charAt(i));
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


  save(num:number){
    if(num == 1)
      this.checkId();
    console.log(this.location);
      this.personLD.personDetails.children[this.location].name = this.child.name;
      this.personLD.personDetails.children[this.location].idNumber = this.child.idNumber;
      this.personLD.personDetails.children[this.location].birthDate = this.child.birthDate;
  }

}
