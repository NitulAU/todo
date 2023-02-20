import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbCalendar, NgbDatepickerModule, NgbDateStruct,NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
	// imports: [NgbDatepickerModule, FormsModule, JsonPipe]
	// standalone: true
})
export class DateComponent{
	model: NgbDateStruct;
	date: { year: number; month: number };

	constructor(private calendar: NgbCalendar) {
    // this.date.month=1;
    // this.date.year=2023;
  }

	selectToday() {
		this.model = this.calendar.getToday();
	}
}
