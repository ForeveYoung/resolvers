import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/interfaces/IUser.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, OnDestroy {
  public subscription: Subscription = new Subscription();

  public users: any = [];

  public isLoading = false;

  constructor(private _userService: UserService, private _router: Router) {}

  ngOnInit(): void {
    this.subscription = this._userService
      .getUsers()
      .subscribe((res) => (this.users = res));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public showUser(user: IUser) {
    this.isLoading = true;
    this._router.navigate([`user/${user.id}`]);

  }
}
