import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from '../../services/assignment.service';
import { Assignment } from '../../models/assignment.model';
import {MatCardModule} from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@Component({
  selector: 'app-edit-assignment',
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatChipsModule, MatInputModule, MatDatepickerModule, MatButtonModule, MatIconModule, MatSlideToggleModule],
  templateUrl: './edit-assignment.html',
  styleUrl: './edit-assignment.css',
})
export class EditAssignment implements OnInit {
  assignmentService = inject(AssignmentService);

  activatedRoute = inject(ActivatedRoute);

  id: number | null = null;
  assignment: Assignment | undefined;

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    this.assignment = this.assignmentService.getAssignmentById(this.id);
  }
}
