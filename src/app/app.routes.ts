import { Routes } from '@angular/router';
import { MemoriesComponent } from './memories/memories.component';
import { FriendsComponent } from './friends/friends.component';
import { ActivitiesComponent } from './activities/activities.component';

export const routes: Routes = [
    { path: 'memory-component', component: MemoriesComponent },
    { path: 'friends-component', component: FriendsComponent },
    { path: 'activities-component', component: ActivitiesComponent },
];
