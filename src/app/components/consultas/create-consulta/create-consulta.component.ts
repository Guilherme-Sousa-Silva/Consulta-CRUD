import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ConsultService } from "../consult.service";
import { Consult } from "../consult.model";

@Component({
  selector: "app-create-consulta",
  templateUrl: "./create-consulta.component.html",
  styleUrls: ["./create-consulta.component.css"],
})
export class CreateConsultaComponent implements OnInit {
  consult: Consult = {
    patientsName: "",
    patientsBirthday: "",
    patientsCPF: "",
    phoneNumber: undefined,
    emailAddress: "",
    CEP: "",
    address: "",
    addressNumber: undefined,
    doctorsName: "",
    CRM: "",
  };

  constructor(private consultService: ConsultService, private router: Router) {}

  ngOnInit(): void {}

  newConsult(): void {
    this.consultService.create(this.consult).subscribe(() => {
      this.consultService.showMessage("Consulta criada com sucesso!");
      this.router.navigate(["/consultas"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/consultas"]);
  }
}
