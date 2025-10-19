import { Injectable, signal } from '@angular/core';
import { Assignment } from '../models/assignment.model';

@Injectable({
  providedIn: 'root'
})

export class AssignmentService {

  assignments = signal<Assignment[]>([
    new Assignment(1, 'TP1 sur WebComponents, un lecteur audio amélioré', new Date('2020-01-17'), true),
    new Assignment(2, 'TP2 sur Angular, un joli gestionnaire de devoirs (Assignments)', new Date('2020-12-15'), false),
    new Assignment(3, 'TP3 sur Angular, utilisation du router et de Web Services', new Date('2021-01-04'), false),
  ]);

  getAssignments() {
    return this.assignments;
  }
  
}
