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

  getById1 = (id: number): UserModel => {
    const resu = this.repo.getAll().find((item) => item.id == id);
    if (!resu) throw "Cet id n'existe pas !!!";
    return resu;
  };

  // filter renvoie toutes les occurences qui marchent avec la condition
  getById2 = (id: number): UserModel => {
    const resu = this.repo.getAll().filter((item) => item.id == id)[0];
    if (!resu) throw "id non trouvé";
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

  /** 
  updateTodo = (item: TodoModel, id: number): TodoModel => {
    if (item.id != id) throw "to do incorrecte";
    const exist = this.getAll().find((data) => data.id == item.id);
    if (!exist) {
      const todo = new TodoModel(item.task, item.completed);
      this.repo.createTodo(todo);
      return todo;
    } else {
      const todo = new TodoModel(item);
      const index = this.getAll().findIndex((item) => item.id == todo.id);
      this.repo.update(todo, index);
      return todo;
    }
  };

  patch = (id: number, item: Partial<IPatch>): TodoModel => {
    const index = this.getAll().findIndex((data) => data.id == id);

    if (!index) throw "id inexistante";

    const data = this.repo.patch(index, item);
    return data;
  };
  */
}
