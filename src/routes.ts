import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();


routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);
export { routes };


//Tipos de Parametros
/**
 * Routes Params => parametros de rotas
 * ex: http://localhost:333/settings/1
 * 
 * Query Params: Filtros e Buscas
 * ex: http://localhost:333/settings/1?search=algumacoisa
 * 
 * Body Params => Parametros de Corpo
 * ex: {
 *  vem dentro de um objeto
 * }
 */