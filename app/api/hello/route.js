import dbConnect from "../../../utils/dbConnect";

export async function GET(request) {
  await dbConnect();
  return new Response("Hello, Next.js!");
}
