import { NextFunction, Request, Response } from "express";
import { createUserToDb, getUserByIdFromDB, getUsersFromDb } from "./user.service";

//  Route -> Controller -> Service
export const createUser=async (req:Request, res: Response, next: NextFunction)=>{
    const data =req.body
    const user = await createUserToDb(data);
    res.status(200).json({
        status : "success",
        data : user,
    });
} 

export const getUsers=async(req:Request, res:Response, next:NextFunction)=>{
 const users = await getUsersFromDb();
 res.status(200).json({
    status: ' success',
    data : users
 })
}

// Patter 
// Route -> controller -> service

// single data get
export const getUserById=async(req:Request,res:Response,next:NextFunction)=>{
  const { id } = req.params
  const user = await getUserByIdFromDB(id)
  res.status(200).json({
  status:'success',
  data: user
  })
}