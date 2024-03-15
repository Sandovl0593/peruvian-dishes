import express, { Application } from "express"
import cors from "cors"
// import { createClient } from "@supabase/supabase-js"

const app: Application = express()
const PORT: number = 8080

app.use(express.json())
app.use(cors())

// const supabase = createClient("URL", "API_KEY")

app.get("/", (_req, res) => {
  console.log("Route /")
  res.send("Hello World")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})