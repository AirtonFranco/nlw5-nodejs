import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

import "./database";
import { routes } from "./routes";

const app = express();


app.use(express.static(path.join(__dirname, "..", "public"))); //acessando a pasta public
app.set("views", path.join(__dirname, "..", "public")); //informando que minhas views estarão nesse caminho
app.engine("html", require("ejs").renderFile); //informando que será em html
app.set("view engine", "html"),

app.get("/pages/client", (request, response) => {
    return response.render("html/client.html")
});

const http = createServer(app); //criando o protocolo http
const io = new Server(http); // criando o protocolo de wb

io.on("connection", (socket: Socket) => {
    //console.log("Se conectou", socket.id)
})

app.use(express.json());

app.use(routes);

export { http, io };