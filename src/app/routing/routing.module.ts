import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { GreeterComponent } from '../pages/greeter/greeter.component';
import { TasksComponent } from '../pages/tasks/tasks.component';
import { environment } from 'src/environments/environment';
import { NotFoundComponent } from '../pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'greeter',
    component: GreeterComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
