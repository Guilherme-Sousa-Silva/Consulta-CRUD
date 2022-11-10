import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/template/header/header.component";
import { NavComponent } from "./components/template/nav/nav.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from "./components/template/footer/footer.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from "./views/home/home.component";
import { ConsultaCrudComponent } from "./views/consulta-crud/consulta-crud.component";
import { CreateConsultaComponent } from "./components/consultas/create-consulta/create-consulta.component";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReadConsultaComponent } from "./components/consultas/read-consulta/read-consulta.component";
import { MatTableModule } from "@angular/material/table";
import { UpdateConsultaComponent } from './components/consultas/update-consulta/update-consulta.component';
import { DeleteConsultaComponent } from './components/consultas/delete-consulta/delete-consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ConsultaCrudComponent,
    CreateConsultaComponent,
    ReadConsultaComponent,
    UpdateConsultaComponent,
    DeleteConsultaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
