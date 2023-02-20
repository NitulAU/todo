import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { FormComponent } from "./form/form.component";
import { HeaderComponent } from "./header/header.component";
import { ListComponent } from "./list/list.component";
import { MainComponent } from "./main/main.component";
import { AuthGuard } from "./shared/auth.guard";

const appRoutes:Routes=[
    {path:'',component:FormComponent},
    {path:'form',component:FormComponent},
    {path:'main',canActivate:[AuthGuard],component:MainComponent},
    {path:'create',component:CreateComponent},
    {path:'list',component:ListComponent}
    // {path:'main',loadChildren:()=>import('./main/main.component').then(a=>a.MainComponent), canActivate:[AuthGuard]}
];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}