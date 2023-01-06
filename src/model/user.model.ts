export default class UserModel {
  id: number;
  nom: string;
  prenom: string;
  date_de_naissance: string;
  date_inscription: Date;
  nationalite: string;
  

  constructor(id: number, nom: string, prenom: string, date_de_naissance: string, date_inscription: Date, nationalite: string) {
    this.id = id++;
    this.nom = nom;
    this.prenom = prenom;
    this.date_de_naissance = date_de_naissance;
    this.date_inscription = date_inscription;
    this.nationalite = nationalite;
  }
  
}

export {UserModel}
