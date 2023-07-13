import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsComponent} from "./news/news.component";
import {MyPageComponent} from "./my-page/my-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'MyPage', pathMatch: 'full' },
  {path: 'news', component: NewsComponent},
  {path: 'MyPage', component: MyPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
