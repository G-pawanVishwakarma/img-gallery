import type { ImageResults } from "@/models/Images";
import { ImageSchemaWithPhotos } from "@/models/Images";
import env from "./env";


export default async function FetchImages(url: string): Promise<ImageResults | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: env.IMAGE_API_KEY
      }
    })

    if (!res.ok) throw new Error("Fetch Images error!\n")

    const imageResults: ImageResults = await res.json()

    // console.log(imageResults)

    // Parse data with zod Schema

    const parsedData = ImageSchemaWithPhotos.parse(imageResults)

    if (parsedData.total_results === 0) return undefined
    return parsedData
  } catch (e) {
    // will show in terminal console
    if (e instanceof Error) console.log(e.stack)
  }
}