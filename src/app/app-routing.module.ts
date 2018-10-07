import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailsComponent } from './news-list/news-details/news-details.component';
import { EditNewsComponent } from './news-list/edit-news/edit-news.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'news', component: NewsListComponent, children: [
      { path: ':id', component: NewsDetailsComponent},
      { path: ':id/edit', component: EditNewsComponent}
    ]},
    { path: 'about', component: AboutComponent},
    { path: 'contacts', component: ContactsComponent},
    { path: 'not-found', component: PageNotFoundComponent},
    { path: '**', redirectTo: 'not-found'},
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
