import conf from "../config/conf";
import { Client, Account, ID } from "appwrite";
 
export class Auth  {
    client;
    account;
   

    constructor (){
        this.client = new Client()
        .setEndpoint(conf.URL) // Your API Endpoint
        .setProject(conf.PRODUCT_ID); 
      this.account = new Account(this.client);
     
    }
    async createAccount({name,email,password}){
        try {
        let userAccount= await  this.account.create(ID.unique(),email,password,name)

         if (userAccount) {
            // call another method
            return this.logIn({email, password});
        } else {
           return  userAccount;
        }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async logIn({email,password}){
        try {
          let user =  await this.account.createEmailSession(email,password)
          return user

           
        } catch (error) {
            console.log(error)
        }
    }
    async getCurrentUser(){
        try {
           let a =  await this.account.get()
           console.log('a ',a);
           return a;
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

       
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