import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import {ArtistComponent} from './artist/artist.component';
import {AlbumComponent} from './album/album.component';


const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'home', component:HomeComponent},//loadChildren: './home/home.module#HomeModule' },
            { path: 'artist/detail/:id', component: ArtistComponent },
            { path: 'album/:id', component: AlbumComponent} 
            // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            // { path: 'forms', loadChildren: './form/form.module#FormModule' },
            // { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            // { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            // { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            // { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
