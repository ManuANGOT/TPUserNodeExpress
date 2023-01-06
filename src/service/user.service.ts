import UserModel from "../model/user.model";
import UserRepository from "../repository/user.repository";


export default class UserService {
  repo: UserRepository;

  constructor(repo: UserRepository) {
    this.repo = repo;
  }

  getAll = (): UserModel[] => {
    return this.repo.getAll();
  };

  getById = (id: number): UserModel => {
    const resu = this.repo.getAll().find((item) => item.id == id);
    if (!resu) throw "Cet id n'existe pas !!!";
    return resu;
  };

  
  deleteById = (id: number): void => {
    this.repo.deleteById(id);
  };
 
  createUser = (id: number, nom: string, prenom: string, date_de_naissance: string, date_inscription: Date, nationalite: string): UserModel => {
    if (!id || !nom || !prenom || !date_de_naissance || !date_inscription || !nationalite) throw "Il manque un élément";
    const newUser = new UserModel(id, nom, prenom, date_de_naissance, date_inscription, nationalite);
    this.repo.createUser(newUser);
    return newUser;
  };


  updateUser = (item: UserModel, id: number): UserModel => {
    if (item.id != id) throw "User inconnu !";
    const exist = this.getAll().find((data) => data.id == item.id);
    if (!exist) {
      const user = new UserModel(item.id, item.nom, item.prenom, item.date_de_naissance, item.date_inscription, item.nationalite);
      this.repo.createUser(user);
      return user;
    } else {
      const user = new UserModel(item.id, item.nom, item.prenom, item.date_de_naissance, item.date_inscription, item.nationalite);
      const index = this.getAll().findIndex((item) => item.id == user.id);
      this.repo.update(user, index);
      return user;
    }
  };
  
/** 
  patchUser = (id: number): UserModel => {
    const index = this.getAll().findIndex((data) => data.id == id);

    if (!index) throw "id inexistante";

    const data = this.repo.patch(index);
    return data;
  };
  */
 
}
