import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Consult } from "./consult.model";

@Injectable({
  providedIn: "root",
})
export class ConsultService {
  baseUrl = "http://localhost:3001/consultas";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  create(consult: Consult): Observable<Consult> {
    return this.http.post<Consult>(this.baseUrl, consult);
  }

  read(): Observable<Consult[]> {
    return this.http.get<Consult[]>(this.baseUrl);
  }

  readById(id: any): Observable<Consult> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Consult>(url);
  }

  update(consult: Consult): Observable<Consult> {
    const url = `${this.baseUrl}/${consult.id}`;
    return this.http.put<Consult>(url, consult);
  }

  delete(id: any): Observable<Consult> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Consult>(url);
  }
}
