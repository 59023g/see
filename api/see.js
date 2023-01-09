import {
  createClient
} from "@supabase/supabase-js"


export default async function handler(req, res) {
  if (!checkOrigin(req.headers.origin)) {
    return res.status(404).send("success")
  }

  const {
    SUPABASE_TABLE_NAME,
    SUPABASE_URL,
    SUPABASE_ANON
  } = process.env

  const database = createClient(
    SUPABASE_URL,
    SUPABASE_ANON
  )

  const parsedBody = JSON.parse(req.body)

  parsedBody.meta = {
    ip: req.headers['x-real-ip'],
    city: req.headers['x-vercel-ip-city'],
    country: req.headers['x-vercel-ip-country'],
    userAgent: req.headers['user-agent'],
  }

  const {
    error,
    data
  } = await database
    .from(SUPABASE_TABLE_NAME)
    .insert({
      data: parsedBody
    }, {
      returning: 'minimal'
    })

  return res.status(200).send("We are benevolent.")
}

function checkOrigin(origin) {
  if (origin === "https://timesteader.com" ||
    origin === "https://time.claims" ||
    process.env.VERCEL_ENV === "development"
  ) {
    return true
  }
}