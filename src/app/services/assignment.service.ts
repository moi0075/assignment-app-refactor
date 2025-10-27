import { Injectable, signal } from '@angular/core';
import { Assignment } from '../models/assignment.model';

@Injectable({
  providedIn: 'root'
})

export class AssignmentService {

  assignments = signal<Assignment[]>([
    new Assignment(1, 'TP1 sur WebComponents, un lecteur audio amélioré', new Date('2020-01-17'), true, 'Ce TP consiste à créer un lecteur audio en utilisant les WebComponents. Il doit inclure des fonctionnalités telles que la lecture, la pause, le saut de piste, et l\'affichage des informations sur la piste en cours.'),
    new Assignment(2, 'TP2 sur Angular, un joli gestionnaire de devoirs (Assignments)', new Date('2020-12-15'), false, 'Ce TP consiste à créer un gestionnaire de devoirs en utilisant Angular. Il doit inclure des fonctionnalités telles que l\'ajout, la suppression et la modification de devoirs.'),
    new Assignment(3, 'TP3 sur Angular, utilisation du router et de Web Services', new Date('2021-01-04'), false),
  ]);

  getAssignments() {
    return this.assignments;
  }

  getAssignmentById(id: number) {
    return this.assignments().find(assignment => assignment.id === id);
  }

  deleteAssignment(id: number) {
    this.assignments.set(this.assignments().filter(assignment => assignment.id !== id));
  }

  updateAssignment(id: number, updatedAssignment: Assignment) {
    this.assignments.set(this.assignments().map(assignment => 
      assignment.id === id ? updatedAssignment : assignment
    ));
  }

}
