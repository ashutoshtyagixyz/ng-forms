import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from '../user-settings-form/user-settings';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    // return of(userSettings);
    console.log(userSettings);
    return this.http.post(
      'https://putsreq.com/nKjC0UZIoqaEWJa0OtMi',
      userSettings
    );
  }
}
