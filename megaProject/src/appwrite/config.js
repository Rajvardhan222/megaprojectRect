import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../config/conf";
export class Service {
    client;
    databases;
    storage;
    
    constructor(){
        this.client = new Client()
        .setEndpoint(conf.URL) // Your API Endpoint
        .setProject(conf.PRODUCT_ID); 
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }
    async createDocument({title,content,featuredImage,status,user_Id,url,date,time}){
        try {
          
          return await this.databases.createDocument(
            conf.DATABASE_ID,
            conf.COLLECTION_ID,
            url,
            {
                title,
                content,
                featuredImage,
                status,
                user_Id,
                date,
                time
            }
           )
        } catch (error) {
            console.log(error);
        }

    }

    async updateDocument(Id,{title,content,featuredImage,status}){
    return  await  this.databases.updateDocument(
            conf.DATABASE_ID,
            conf.COLLECTION_ID,
            Id,
            {
                title,
                content,
                featuredImage,
                
                status
            }
       )
    }
    async deleteDocument(id) {
        try {
            await this.databases.deleteDocument(
                conf.DATABASE_ID,
                conf.COLLECTION_ID,
                id
            )
            return true
        } catch (error) {
            console.log(error);
            
        }
        return false
    }
    async getDocument(id) {
        try {
          let document =  await this.databases.getDocument(
                conf.DATABASE_ID,
                conf.COLLECTION_ID,
                id
            )
            console.log('get ',document);
            return document;
        } catch (error) {
            console.log(error);
        }
    }
    async getDocuments(query = [ Query.equal("status","active"),
    Query.orderAsc("date")]){
        try {
            return await this.databases.listDocuments(
                conf.DATABASE_ID,
                conf.COLLECTION_ID,
               query
            )
        } catch (error) {
            console.log(error);
        }
    }

    //upload Image
    async uploadFile(file){
       try {
        return await this.storage.createFile(
            conf.BUCKET_ID,
            ID.unique(),
            file
        )
       } catch (error) {
        console.log("Appwrite serive :: uploadFile :: error", error);
       }
    }

    async deleteFile(id){
        try {
            console.log("delete file id ",id);
           await this.storage.deleteFile(
                conf.BUCKET_ID,
                id
            )
            return true
        } catch (error) {
            console.log(error);
        }
        return false
    }
     getFilePreview(id){
        try {
          return this.storage.getFilePreview(
                conf.BUCKET_ID,
                id
            )
        
        } catch (error) {
            console.log(error);
        }
    }
   async getFile(id){
        try {
            return await  this.storage.getFile(
                  conf.BUCKET_ID,
                  id
              ).then(file => file)
          
          } catch (error) {
              console.log(error);
          }
    }

}
let service = new Service();
export default service 