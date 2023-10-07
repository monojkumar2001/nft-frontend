import { getServerSideSitemap } from "next-sitemap";
import {GetServerSideProps} from 'next';
import axios from "axios";

export const getServerSideProps = async (ctx) => {
  // const response = await axios.get("https://api.nftconstructer.com/api/blog");

  // const data = await response.data

  // const fields = data.map((item) => ({
  //   loc: `https://api.nftconstructer.com/api/blog-details/${item.slug}`,
  //   lastmod: new Date().toISOString(),
  // }));

  // console.log(fields);

  const joney = [
		{
			loc: `https://example.com`, // Absolute url
			lastmod: new Date().toISOString(),
			// changefreq
			// priority
		},
		{
			loc: `https://example.com/blog/[id]`, // dynamic url
			lastmod: new Date().toISOString(),
			// changefreq
			// priority
		},
		{
			loc: `https://example.com/category/[id]`, // dynamic url
			lastmod: new Date().toISOString(),
			// changefreq
			// priority
		},
	];

  const fields = [...joney]



  return getServerSideSitemap(ctx, fields)


  // return {
  //   props: {
  //     blogs : data
  //   }
  // }

  // const fields = response.data?.map((item) => ({
  //   loc: `https://api.nftconstructer.com/api/blog-details/${item.slug}`,
  //   lastmod: new Date().toISOString(),
  // }));
  // return getServerSideSitemap(ctx,fields);
};

export default function Site() {}

// import React from 'react'

// const joney = ({blogs}) => {
//   return (
//     <div>
//       {blogs.map(res => {

//         return (
//           <div>
//         <h1>{res.title}</h1>
//         <p>{res.description}</p>
//         </div>
//         )
        
//       })}
//     </div>
//   )
// }

// export default joney