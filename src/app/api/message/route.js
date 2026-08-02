import { connect } from "@/lib/dbconnect";
const messageCollection = connect("messageCollection")
export async function POST(request) {
    const bodyData = await request.json()
    const result = await messageCollection.insertOne(bodyData)
    return Response.json(result)
}