import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdIconModule,MdProgressBarModule,MdInputModule } from '@angular/material';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InputSearchComponent } from '../../shared';
import { ArtistService } from '../../services/artist.services';

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
    ],
    providers: [ArtistService]
})
export class HomeModule { }