import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../shared/layout/layout.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: CustomerPageComponent,
        // children: [
        //   {
        //     path: '',
        //     component: CustomerListComponent,
        //   },
        // ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
