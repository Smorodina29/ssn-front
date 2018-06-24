export class User {
    id: string;
    firstName: string;
    lastName: string;
    role: Role;
    deleted: boolean;
    groups: Group[] = [];


    constructor(id: string, firstName: string, lastName: string, role: Role = Role.USER, deleted: boolean = false, groups: Group[] = []) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.deleted = deleted;
        this.groups = groups;
    }
}

export enum Role {
    USER, ADMIN
}

export class Group {
    id: string;
    title: string;
    users: User[] = [];
}