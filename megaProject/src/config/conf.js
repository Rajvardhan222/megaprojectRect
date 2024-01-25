const conf = {
    URL: String(import.meta.env.VITE_APPWRITE_URL),
    PRODUCT_ID: String(import.meta.env.VITE_APPWRITE_PRODUCT_ID),
    DATABASE_ID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    COLLECTION_ID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    BUCKET_ID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}
export default conf