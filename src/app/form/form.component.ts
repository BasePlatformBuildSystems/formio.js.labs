import { Component, OnInit } from '@angular/core';

import { FormioAppConfig } from 'angular-formio';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    public config: FormioAppConfig
  ){}

  ngOnInit() {
	  console.log(this.config);
  }

}
