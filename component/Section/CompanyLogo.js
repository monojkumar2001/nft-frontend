import React from 'react';
import Image from 'next/image';
const CompanyLogo = () => {
  return (
    <>
{
    imgData.map((item, i)=>{
        return(
            <Image
            width='250'
            height='68'        
              src={item.img}
              alt="nft constructer"
              key={i}
            />
        )
    })
}
    </>
  )
}

export default CompanyLogo;

const imgData=[
    {
        id:1,
        img:'/assets/img/inner/company/1.svg'
    },
    {
        id:2,
        img:'/assets/img/inner/company/2.svg'
    },
    {
        id:3,
        img:'/assets/img/inner/company/3.svg'
    },
    {
        id:4,
        img:'/assets/img/inner/company/4.svg'
    },
    {
        id:5,
        img:'/assets/img/inner/company/5.svg'
    },
    {
        id:6,
        img:'/assets/img/inner/company/6.svg'
    },
    {
        id:7,
        img:'/assets/img/inner/company/3.svg'
    },
    {
        id:8,
        img:'/assets/img/inner/company/1.svg'
    },
    {
        id:9,
        img:'/assets/img/inner/company/6.svg'
    },

    {
        id:10,
        img:'/assets/img/inner/company/3.svg'
    },
    {
        id:11,
        img:'/assets/img/inner/company/4.svg'
    }
]