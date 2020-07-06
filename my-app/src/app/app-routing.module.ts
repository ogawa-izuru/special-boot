import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { DeletedDisplayComponent } from './deleted-display/deleted-display.component';

const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: 'detail/:id', component: BlogDetailComponent },
  { path: 'deleted', component: DeletedDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
