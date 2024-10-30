import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  IMAGE_API_KEY: str(),
})

export default env;