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
    async createDocument({title,content,featuredImage,slug,status,user_Id}){
        try {
           console.log(title,content,featuredImage,slug,status,user_Id);
          return await this.databases.createDocument(
            conf.DATABASE_ID,
            conf.COLLECTION_ID,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                user_Id
            }
           )
        } catch (error) {
            console.log(error);
        }

    }

    async updateDocument(Id,{title,content,featuredImage,slug,status}){
     await  this.databases.updateDocument(
            conf.DATABASE_ID,
            conf.COLLECTION_ID,
            Id,
            {
                title,
                content,
                featuredImage,
                slug,
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
           return await this.databases.getDocument(
                conf.DATABASE_ID,
                conf.COLLECTION_ID,
                id
            )
        } catch (error) {
            console.log(error);
        }
    }
    async getDocuments(){
        try {
            return await this.databases.listDocuments(
                conf.DATABASE_ID,
                conf.COLLECTION_ID,
                [
                    Query.equal("status","Active")
                ]
            )
        } catch (error) {
            console.log(error);
        }
    }

    //upload Image
    async uploadFile(file){
       try {
        return this.storage.createFile(
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
            this.storage.deleteFile(
                conf.BUCKET_ID,
                id
            )
            return true
        } catch (error) {
            console.log(error);
        }
        return false
    }
    async getFilePreview(id){
        try {
            return this.storage.getFilePreview(
                conf.BUCKET_ID,
                id
            )
        } catch (error) {
            console.log(error);
        }
    }

}
let service = new Service();
export default service 