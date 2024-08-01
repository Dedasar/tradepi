import conexao from "../database/conexao.js";

class JogosController {
    index(req, res) {
        const sql = "SELECT * FROM jogos;"
        conexao.query(sql, (erro, resultado) => {
            if(erro) {
                res.status(404).json({ 'erro': erro})
            } else {
                res.status(200).json(resultado)
            }
        })
    }

    show(req, res) {
        const id = req.params.id
        const sql = "SELECT * FROM jogos WHERE id=?;"
        conexao.query(sql, id, (erro, resultado) => {
            const linha = resultado[0]
            if(erro) {
                res.status(404).json({ 'erro': erro})
            } else {
                res.status(200).json(linha)
            }
        })
    }

    store(req, res) {
        const selecao = req.body
        const sql = "INSERT INTO jogos SET ?"
        conexao.query(sql, selecao, (erro, resultado) => {
            if(erro) {
                res.status(404).json({ 'erro': erro})
            } else {
                res.status(201).json(resultado)
            }
        })
    }

    update(req, res) {
        const id = req.params.id
        const selecao = req.body
        const sql = "UPDATE jogos SET ? WHERE id=?;"
        conexao.query(sql, [selecao, id], (erro, resultado) => {
            if(erro) {
                res.status(404).json({ 'erro': erro})
            } else {
                res.status(200).json(resultado)
            }
        })
    }

    delete(req, res) {
        const id = req.params.id
        const sql = "DELETE FROM jogos WHERE id=?;"
        conexao.query(sql, id, (erro, resultado) => {
            if(erro) {
                res.status(404).json({ 'erro': erro})
            } else {
                res.status(200).json(resultado)
            }
        })
    }


}

export default new JogosController()