import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {StudentPlayLoad} from "../Models/studentPlayLoad";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BaseUrl = 'http://localhost:3000/posts';
  data: StudentPlayLoad[] = [];
  firstUser = 'angular1'
  firstPassword = 'project1'
  secondUser = 'angular2'
  secondPassword = 'project2'
  firstUserLogged = false;
  isSomebodyLogged = false;

  constructor(private http: HttpClient) {
  }

  post_student_data(data: StudentPlayLoad): Observable<StudentPlayLoad> {
    return this.http.post<StudentPlayLoad>(this.BaseUrl, data).pipe(map((res: StudentPlayLoad) => {
      return res;
    }))
  }

  get_student_data_by_id(id: number): Observable<StudentPlayLoad> {
    return this.http.get<StudentPlayLoad>("http://localhost:3000/posts/" + id);
  }

  get_student_data(): Observable<StudentPlayLoad[]> {
    return this.http.get<StudentPlayLoad[]>("http://localhost:3000/posts");
  }

  update_student_data(data: StudentPlayLoad, id: number): Observable<void> {
    return this.http.put<void>(`http://localhost:3000/posts/${id}`, data);
  }

  delete_student_data(id: number): Observable<void> {
    return this.http.delete<void>("http://localhost:3000/posts/" + id);
  }


  // fonction pour recuperer un Eigenschaft precis venant de l'Api, le Matricule et le nom par exemple
  /* get_student_data(): Observable<{matricule: string, student_firstname: string}[]> {
     return this.http.get<StudentPlayLoad[]>("http://localhost:3000/posts")
       .pipe(
         map((res: StudentPlayLoad[]) => {
           return res.map((res1)=>({
             matricule: res1.matricule,
             student_firstname: res1.student_firstname
           }));
         }))
   }*/


  /*  get_student_data_byId(id: number) {
      return this.http.get<any>("http://localhost:3000/posts/" + id).subscribe((data) => {
        this.data = data
      }, () => {
        this.errorMessage = 'Es ist nicht möglich die Abfragen zu laden. Bitte prüfen Sie die Verbindung mit dem Server.'
      });
    }*/
}
