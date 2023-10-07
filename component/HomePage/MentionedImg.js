import React from 'react';
import Image from 'next/image';
const MentionedImg = () => {
  return (
    <>
{
    imgData.map((item, i)=>{
        return(
            <Image
            width='250'
            height='250'        
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

export default MentionedImg;

const imgData=[
    {
        id:1,
        img:'/assets/img/inner/logo/1.jpg'
    },
    {
        id:2,
        img:'/assets/img/inner/logo/2.jpg'
    },
    {
        id:3,
        img:'/assets/img/inner/logo/3.jpg'
    },
    {
        id:4,
        img:'/assets/img/inner/logo/4.jpg'
    },
    {
        id:5,
        img:'/assets/img/inner/logo/5.jpg'
    },
    {
        id:6,
        img:'/assets/img/inner/logo/6.jpg'
    },
    {
        id:7,
        img:'/assets/img/inner/logo/7.jpg'
    },
    {
        id:8,
        img:'/assets/img/inner/logo/8.jpg'
    },
    {
        id:9,
        img:'/assets/img/inner/logo/9.jpg'
    },
    {
        id:10,
        img:'/assets/img/inner/logo/10.jpg'
    },
    {
        id:11,
        img:'/assets/img/inner/logo/11.jpg'
    },
]