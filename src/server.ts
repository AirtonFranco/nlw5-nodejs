import express from "express";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

/**
 * GET = Buscar
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alteração Especifica
 */

app.listen(3333, () => console.log("Server is running on port 3333"));