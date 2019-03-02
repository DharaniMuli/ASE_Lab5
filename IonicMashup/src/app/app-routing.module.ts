import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: '',
    loadChildren: './login/login.module#LoginPageModule'
  },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'emotiondetection', loadChildren: './emotiondetection/emotiondetection.module#EmotiondetectionPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
