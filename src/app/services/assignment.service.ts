import { inject, Injectable, signal } from '@angular/core';
import { Assignment } from '../models/assignment.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AssignmentService {
  API_URL = 'http://localhost:8010/api/assignments';
  http = inject(HttpClient);
  assignments = signal<Assignment[]>([]);

  constructor() {
    // Pour initiliser les assignments depuis le serveur
    this.loadAssignments();
  }

  loadAssignments() {
    this.http.get<Assignment[]>(this.API_URL).subscribe((data) => {
      console.log('Données reçues depuis le serveur :', data);
      this.assignments.set(data);
    });
  }

  addAssignment(newAssignment: Assignment) {
    this.http.post<Assignment>(this.API_URL, newAssignment).subscribe((data) => {
      console.log('Réponse du POST :', data);
      this.assignments.set([...this.assignments(), data]);
    });
  }

  deleteAssignment(_id: string) {
    this.http.delete(`${this.API_URL}/${_id}`).subscribe(() => {
      console.log(`Assignment with _id=${_id} deleted on server.`);
      this.assignments.set(this.assignments().filter((assignment) => assignment._id !== _id));
    });
  }

  getAssignmentById(_id: string) {
    return this.assignments().find((assignment) => assignment._id === _id);
  }

  updateAssignment(_id: string, updatedAssignment: Assignment) {
    this.http.put<Assignment>(`${this.API_URL}/${_id}`, updatedAssignment).subscribe((data) => {
      console.log(`Assignment with _id=${_id} updated on server.`);
      this.assignments.set(
        this.assignments().map((assignment) =>
          assignment._id === _id ? data : assignment
        )
      );
    });
  }
}
