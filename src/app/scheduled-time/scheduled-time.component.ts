import { Component } from '@angular/core';
import { startOfDay, endOfDay } from 'date-fns';
import { CalendarEvent, MdbCalendarOptions } from 'mdb-calendar';
@Component({
  selector: 'app-scheduled-time',
  templateUrl: './scheduled-time.component.html',
  styleUrls: ['./scheduled-time.component.css']
})
export class ScheduledTimeComponent {
  calendarOptions: MdbCalendarOptions = {
    firstDayOfWeek: 'Monday',
    monthViewBtnTxt: 'Month view',
    weekViewBtnTxt: 'Week view',
    listViewBtnTxt: 'List view',
    todayBtnTxt: 'Go to today',
    eventAddTitle: 'Custom add modal title',
    eventEditTitle: 'Custom edit modal title',
    eventCancelBtnTxt: 'Close',
    eventAddBtnTxt: 'Save new event',
    eventEditBtnTxt: 'Update event data',
    eventDeleteBtnTxt: 'Delete event'
  };

  events: CalendarEvent[] = [
    {
      id: 'mdb-calendar-event-1',
      startDate: new Date(startOfDay(new Date())),
      endDate: new Date(endOfDay(new Date(2019, 2, 9))),
      name: 'Conference',
      color: 'info',
    },
    {
      id: 'mdb-calendar-event-2',
      startDate: new Date(startOfDay(new Date())),
      endDate: new Date(endOfDay(new Date())),
      name: 'Meeting',
      color: 'success'
    },
  ];

  generateUid() {
    const uid = Math.random().toString(36).substr(2, 9);
    return `mdb-calendar-event-${uid}`;
  }

  onEventEdit(event: CalendarEvent) {
    const oldEvent = this.events.findIndex( test => test.id === event.id);
    this.events[oldEvent] = event;
    this.events = [...this.events];
  }

  onEventAdd(event: CalendarEvent) {
    event.id = this.generateUid();
    this.events = [...this.events, event];
  }

  onEventDelete(deletedEvent: CalendarEvent) {
    const eventIndex = this.events.findIndex( event => event.id === deletedEvent.id);
    this.events.splice(eventIndex, 1);
    this.events = [...this.events];
  }
}
