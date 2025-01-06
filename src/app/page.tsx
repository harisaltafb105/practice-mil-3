import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Hero from "./Components/Hero";
import React from "react";

export default async function Home () {
  
  const query = `*[_type == 'blog'] | order(_updatedAt asc) {Title, Paragraph, image, "slug":slug.current}`
 
  const data:Blog[] = await client.fetch(query)
  console.log(data)
  return (<div>
    
    {data.map((data:Blog)=>(
      <Hero data={data} key={data.slug}/>
   
   ))}



  </div>)
}    