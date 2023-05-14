import { IUser } from "./user.interface";
import User from "./user.model";

//  Route -> Controller -> Service

export const createUserToDb=async(payload:IUser):Promise<IUser>=>{
    const user = new User(payload) // User -> class, user -> instance 
    await user.save() 

    console.log(user.fullName()); // custom instance method
    return user;
}


export const getUsersFromDb=async():Promise<IUser[]>=>{
   const users = await User.find({})
   return users
}

// Single data find
export const getUserByIdFromDB=async(payload:string):Promise<IUser | null>=>{
  const user = await User.findOne({id : payload},{name:1,contract: 1})
  return user
} 


// export const getAdminUserFromDb=async(payload:string):Promise<IUser | null>=>{
    
//     const user1 =new User() // static
//     return 
// }