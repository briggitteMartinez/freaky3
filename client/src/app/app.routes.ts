import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminNewComponent } from './admin/admin-new/admin-new.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

export const routes: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,
        children: [ 
            { path: '', component: HomeComponent },
            { path: 'products/:id', component: ProductDetailsComponent}
        ]
    },
    {
        path:'admin',   
        component: AdminLayoutComponent,
        children: [
            { path: '', redirectTo:'admin-home', pathMatch: 'full' },
            { path: 'admin-home', component: AdminHomeComponent },
            { path: 'new', component: AdminNewComponent}
        ]
    

    }
    
];
