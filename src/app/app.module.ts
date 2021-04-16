import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { ProductComponent } from './product/product.component';
import { Admin1Component } from './admin1/admin1.component';
import { Admin1EditComponent } from './admin1-edit/admin1-edit.component';
import { Admin1DeleteComponent } from './admin1-delete/admin1-delete.component';
import { Admin1ManageComponent } from './admin1-manage/admin1-manage.component';
import { FormComponent } from './form/form.component';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent,
    ProductComponent,
    Admin1Component,
    Admin1EditComponent,
    Admin1DeleteComponent,
    Admin1ManageComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
