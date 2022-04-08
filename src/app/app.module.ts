import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponentComponent } from './components/heroes-component/heroes-component.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
