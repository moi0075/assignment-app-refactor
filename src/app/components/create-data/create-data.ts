import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { assignmentsData } from '../../mocks/assignment.data';
import { AssignmentService } from '../../services/assignment.service';
import { Assignment } from '../../models/assignment.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';

@Component({
  selector: 'app-create-data',
  imports: [MatButtonModule, FormsModule, MatInputModule, MatFormFieldModule, CommonModule],
  templateUrl: './create-data.html',
  styleUrl: './create-data.css',
})
export class CreateData {
  max: number = 50;
  nbData: number = 5;
  assignments = inject(AssignmentService);
  _id: string = '';

  // Utilisation de forkJoin pour attendre que toutes les requêtes soient terminées
  createData() {
    const appelsEnAttente: Observable<Assignment>[] = [];
    for (let i = 0; i < this.nbData; i++) {
      let randomIndex = Math.floor(Math.random() * assignmentsData.length);
      let mockData = assignmentsData[randomIndex];

      const newAssignment = new Assignment(
        this._id,
        mockData.nom,
        mockData.dateDeRendu,
        mockData.rendu,
        mockData.description
      );
      appelsEnAttente.push(this.assignments.addAssignment(newAssignment));
    }

    forkJoin(appelsEnAttente).subscribe({
      next: (resultats) => {
        console.log(`SUCCÈS ! ${resultats.length} devoirs ont été ajoutés.`);
      },
      error: (err) => {
        console.error("Erreur lors de l'ajout en masse :", err);
      }
    });
  }
}
