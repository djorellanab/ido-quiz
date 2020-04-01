/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import HttpException from '../common/http-exception';
import * as UserService from "../services/user.service";
import {check, validationResult} from "express-validator";

/**
 * Router Definition
 */
export const UserRouter = express.Router();

/**
 * Controller Definitions
 */
UserRouter.post('/login',[
        check('username').isString().notEmpty()
    ],
    async(req: Request, res: Response) =>{
    const errors= validationResult(req);
    if(!errors.isEmpty())
        return res.status(422).send(errors.array());
    try{
        const token:string = await UserService.login(req.body);
        res.status(200).send(token);
    } catch(e){
        res.status(500).send(e.message);
    }
});

UserRouter.get('/verify', async(req: Request, res: Response) =>{
    let token:string = req.get('Authorization') as string;
    try {
        const verify:string = await UserService.verify(token);
        res.status(200).send(verify); 
    } catch (error) {
        if (error instanceof HttpException)
            res.status(error.statusCode).send(error.message);  
        else
            res.status(500).send("error del sistema");  
    }
});