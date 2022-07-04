import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { SearchComponent } from './pages/search/search.component';
import { VisitusComponent } from './pages/visitus/visitus.component';


const routes: Routes = [
  {path: '', redirectTo:'aboutUs',pathMatch: 'full'},
  { path: 'aboutUs', component: AboutusComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'search/:title', component: SearchComponent },
  { path: 'visitUs', component: VisitusComponent },
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
