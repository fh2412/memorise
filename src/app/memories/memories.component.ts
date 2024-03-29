import { Component } from '@angular/core';
import { Memory } from '../interfaces/memory';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatCardTitleGroup } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider'; 
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { CommonModule } from '@angular/common';
import { ProfileActionsComponent } from "../profile-actions/profile-actions.component";


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
    selector: 'app-memories',
    standalone: true,
    templateUrl: './memories.component.html',
    styleUrl: './memories.component.css',
    imports: [FormsModule, MatCardModule, MatDividerModule, MatListModule, MatGridListModule, CommonModule, ProfileActionsComponent]
})
export class MemoriesComponent {  
  memory: Memory = {
    title: 'MYFirstMemory',
    date: new Date(),
    description: 'This is my first memory I ever created on this app',
    username: 'Flo',
    picture: ['random'],
    activityId: 1,
    location: '3300 Amstetten'
  };
  tiles: Tile[] = [
    {text: 'Profile Pic', cols: 2, rows: 2, color: 'lightblue'},
    {text: 'Vertical line', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Profile Actions', cols: 4, rows: 1, color: 'lightpink'},
    {text: 'Text', cols: 4, rows: 1, color: '#DDBDF1'},
  ];
}
