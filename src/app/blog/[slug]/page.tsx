// import React from "react";
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import { PortableText } from "next-sanity";
// import Link from "next/link";
// const page = async ({params:{slug}}:{params:{slug:string}})=>{

// const query=`*[_type == 'blog' && slug.current == "${slug}"]{Title, Paragraph,
//  image, block }[0]`

// const data = await client.fetch(query)
// console.log(data)

// return(
//     <div>
// <h1>{data.Title}</h1>
// <Image 
// src={urlFor(data.image).url()}
// width={500}
// height={500}
// alt="Image"
// />
// <p>
//     {data.Paragraph}
// </p>
// <section>
//     <PortableText value={data.block}/>
// </section>
    
    
//     <Link href="/"><button>Back</button></Link>
    
//     </div>
// )


// }
// export default page;
import React from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Link from "next/link";

const page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const query = `*[_type == 'blog' && slug.current == "${slug}"]{
    Title, Paragraph, image, block
  }[0]`;

  const data = await client.fetch(query);
  console.log(data);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-5 py-10">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Blog Image */}
          <div className="relative h-64">
            <Image
              src={urlFor(data.image).url()}
              fill
              className="object-cover"
              alt={data.Title}
            />
          </div>
          {/* Blog Content */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {data.Title}
            </h1>
            <p className="text-gray-600 mb-6">{data.Paragraph}</p>
            <section className="prose lg:prose-xl">
              <PortableText value={data.block} />
            </section>
          </div>
          {/* Back Button */}
          <div className="p-8">
            <Link href="/">
              <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
