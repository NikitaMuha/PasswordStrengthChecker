import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StrenghtService {
password: string = '';
strength: string = '';
  constructor() { }

  getPasswordStrength(password: string) {
    const length = password.length;

    if (length === 0) {
      return this.strength = "noValue"/// Three Gray
    } else if (length < 8) {
     return this.strength = "underValue" ///Three Red
    } else {
      const hasDigits = /\d/.test(password);
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

      if (hasDigits && hasLetters && hasSymbols) {
        return this.strength = "strong" /// Three Section Green
      } else if ((hasDigits && hasLetters) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
        return this.strength = "medium";/// Two Sections Yellow Third is gray
      } else if (hasDigits || hasLetters || hasSymbols) {
        return this.strength = "weak";/// First is Red - Rest are Gray
      }
    }
    return "";
  }

}
