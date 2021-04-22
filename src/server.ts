import { http } from "./http";
import "./websocket/client";

http.listen(3333, () => console.log("Server is running on port 3333"));

/**
 * GET = Buscar
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alteração Especifica
 */