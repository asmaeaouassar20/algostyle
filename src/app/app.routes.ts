import { Routes } from '@angular/router';
import { MainpageComponent } from './main/mainpage/mainpage.component';
import { AlgostyleComponent } from './main/algostyle/algostyle.component';

export const routes: Routes = [

    { path:'home', component: MainpageComponent},
    { path:'algostyle', component: AlgostyleComponent},
    { path : '', redirectTo:'home', pathMatch:'full'}

];



