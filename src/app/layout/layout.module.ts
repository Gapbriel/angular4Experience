import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MdToolbarModule} from '@angular/material';
import { LayoutComponent } from './layout.component';
import { HeaderBarComponent,InputSearchComponent} from '../shared';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MdToolbarModule
    ],
    declarations: [
        LayoutComponent,
        HeaderBarComponent
    ]
})
export class LayoutModule { }