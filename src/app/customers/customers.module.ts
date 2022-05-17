import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,

    FormsModule,
    DragDropModule,
    MatDialogModule,
  ],
  declarations: [CustomerPageComponent, CustomerListComponent],
  entryComponents: [],
})
export class CustomersModule {}
