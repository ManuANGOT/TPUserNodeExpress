export default class UserModel {
  id?: number;
  nom: string;
  prenom: string;
  date_de_naissance: string;
  date_inscription: Date;
  nationalite: string;
  static count: number = 1;
  

  constructor(id: number, nom: string, prenom: string, date_de_naissance: string, date_inscription: Date, nationalite: string) {
    this.id = id++;
    this.nom = nom;
    this.prenom = prenom;
    this.date_de_naissance = date_de_naissance;
    this.date_inscription = date_inscription;
    this.nationalite = nationalite;
  }

  patch = (data: UserModel) => {
    if (data.nom) this.nom = data.nom;
    if (data.prenom) this.prenom = data.prenom;
    if (data.date_de_naissance) this.date_de_naissance = data.date_de_naissance;
    if (data.date_inscription) this.date_inscription = data.date_inscription;
    if (data.nationalite) this.nationalite=data.nationalite;
  };
  
}

export {UserModel}
