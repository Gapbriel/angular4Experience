import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MdToolbarModule, MdIconModule,MdProgressBarModule,MdInputModule,MdCardModule} from '@angular/material';
import { LayoutComponent } from './layout.component';
import { HeaderBarComponent} from '../shared';
import { HomeComponent } from './home/home.component';
import {ArtistComponent} from './artist/artist.component';
import { InputSearchComponent,CardComponent,CardListComponent,DiscTableListComponent,DiscTableComponent} from '../shared';
import { ArtistService } from '../services/artist.services';
import {AlbumComponent} from './album/album.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MdToolbarModule,
        MdIconModule,
        MdProgressBarModule,
        MdInputModule
    ],
    declarations: [
        LayoutComponent,
        HeaderBarComponent,
        HomeComponent,
        InputSearchComponent,
        CardComponent,
        CardListComponent,
        ArtistComponent,
        AlbumComponent,
        DiscTableListComponent,
        DiscTableComponent
    ],
    providers: [ArtistService]
})
export class LayoutModule { }