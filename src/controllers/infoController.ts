import {Request, Response} from 'express'

export const nome = ((req:Request,res:Response) =>{
    /*iremos fazer uma requisição ao usuário (usando req)
    o "as string" é para ajudar o typescript a especificar
    o tipo desse dado que vou receber, e o query significa que
    é um dado que será enviado pela url */
    let nome: string = req.query.nome as string
    res.render('pages/nome',{
        nome
    })
})

export const forms = ((req:Request,res:Response) =>{
    let forms: string = req.query.nome as string
    let nome: string = req.query.nome as string
    let idade: number = parseInt(req.query.idade as string)
    let telefone: number = parseInt(req.query.telefone as string)
    let endereco: string = req.query.endereco as string
    res.render('pages/forms',{
        forms,
        nome,
        idade,
        telefone,
        endereco

    })
})
