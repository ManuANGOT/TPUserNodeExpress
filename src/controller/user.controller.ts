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
    const data = await this.service.getAll();
    res.send(data);
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const data = await this.service.getById(+id);
    res.send(data);
  };
/**
  Deleting a record from the database. 
  deleteById = (req: Request, res: Response): void => {
    const id = req.params.id;
    this.service
      .deleteById(+id)
      .then((data) => {
        res.sendStatus(200);
      })
      .catch((err) => res.send("suppression impossible"));
  };

  //Creating a new user. 
  create = async (req: Request, res: Response): Promise<void> => {
    const task = req.body.task;
    const todo = await this.service.createUser(task);
    res.send(user);
  };
 
  // The above code is updating the user.
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

  patch = async(req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    const data = await this.service.patchTodo(+id, body);
    res.send(data);
  };*/
}
