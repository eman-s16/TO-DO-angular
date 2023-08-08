import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ScheduledTimeComponent } from './scheduled-time/scheduled-time.component';
import { AboutComponent } from './about/about.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {path:'scheduled-time',component:ScheduledTimeComponent},
  {path:'about',component:AboutComponent},
  {path:'to-do',component:TodoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
