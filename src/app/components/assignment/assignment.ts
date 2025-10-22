import { Component, inject } from '@angular/core';
import { AssignmentService } from '../../services/assignment.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-assignment',
  imports: [MatButtonModule, RouterModule, MatCardModule, MatChipsModule, MatIcon],
  templateUrl: './assignment.html',
  styleUrl: './assignment.css',
})
export class Assignment {
  AssignmentService = inject(AssignmentService);
  AuthService = inject(AuthService);
  assignments = this.AssignmentService.getAssignments();
}
