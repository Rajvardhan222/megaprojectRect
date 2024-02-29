import conf from "../config/conf";
import { Client, Account, ID } from "appwrite";
 
export class Auth  {

   

    constructor (){
        this.client = new Client()
        .setEndpoint(conf.URL) // Your API Endpoint
        .setProject(conf.PRODUCT_ID); 
      this.account = new Account(this.client);
     
    }
    async createAccount({name,email,password}){
        try {
         return await  this.account.create(ID.unique(),email,password,name)
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async logIn({email,password}){
        try {
          let user =  await this.account.createEmailSession(email,password)

            if(user){
                //create functionality 
            }
            else{
                console.log(user);
            }
        } catch (error) {
            console.log(error)
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log(error);
        }

        return null
    }

    async logOut (){
        try {
            await this.account.deleteSession('current')
        } catch (error) {
            console.log(error);
        }
    }
}
let authservice = new Auth();
export default  authservice