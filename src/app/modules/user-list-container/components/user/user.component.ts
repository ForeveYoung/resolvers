import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/IUser.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public userInfo: IUser = this._route.snapshot.data.user;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {}
}
