export class Assignment {
    _id: string;
    nom: string;
    dateDeRendu: Date;
    rendu: boolean;
    description?: string;

    constructor(_id: string, nom: string, dateDeRendu: Date, rendu: boolean, description?: string) {
        this._id = _id;
        this.nom = nom;
        this.dateDeRendu = dateDeRendu;
        this.rendu = rendu;
        this.description = description;
    }
}
