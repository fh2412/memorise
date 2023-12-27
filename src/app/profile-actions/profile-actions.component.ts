import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-profile-actions',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './profile-actions.component.html',
  styleUrl: './profile-actions.component.css'
})
export class ProfileActionsComponent {
  user: User = {
    username: 'Flo',
    dob: new Date(),
    name: 'Florian Hofer',
    age: 21,
  };
}
