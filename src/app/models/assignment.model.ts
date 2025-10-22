export class Assignment {
  id: number;
  nom: string;
  dateDeRendu: Date;
  rendu: boolean;
  description?: string;

  constructor(id: number, nom: string, dateDeRendu: Date, rendu: boolean, description?: string) {
    this.id = id;
    this.nom = nom;
    this.dateDeRendu = dateDeRendu;
    this.rendu = rendu;
    this.description = description;
  }
}
