// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref,uploadBytes,getDownloadURL } from "firebase/storage"
import {v4} from 'uuid'


const firebaseConfig = {
    apiKey: "AIzaSyDP9ApMrne5m0QGrPctgg0uGW4coCrD3Ss",
    authDomain: "opticapatagonia-5fcad.firebaseapp.com",
    projectId: "opticapatagonia-5fcad",
    storageBucket: "opticapatagonia-5fcad.appspot.com",
    messagingSenderId: "926733076329",
    appId: "1:926733076329:web:74ce79ff40d295e74b1ff8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile(file) {
    const storageRef = ref(storage,v4())
    await uploadBytes(storageRef,file)
    const url=await getDownloadURL(storageRef)
    return url
}