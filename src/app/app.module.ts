import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsListItemComponent } from './news-list/news-list-item/news-list-item.component';
import { NewsDetailsComponent } from './news-list/news-details/news-details.component';
import { EditNewsComponent } from './news-list/edit-news/edit-news.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'news', component: NewsListComponent},
  { path: 'news/:id/:title', component: NewsDetailsComponent},
  { path: 'news/:id/:title/edit', component: EditNewsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contacts', component: ContactsComponent}
];

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
    EditNewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
