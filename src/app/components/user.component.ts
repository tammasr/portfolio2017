import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}}</h1>
  <p><strong>Email: </strong>{{email}}</p>
  <p><strong>Address: </strong>{{address.street}}{{address.city}} {{address.state}}</p>
   <button (click)="showHobbies =! showHobbies">{{showHobbies ? 'Hide': 'Show'}} Hobbies</button>
   <div *ngIf="showHobbies">
       <h3>Hobbies</h3>
       <ul>
            <li *ngFor="let hobby of hobbies; let i = index">
            {{hobby}} <button (click)="deleteHobby(i)">X</button>
            </li>
        </ul>
   </div>

   <h3>Add Hobby</h3>
   <form (submit)="addHobby(hobby.value)">
      <input type="text" #hobby/><br />
   </form>
   <hr/>
   <h3>Edit user</h3>
   <form>
      <label>Name: </label><br />
      <input type="text"  name="name" [(ngModel)]="name"><br />
       <label>Email: </label><br/>
      <input type="text"  name="email" [(ngModel)]="email"><br />
       <label>Street: </label><br/>
      <input type="text"  name="address.street" [(ngModel)]="address.street"><br />
       <label>City: </label><br/>
      <input type="text"  name="address.city" [(ngModel)]="address.city"><br />
      <label>State: </label><br/>
      <input type="text"  name="address.state" [(ngModel)]="address.state"><br />
   </form>
   `
  //styleUrls: ['./app.component.css']
})
export class UserComponent {
  name:string;
  email:string;
  address:address;
  hobbies:string[];
  showHobbies:boolean;

  constructor() {
    this.name = 'Sam Smith';
    this.email = 'sravya2work@gmail.com';
    this.address = {
      street: '372 empire state dr',
      city: 'canton',
      state: 'MI'
    };
    this.hobbies = ['music', 'movies', 'sports'];
    this.showHobbies = false;
  }

  addHobby(hobby){
    this.hobbies.push(hobby);
  }

  deleteHobby

  //toggleHobbies(){
  //  if(this.show)
  //  this.showHobbies = true;
  //}
}

interface address {
  street: string;
  city: string;
  state: string;
}
