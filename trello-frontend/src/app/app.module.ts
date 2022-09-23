import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import {HeaderComponent} from "./header/header.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddListComponent } from './add-list/add-list.component';
import {FormsModule} from "@angular/forms";
import {AddCardComponent} from "./add-card/add-card.component";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardListComponent,
    CardComponent,
    HeaderComponent,
    SidebarComponent,
    AddListComponent,
    AddCardComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule,
        
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
