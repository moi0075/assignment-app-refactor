import { Component, inject, OnInit } from '@angular/core';
import { AssignmentService } from '../../services/assignment.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-assignment',
  imports: [
    MatButtonModule,
    RouterModule,
    MatCardModule,
    MatChipsModule,
    MatIcon,
    MatPaginatorModule,
  ],

  templateUrl: './assignment.html',
  styleUrl: './assignment.css',
})
export class Assignment implements OnInit {
  AssignmentService = inject(AssignmentService);
  assignments = this.AssignmentService.assignments;
  totalDocs = this.AssignmentService.totalDocs;
  
  AuthService = inject(AuthService);

  // Pagination
  pageEvent!: PageEvent;
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  ngOnInit() {
    this.AssignmentService.loadAssignments(this.pageIndex + 1, this.pageSize);
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.AssignmentService.loadAssignments(this.pageIndex + 1, this.pageSize);
  }
}
