import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/interfaces/IUser.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  public routeId: Subscription = new Subscription();

  public id: any;

  public userInfo: any;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeId = this._route.params.subscribe((res) => (this.id = res['id']));

    this._userService
      .getUser(this.id)
      .subscribe((res) => (this.userInfo = res));
  }

  ngOnDestroy() {
    this.routeId.unsubscribe();
  }
}
