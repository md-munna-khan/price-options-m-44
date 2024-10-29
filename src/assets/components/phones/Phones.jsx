import axios from "axios";
import { useEffect, useState } from "react";


const Phones = () => {
    const [phones,setPhones]=useState([])
    useEffect(()=>{
        // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        // .then(res=>res.json())
        // .then(data=>setPhones(data.data))
axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
.then(data=>{
    const phoneData = data.data.data;
    const phoneWithFakeData = phoneData.map(phone =>{
        const obj ={
            name :phone. phone_name,
            price: parseInt(phone.slug.split('-')[1])
        }
        return obj
    })
    console.log(phoneWithFakeData)
    setPhones(phoneWithFakeData)
})

    },[])
    return (
        <div>
            <h2> phones:{phones.length}</h2>
        </div>
    );
};

export default Phones;