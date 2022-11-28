import { Component, OnInit, Input } from '@angular/core';
import { Children } from 'src/app/Classes/children';
import { PersonLocalDetailsService } from 'src/app/Service/person-local-details.service';

@Component({
  selector: 'app-children-form',
  templateUrl: './children-form.component.html',
  styleUrls: ['./children-form.component.css']
})
export class ChildrenFormComponent implements OnInit {

  constructor(private personLD:PersonLocalDetailsService) { }

  child={
    name:"",
    idNumber:"",
    birthDate:new Date()
  };

  @Input("location") location:any

  ngOnInit(): void {
    //this.child = this.personLD.personDetails.children[this.location]
    //console.log(this.location);
    
  }

  save(){
    this.personLD.personDetails.children[this.location] = this.child;
  }

}
