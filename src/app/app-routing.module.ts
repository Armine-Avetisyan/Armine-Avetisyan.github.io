import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {GalleryPageComponent} from "./pages/gallery-page/gallery-page.component";
import {NewsPageComponent} from "./pages/news-page/news-page.component";
import {ServicePageComponent} from "./pages/service-page/service-page.component";
import {TrainerPageComponent} from "./pages/trainer-page/trainer-page.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home',   component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'gallery', component: GalleryPageComponent},
  {path: 'news', component: NewsPageComponent},
  {path: 'service', component: ServicePageComponent},
  {path: 'trainer', component: TrainerPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
