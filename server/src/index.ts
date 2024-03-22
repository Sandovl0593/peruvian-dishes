import express, { Application } from "express"
import cors from "cors"
import { createClient } from "@supabase/supabase-js"
import { Database } from "types/supabase.js"

const app: Application = express()
const PORT: number = 8080

app.use(express.json())
app.use(cors())

const supabase = createClient<Database>(process.env.PROJECT_ID as string, process.env.API_KEY as string)

app.get("/", (_req, res) => {
  console.log("Route /")
  res.send("Hello World")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

