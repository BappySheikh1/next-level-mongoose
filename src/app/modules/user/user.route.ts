import  express  from "express";
import { createUser, getUserById, getUsers } from "./user.controller";
const router = express.Router();
 
//  Route -> Controller -> Service

router.get('/', getUsers)
router.post('/create-user', createUser)

router
.get('/:id', getUserById)

export default router;