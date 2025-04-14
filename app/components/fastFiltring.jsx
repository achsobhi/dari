import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { useState,useEffect } from 'react'

const FastFiltring = () => {
    const [categories,setCategories]=useState()
    useEffect(()=>{
        axios
        .get("http://localhost:3000/api/annonce")
        .then((res) => {
          const {categories}=res.data
        setCategories(categories);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
    },[])

  return (
    
    <div className=' w-full flex justify-center gap-3  items-center '>

       {categories?.map((cat)=>{
        return(
          <Link href={'/'} style={{
            border:"1px solid",
            borderRadius:"10px"
            }} className='flex gap-3 items-center px-5 py-1 '>
                {cat.type_appartement} <img src={`${cat.type_appartement.toLowerCase()}.png`} alt="" width="30px" />

        </Link>
        )
       })}
       
      
    </div>
  )
}

export default FastFiltring
