import type { NextApiRequest, NextApiResponse } from "next";
import { serve } from "inngest/next";
import helloWorld from "../../inngest/helloWorld";
import secondFn from "../../inngest/secondFn";

export default async function middleware(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Environment variable: ", process.env["INNGEST_SIGNING_KEY"]);
  const stagingRegisterUrl = "https://api-dev.inngest.com/fn/register";
  console.log("Testing setting register URL to staging: ", stagingRegisterUrl);
  const handler = serve("My Next.js App", [helloWorld, secondFn], {
    inngestRegisterUrl: stagingRegisterUrl,
  });
  return await handler(req, res);
}
