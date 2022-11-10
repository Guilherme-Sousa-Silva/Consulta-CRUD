import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-consulta-crud",
  templateUrl: "./consulta-crud.component.html",
  styleUrls: ["./consulta-crud.component.css"],
})
export class ConsultaCrudComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToNewConsult() {
    this.router.navigate(["/consultas/create"]);
  }
}
