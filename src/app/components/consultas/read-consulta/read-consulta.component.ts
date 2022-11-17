import { ConsultService } from "./../consult.service";
import { ConsultaCrudComponent } from "./../../../views/consulta-crud/consulta-crud.component";
import { Component, OnInit } from "@angular/core";
import { Consult } from "../consult.model";

@Component({
  selector: "app-read-consulta",
  templateUrl: "./read-consulta.component.html",
  styleUrls: ["./read-consulta.component.css"],
})
export class ReadConsultaComponent implements OnInit {
  consultas: Consult[] = [];
  displayedColumns = [
    "patientsName",
    "patientsBirthday",
    "patientsCPF",
    "phoneNumber",
    "emailAddress",
    "CEP",
    "address",
    "doctorsName",
    "CRM",
    "action",
  ];

  constructor(private consultService: ConsultService) {}

  ngOnInit(): void {
    this.consultService.read().subscribe((consultas) => {
      this.consultas = consultas;
      console.log(consultas);
    });
  }
}
