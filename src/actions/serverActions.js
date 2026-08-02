'use server'

import { connect } from "@/lib/dbconnect";

export async function submitContactForm(formData) {
    try {
        const dbMessage = await connect("messageCollection");
        const result = await dbMessage.insertOne(formData);

        return { success: true, result: JSON.parse(JSON.stringify(result)) };
    } catch (error) {
        console.error("Database Error:", error);
        return { success: false, error: error.message };
    }
}