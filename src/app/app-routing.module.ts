import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
<<<<<<< HEAD
  { path: 'bakery-detail', loadChildren: './bakery-detail/bakery-detail.module#BakeryDetailPageModule' }
=======
  { path: 'location', loadChildren: './location/location.module#LocationPageModule' }

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path:  'register', loadChildren:  './auth/register/register.module#RegisterPageModule' },
  { path:  'login', loadChildren:  './auth/login/login.module#LoginPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

>>>>>>> d7ffb86ee2c206b5ca3bf1d80a256b5ded91594d
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
