import { Component, inject } from '@angular/core';
import {AssignmentService} from '../../services/assignment.service';
import { MatButtonModule } from '@angular/material/button';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-assignment',
  imports: [MatButtonModule, RouterModule],
  templateUrl: './assignment.html',
  styleUrl: './assignment.css'
})

export class Assignment {
  AssignmentService = inject(AssignmentService);
  assignments = this.AssignmentService.getAssignments();
}

