/* eslint-disable react/jsx-key */
import FetchImages from "@/lib/FetchImages";
import type { ImageResults } from "@/models/Images";
import React from 'react'
import ImgContainer from "./ImgContainer";


export default async function Gallery() {

  const url = 'https://api.pexels.com/v1/curated';

  const images: ImageResults | undefined = await FetchImages(url)

  if (!images) return <h2 className="m-4 text-2xl font-bold">No Images Found </h2>
  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">

      {images.photos.map(photo => (
        <ImgContainer photo={photo} />
      ))}

    </section>
  )
}
