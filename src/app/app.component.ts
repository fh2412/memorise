import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MemoriesComponent } from "./memories/memories.component";
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MainNavComponent } from "./main-nav/main-nav.component";
import {MatCardModule} from '@angular/material/card'; 

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MemoriesComponent, FormsModule, MatSlideToggleModule, MainNavComponent, MatCardModule]
})
export class AppComponent {
  title = 'Memorise';
}
