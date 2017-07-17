import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdIconModule,MdProgressBarModule,MdInputModule } from '@angular/material';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InputSearchComponent } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        MdIconModule,
        MdProgressBarModule,
        MdInputModule
    ],
    declarations: [
        HomeComponent,
        InputSearchComponent
    ]
})
export class HomeModule { }