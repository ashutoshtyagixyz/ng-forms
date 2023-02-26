import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserSettings } from './user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css'],
})
export class UserSettingsFormComponent {
  originalUserSettings: UserSettings = {
    name: '',
    emailOffers: false,
    interfaceStyle: '',
    subscriptionType: '',
    notes: '',
  };

  userSettings: UserSettings = { ...this.originalUserSettings };

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
  }
}
