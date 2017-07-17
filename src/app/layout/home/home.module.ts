import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdInputModule,MdIconModule,MdProgressBarModule} from '@angular/material';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        MdInputModule,
        MdIconModule,
        MdProgressBarModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }