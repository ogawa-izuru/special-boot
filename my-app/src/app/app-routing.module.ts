import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { DeletedDisplayComponent } from './deleted-display/deleted-display.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PostArticleComponent } from './post-article/post-article.component';

const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: 'detail/:id', component: BlogDetailComponent },
  { path: 'deleted', component: DeletedDisplayComponent },
  { path: 'post', component: PostArticleComponent },
  { path: 'error', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
