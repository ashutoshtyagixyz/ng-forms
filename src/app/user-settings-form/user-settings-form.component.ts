import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { UserSettings } from './user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css'],
})
export class UserSettingsFormComponent {
  postError = false;
  postErrorMsg = '';
  originalUserSettings: UserSettings = {
    name: 'Ashutosh Tyagi',
    emailOffers: true,
    interfaceStyle: 'medium',
    subscriptionType: 'Annual',
    notes: 'blah blah',
  };

  constructor(private dataService: DataService) {}

  userSettings: UserSettings = { ...this.originalUserSettings };

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);
  }
  onHttpError(errorResponse: any) {
    console.log('error', errorResponse);
    this.postError = true;
    this.postErrorMsg = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    if (form.valid) {
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        (result) => console.log('success', result),
        (error) => this.onHttpError(error)
      );
    } else {
      this.postError = true;
      this.postErrorMsg = 'Form not valid';
    }
  }
}
