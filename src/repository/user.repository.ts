import { Request, Response } from "express";
import UserModel from "../model/user.model";

export default class UserRepository {
  private users: UserModel[] = [
    new UserModel(
      1,
      "Doe",
      "john",
      "date_naissance",
      new Date("December 17, 1995 03:24:00"),
      "Groland"
    ),
    new UserModel(
      2,
      "Glenn",
      "john",
      "date_naissance",
      new Date("December 17, 1995 03:24:00"),
      "French"
    ),
    new UserModel(
      3,
      "ApeuPrès",
      "Jean-Michel",
      "date_naissance",
      new Date("December 17, 1995 03:24:00"),
      "Tchèque"
    ),
    new UserModel(
      4,
      "Duce",
      "Jean-Claude",
      "date_naissance",
      new Date("December 17, 1995 03:24:00"),
      "Parisien"
    ),
  ];

  getAll = (): UserModel[] => {
    return this.users;
  };

  deleteById = (id: number): void => {
    this.users = this.users.filter((item) => item.id != id);
  };

  createUser = (item: UserModel): void => {
    this.users.push(item);
  };

  update = (item: UserModel, index: number): void => {
    this.users[index] = item;
  };
  
  /** 
  patchUser = (index: number): UserModel => {
    this.users[index].patch();
    return this.users[index];
  };
   */
}
