/**
 * Data Model Interfaces
 */
import { IUser } from "../interfaces/user.interface";
import * as jwt from "jsonwebtoken";
import HttpException from '../common/http-exception';


/**
 * Service Methods
 */
export const login = async(username:IUser): Promise<string> =>{
    return jwt.sign({username},process.env.SEED as string);
}

export const verify = async(token:string):  Promise<string> =>{
    let ver:string = "Verificado";
    try{jwt.verify(token,process.env.SEED as string)}
    catch(er){throw new HttpException(401,"token no valido");}
    return ver;
}