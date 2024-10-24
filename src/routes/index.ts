import {Router,Request,Response, RequestHandler} from 'express'
import * as HomeController from '../controllers/homeController'
import * as infoController from '../controllers/infoController'
import * as userController from '../controllers/userController'

const router = Router()

//FAZER A ROTA HOME
router.get('/',HomeController.home)
router.get('/nome',infoController.nome)
router.get('/forms',infoController.forms)
router.get('/idade',userController.idade)
router.post('/idade-resultado',userController.idadePost)
router.get('/forms2',userController.forms2)
router.post('/forms2-senha',userController.forms2Post)


export default router
