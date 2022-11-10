import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Consult } from "../consult.model";
import { ConsultService } from "../consult.service";

@Component({
  selector: "app-delete-consulta",
  templateUrl: "./delete-consulta.component.html",
  styleUrls: ["./delete-consulta.component.css"],
})
export class DeleteConsultaComponent implements OnInit {
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

  deleteConsult() {
    this.consultService.delete(this.consult.id).subscribe(() => {
      this.consultService.showMessage("Produto excluido com sucesso!");
      this.router.navigate(["/consultas"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/consultas"]);
  }
}
