import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from '../../services/assignment.service';
import { Assignment } from '../../models/assignment.model';

@Component({
  selector: 'app-edit-assignment',
  imports: [],
  templateUrl: './edit-assignment.html',
  styleUrl: './edit-assignment.css',
})
export class EditAssignment implements OnInit {
  assignmentService = inject(AssignmentService);
  assignments = this.assignmentService.getAssignments();

  activatedRoute = inject(ActivatedRoute);

  id: number | null = null;
  assignment: Assignment | undefined;

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    this.assignment = this.assignments().find(a => a.id === this.id);
  }
}
