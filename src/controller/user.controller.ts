/* The controller is the class that manages the data coming from the outside and calls the methods of
the service */
import { Request, Response } from "express";
import UserModel from "../model/user.model";
import UserService from "../service/user.service";

// Controller appelle les méthodes du service
export default class UserController {
  service: UserService;

  // Calling service
  constructor(service: UserService) {
    this.service = service;
  }

  /* Defining a function called getAll that takes two parameters, req and res. The req parameter is of
   type Request and the res parameter is of type Response. The function returns nothing (void). */
  getAll = async (req: Request, res: Response): Promise<void> => {
    const data = this.service.getAll();
    res.send(data);
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const data = this.service.getById(+id);
    res.send(data);
  };

  //Deleting a record from the database.
  deleteById = (req: Request, res: Response): void => {
    const id = req.params.id;
    const data = this.service.getById(-id);
    this.service.deleteById(+id);
    res.sendStatus(200);
  };

  //Creating a new user.
  createUser = async (req: Request, res: Response): Promise<void> => {
    const body = req.body;
    const newUser = this.service.createUser(
      5,
      "Lolo",
      "Marcel",
      "27/10/1970",
      new Date("December 17, 1985 03:24:00"),
      "Belge"
    );
    this.service.createUser(
      5,
      "Lolo",
      "Marcel",
      "27/10/1970",
      new Date("December 17, 1985 03:24:00"),
      "Belge"
    );
    res.send(newUser);
  };

  //The above code is updating the user.
  update = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const body = req.body;
    try {
      const data = await this.service.updateUser(body, +id);
      res.send(data);
    } catch (err) {
      res.send(err);
    }
  };

  /** 
  patch = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = this.service.patchUser(+id);
    res.send(data);
  };
  */
}
