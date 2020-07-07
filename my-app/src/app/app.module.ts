import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { HeaderComponent } from './core/header/header.component';
import { BlogListComponent } from './blog-list/blog-list.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './memorydata.service';
import { DeletedDisplayComponent } from './deleted-display/deleted-display.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PostArticleComponent } from './post-article/post-article.component';
@NgModule({
  declarations: [
    AppComponent,
    BlogDetailComponent,
    HeaderComponent,
    BlogListComponent,
    DeletedDisplayComponent,
    ErrorPageComponent,
    PostArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
