import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Child1Component } from './home/child1/child1.component';
import { Child2Component } from './home/child2/child2.component';


const routes: Routes = [
  {
    path:'home', component: HomeComponent,
    children : [
      {path: 'child1', component: Child1Component},
      {path: 'child2', component: Child2Component}
    ]
  },
  {path:'about', component: AboutComponent},
  {path:'', redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
