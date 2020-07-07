import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { HeaderComponent } from './core/header/header.component';
import { BlogListComponent } from './blog-list/blog-list.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './memorydata.service';
import { DeletedDisplayComponent } from './deleted-display/deleted-display.component';
import { PostArticleComponent } from './post-article/post-article.component';
@NgModule({
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
