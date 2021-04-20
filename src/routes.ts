import { Router } from "express";
import { settings } from "node:cluster";
import { SettingsController } from "./controllers/SettingsController";

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

const routes = Router();

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create)

export { routes };