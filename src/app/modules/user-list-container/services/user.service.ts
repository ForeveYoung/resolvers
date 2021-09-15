import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from 'src/app/interfaces/IUser.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  public getUsers(): Observable<IUser> {
    const url = 'https://jsonplaceholder.typicode.com/users';

    return this._http.get(url).pipe(map((r) => r as IUser));
  }

  public getUser(id: number): Observable<IUser> {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    return this._http.get(url).pipe(map((r) => r as IUser));
  }
}
