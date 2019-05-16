import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    <%= classify(name) %>CreateComponent,
    <%= classify(name) %>EditComponent,
    <%= classify(name) %>DeleteComponent,
    <%= classify(name) %>TableComponent
} from './components';
import {<%= classify(name) %>Component} from './<%=dasherize(name)%>/<%=dasherize(name)%>.component';
import {<%= classify(name) %>Routing} from './<%=dasherize(name)%>.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    <%= classify(name) %>Routing
  ],
  declarations: [
    <%= classify(name) %>Component,
    <%= classify(name) %>CreateComponent,
    <%= classify(name) %>EditComponent,
    <%= classify(name) %>DeleteComponent,
    <%= classify(name) %>TableComponent
  ],
})
export class <%= classify(name) %>Module { }
