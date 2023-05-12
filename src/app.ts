import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
const app = express()


// Middleware using
app.use(cors())

app.get('/', (req:Request, res:Response,next:NextFunction) => {
    res.send('Hello World!')
    next(); 
})
  
export default app;