import { Component } from '@angular/core';
import { Assignment } from '../../models/assignment.model';
import { AssignmentService } from '../../services/assignment.service';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-assignment',
  imports: [
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatFormFieldModule,
  ],
  templateUrl: './add-assignment.html',
  styleUrl: './add-assignment.css',
})
export class AddAssignment {
  router = inject(Router);
  assignmentService = inject(AssignmentService);

  nomDevoir: string = '';
  dateDeRendu: Date = new Date();
  description: string = '';
  rendu: boolean = false;
  _id: string = '';

  addAssignment() {
    const newAssignment = new Assignment(
      this._id,
      this.nomDevoir,
      this.dateDeRendu,
      this.rendu,
      this.description
    );

    this.assignmentService.addAssignment(newAssignment).subscribe(() => {
      this.router.navigate(['/assignments']);
    });
  }

  cancel() {
    this.router.navigate(['/assignments']);
  }
}
