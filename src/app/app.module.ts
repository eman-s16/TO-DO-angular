import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ColorDirective } from './color.directive';
import { ClockComponent } from './clock/clock.component';
import { ScheduledTimeComponent } from './scheduled-time/scheduled-time.component';

import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms'; // Import FormsModul
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ColorDirective,
    ClockComponent,
    ScheduledTimeComponent,
 
    NavbarComponent,
    AboutComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CommonModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
