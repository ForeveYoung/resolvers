import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListContainerRoutingModule } from './user-list-container-routing.module';
import { UserListContainerComponent } from './user-list-container.component';
import { MatCardModule } from '@angular/material/card';
import { UserComponent } from './components/user/user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [UserListContainerComponent, UserListComponent, UserComponent],
  imports: [
    CommonModule,
    UserListContainerRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
})
export class UserListContainerModule {}
