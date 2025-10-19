export class Assignment {
  id: number;
  nom: string;
  dateDeRendu: Date;
  rendu: boolean;

  constructor(id: number, nom: string, dateDeRendu: Date, rendu: boolean) {
    this.id = id;
    this.nom = nom;
    this.dateDeRendu = dateDeRendu;
    this.rendu = rendu;
  }
}
