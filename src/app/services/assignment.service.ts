import { inject, Injectable, signal } from '@angular/core';
import { Assignment } from '../models/assignment.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {PaginatedAssignments} from '../models/paginated.model';

@Injectable({
  providedIn: 'root',
})
export class AssignmentService {
  API_URL = 'http://localhost:8010/api/assignments';
  http = inject(HttpClient);
  assignments = signal<Assignment[]>([]);
  totalDocs = signal<number>(0);

  loadAssignments(page: number = 1, limit: number = 10) {
    this.http.get<PaginatedAssignments>(`${this.API_URL}?page=${page}&limit=${limit}`).subscribe((data) => {
      console.log('Données reçues depuis le serveur :', data.docs);
      this.assignments.set(data.docs);
      this.totalDocs.set(data.totalDocs);
    });
  }

  addAssignment(newAssignment: Assignment): Observable<Assignment> {// Retourne un Observable
    return this.http.post<Assignment>(this.API_URL, newAssignment).pipe(
      tap((data) => {
        console.log('Ajout d\'un nouvel assignment :', data);
        this.assignments.set([...this.assignments(), data]);
      })
    );
  }

  deleteAssignment(_id: string):Observable<void> {// Retourne un Observable
    return this.http.delete<void>(`${this.API_URL}/${_id}`).pipe(
      tap(() => {
        console.log(`Assignment with _id=${_id} deleted on server.`);
        this.assignments.set(this.assignments().filter((assignment) => assignment._id !== _id));
      })
    );
  }

  updateAssignment(_id: string, updatedAssignment: Assignment): Observable<Assignment> {// Retourne un Observable
    return this.http.put<Assignment>(`${this.API_URL}/${_id}`, updatedAssignment).pipe(
      tap((data) => {
        console.log(`Assignment with _id=${_id} updated on server.`);
        this.assignments.set(
          this.assignments().map((assignment) => (assignment._id === _id ? data : assignment))
        );
      })
    );
  }

  getAssignmentById(_id: string) {
    return this.assignments().find((assignment) => assignment._id === _id);
  }
}
