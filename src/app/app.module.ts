
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo.service';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes : Routes = [
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'contact',
    component: ContactComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    ChildComponentComponent,
    ReactiveFormComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
