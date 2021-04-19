import express, { response } from "express";

const app = express()

/**
 * GET = Buscar
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alteração Especifica
 */

app.get("/", (req, res) => {
    return res.send("OLÁ NLW5")
})

//cria uma rota em formato json
app.get("/json", (req, res) => {
    return res.json("OLÁ NLW5")
})

app.post("/", (req, res) => {
    return res.json({message: "User salvo com sucesso!!!"})
})

app.listen(3333, () => console.log("Server is running on port 3333"))