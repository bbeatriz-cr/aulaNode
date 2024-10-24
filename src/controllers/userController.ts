import {Request, Response} from 'express'

export const idade = ((req:Request,res:Response)=>{
    res.render('pages/idade')
})
//POST processa as informações
export const idadePost = ((req:Request,res:Response) =>{
    let mostrarIdade: boolean = false
    let idade: number = 0
    if(req.body.anoNascimento) {
        let anoNascimento: number = parseInt(req.body.anoNascimento as string)
        let anoAtual: number = new Date().getFullYear() //2024
        idade = anoAtual - anoNascimento
        mostrarIdade = true
    }
    res.render('pages/idade',{
        idade,
        mostrarIdade
    })
})

export const forms2 =((req:Request,res:Response)=>{
    res.render('pages/forms2')
})

export const forms2Post =((req:Request,res:Response) =>{
    let email: string = req.body.email as string
    let senha: string = req.body.senha as string

    res.render('pages/forms2',{
        email,
        senha
    })
})