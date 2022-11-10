import { DeleteConsultaComponent } from "./components/consultas/delete-consulta/delete-consulta.component";
import { UpdateConsultaComponent } from "./components/consultas/update-consulta/update-consulta.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateConsultaComponent } from "./components/consultas/create-consulta/create-consulta.component";
import { ConsultaCrudComponent } from "./views/consulta-crud/consulta-crud.component";
import { HomeComponent } from "./views/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "consultas",
    component: ConsultaCrudComponent,
  },
  {
    path: "consultas/create",
    component: CreateConsultaComponent,
  },
  {
    path: "consultas/update/:id",
    component: UpdateConsultaComponent,
  },
  {
    path: "consultas/delete/:id",
    component: DeleteConsultaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
