import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private fb:FormBuilder) { }


  addForm=this.fb.group({
    id:['',[Validators.required,Validators.pattern("[0-9]+")]],
    pname:["",[Validators.required,Validators.pattern("[a-zA-Z0-9]+")]],
    catid:["",[Validators.required,Validators.pattern("0-1]+")]],
    desc:["",[Validators.required,Validators.pattern("[a-zA-Z0-9]+")]],
    price:["",[Validators.required,Validators.pattern("[0-9]+")]],
    avilble:["",[Validators.required,Validators.pattern("[a-zA-Z]+")]],
    Image:["",[Validators.required,Validators.pattern("[a-zA-Z]+")]],
    ratng:["",[Validators.required,Validators.pattern("[0-9]+")]],
    reviw:["",[Validators.required,Validators.pattern("[a-zA-Z0-9]+")]],
   vndrnme:["",[Validators.required,Validators.pattern("[a-zA-Z0-9]+")]],
    warrnty:["",[Validators.required,Validators.pattern("[0-9]+")]]

  })

}
