import { useEffect, useState } from "react";
import { db } from "../Services/firebase";
import { collection, query, where,getDocs } from "firebase/firestore";

export const useGetCategoty = (category) => {

    const [estado, setEstado] = useState({
        products:[],
        loading:true
    })
    useEffect(() => {
    getCategory()        
    }, [category]);
const getCategory = async ()=>{
    setEstado({
        products:[],
        loading:true
    })

    const productsRef = collection(db, "productos");
    const consult = query(productsRef, where("categoria", "==", category));
        
    const respuesta = await getDocs(consult);
        
    const resultado = respuesta.docs.map(item => {
        return ({
            ...item.data(),
            id:item.id
        })
    })        
        setEstado({
            products:resultado,
            loading:false
        })
    }
    const data = {...estado}
return data
}
