import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IUser } from 'src/app/interfaces/IUser.interface';
import { UserService } from '../services/user.service';

@Injectable()
export class UserResolver implements Resolve<IUser> {
  constructor(private _userService: UserService, private _router: Router) {}

  resolve(next: ActivatedRouteSnapshot) {
    return this._userService.getUser(next.params?.id).pipe(
      map((res) => res),
      catchError((err) => {
        this._router.navigate(['']);
        console.log(err);
        return EMPTY;
      })
    );
  }
}
