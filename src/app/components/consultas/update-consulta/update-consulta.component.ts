import { ConsultService } from "./../consult.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Consult } from "../consult.model";

@Component({
  selector: "app-update-consulta",
  templateUrl: "./update-consulta.component.html",
  styleUrls: ["./update-consulta.component.css"],
})
export class UpdateConsultaComponent implements OnInit {
  consult: Consult;

  constructor(
    private router: Router,
    private consultService: ConsultService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.consultService.readById(id).subscribe((consult) => {
      this.consult = consult;
    });
  }

  updateConsult(): void {
    this.consultService.update(this.consult).subscribe(() => {
      this.consultService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(["/consultas"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/consultas"]);
  }
}
