import { Component } from '@angular/core';
import { QUOTES } from './models/data-base';
import { Quotation } from './models/quotations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showForm = false;
  quotes: Quotation[] = QUOTES;

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }
}

// export const QUOTES = [
//   {
//     author: 'Jonathan Carroll',
//     quotation: 'To, że milczę, nie znaczy, że nie mam nic do powiedzenia.',
//     votes: -4,
//   },
