import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { ProductComponent } from './product/product.component';
import { Admin1Component } from './admin1/admin1.component';
import { SuperadminGuard } from './superadmin.guard';
import { Admin1ManageComponent } from './admin1-manage/admin1-manage.component';
import { Admin1EditComponent } from './admin1-edit/admin1-edit.component';
import { AdminaccessGuard } from './adminaccess.guard';
import { Admin1DeleteComponent } from './admin1-delete/admin1-delete.component';
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import(`./admin/admin.module`).then((mod) => mod.AdminModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import(`./user/user.module`).then((modu) => modu.UserModule),
  },
  {
    path: 'newcomponent',
    component: NewcomponentComponent,
    canActivate: [AuthGuard],
  },
  { path: 'product', component: ProductComponent, canActivate: [AdminGuard] },

  {
    path: '',
    canActivate: [SuperadminGuard],
    children: [
      {
        path: 'admin1',
        component: Admin1Component,
      },
      {
        path: '',
        canActivateChild: [AdminaccessGuard],
        children: [
          { path: 'admin1-manage', component: Admin1ManageComponent },
          { path: 'admin1-edit', component: Admin1EditComponent },
          { path: 'admin1-delete', component: Admin1DeleteComponent },
        ],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
