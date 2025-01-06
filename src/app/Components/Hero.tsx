// import { urlFor } from '@/sanity/lib/image';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';


// const Hero = ({data}:{data:Blog}) => {
//   return (
//     <div >
//         <section className="text-gray-600 body-font">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="flex flex-wrap -m-4">
//       <div className="p-4 md:w-1/3">
//         <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
//           <Image
//             className="lg:h-48 md:h-36 w-full object-cover object-center"
//             src= {urlFor(data.image).url()}
//             alt = "blog"
//             width={200}
//             height={200}
//           />
//           <div className="p-6">
           
//             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//               {data.Title}
//             </h1>
            
//             <p className="leading-relaxed mb-3">
//               {data.Paragraph}
//             </p>
//             <div className="flex items-center flex-wrap ">
//               <Link href={`/blog/${data.slug}`}  className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
//                 Learn More
                
//               </Link>
              
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//       </div>
     
// </section>


//     </div>
//   )
// }

// export default Hero
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = ({ data }: { data: Blog }) => {
  return (
    <div className="bg-gray-100">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                {/* Image Section */}
                <div className="relative h-48">
                  <Image
                    className="object-cover object-center"
                    src={urlFor(data.image).url()}
                    alt="Blog Image"
                    fill
                  />
                </div>
                {/* Content Section */}
                <div className="p-6">
                  <h1 className="text-lg font-semibold text-gray-900 mb-2">
                    {data.Title}
                  </h1>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {data.Paragraph}
                  </p>
                  <div className="flex items-center">
                    <Link
                      href={`/blog/${data.slug}`}
                      className="text-indigo-500 font-medium hover:underline"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
