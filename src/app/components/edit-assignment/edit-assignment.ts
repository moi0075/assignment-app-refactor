import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from '../../services/assignment.service';
import { Assignment } from '../../models/assignment.model';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-edit-assignment',
    providers: [provideNativeDateAdapter()],
    imports: [
        MatCardModule,
        MatChipsModule,
        MatInputModule,
        MatDatepickerModule,
        MatButtonModule,
        MatIconModule,
        MatSlideToggleModule,
        FormsModule,
    ],

    templateUrl: './edit-assignment.html',
    styleUrl: './edit-assignment.css',
})
export class EditAssignment implements OnInit {
    router = inject(Router);
    assignmentService = inject(AssignmentService);

    activatedRoute = inject(ActivatedRoute);

    _id: string | null = null;
    assignment: Assignment | undefined;
    nomDevoir: string = '';
    dateDeRendu: Date = new Date();
    description: string = '';
    rendu: boolean = false;

    updatedAssignment: Assignment | null = null;

    ngOnInit() {
        this._id = String(this.activatedRoute.snapshot.paramMap.get('_id'));
        this.assignment = this.assignmentService.getAssignmentById(this._id);
        if (this.assignment) {
            this.nomDevoir = this.assignment.nom;
            this.dateDeRendu = this.assignment.dateDeRendu;
            this.description = this.assignment.description || '';
            this.rendu = this.assignment.rendu;
        }
    }

    saveChanges() {
        if (this._id !== null) {
            this.updatedAssignment = {
                _id: this._id,
                nom: this.nomDevoir,
                dateDeRendu: this.dateDeRendu,
                description: this.description,
                rendu: this.rendu,
            };
            this.assignmentService.updateAssignment(this._id, this.updatedAssignment);
        }
        this.router.navigate(['/assignments']);
    }

    cancel() {
        this.router.navigate(['/assignments']);
    }

    deleteAssignment() {
        if (this._id !== null) {
            this.assignmentService.deleteAssignment(this._id);
        }
        this.router.navigate(['/assignments']);
    }
}
