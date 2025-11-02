import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { assignmentsData } from '../../mocks/assignment.data';
import { AssignmentService } from '../../services/assignment.service';
import { Assignment } from '../../models/assignment.model';

@Component({
  selector: 'app-create-data',
  imports: [MatButtonModule, FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './create-data.html',
  styleUrl: './create-data.css',
})
export class CreateData {
  max: number = 50;
  nbData: number = 5;
  id: number = 0;
  assignments = inject(AssignmentService);
  _id: string = '';

  createData() {
    for (let i = 0; i < this.nbData; i++) {
      this.id = Math.floor(Math.random() * (this.max - 1 + 1)) + 1;
      const assignment = assignmentsData[this.id % assignmentsData.length];
      const newAssignment = new Assignment(
        this._id,
        assignment.nom,
        assignment.dateDeRendu,
        assignment.rendu,
        assignment.description
      );

      this.assignments.addAssignment(newAssignment);
    }
    // Logic to create mock data goes here
  }
}
