import {Component, OnInit} from '@angular/core';
import {Role, User} from "../../shared/models/models";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    userList: User[] = [
        new User("0", "Bob", "Poison"),
        new User("1", "Jack", "Narrator"),
        new User("2", "Tyler", "Durden", Role.ADMIN),
        new User("3", "Marla", "Singer", Role.ADMIN, true),
        new User("4", "John", "Connor"),
        new User("5", "Sara", "Connor", Role.USER, true),
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
