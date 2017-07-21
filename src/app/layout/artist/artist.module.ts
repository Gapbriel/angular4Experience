import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdIconModule,MdProgressBarModule,MdInputModule,MdCardModule,MdProgressSpinnerModule} from '@angular/material';

import { ArtistComponent } from './artist.component';
import { InputSearchComponent,CardComponent,CardListComponent} from '../../shared';
import { ArtistService } from '../../services/artist.services';

@NgModule({
    imports: [
        CommonModule,
        MdIconModule,
        MdProgressBarModule,
        MdInputModule
    ],
    declarations: [
        ArtistComponent,
        InputSearchComponent,
        CardComponent,
        CardListComponent
    ],
    providers: [ArtistService]
})
export class ArtistModule {}