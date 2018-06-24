import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/models";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

    user: User;

  constructor() { }

  ngOnInit() {
  }

}
