import {Component, Input, OnInit} from '@angular/core';
import {Role, User} from "../../../shared/models/models";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }


  getRoleName(role: Role) {
      return Role[role].toLowerCase();
  }

}
