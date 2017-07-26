import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdIconModule,MdProgressBarModule,MdInputModule,MdCardModule} from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InputSearchComponent,CardComponent,CardListComponent,DiscTableListComponent,DiscTableComponent} from '../../shared';
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
        InputSearchComponent,
        CardComponent,
        CardListComponent,
        DiscTableListComponent,
        DiscTableComponent
    ],
    providers: [ArtistService]
})
export class HomeModule {}