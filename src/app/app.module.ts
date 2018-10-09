import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsListItemComponent } from './news/news-list/news-list-item/news-list-item.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import { EditNewsComponent } from './news/edit-news/edit-news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    NewsListComponent,
    NewsListItemComponent,
    NewsDetailsComponent,
    EditNewsComponent,
    PageNotFoundComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
