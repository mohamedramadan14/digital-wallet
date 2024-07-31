"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import prisma from "@repo/db/client"
import crypto from 'crypto';

export const createOnrampTransaction = async (provider:string , amount: number) => {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    if (!userId){
        return {
            message: "You are not logged in, please login and try again"
        }
    }
    /**
     * This token ideally come from the banking api and should be unique for each user request to make a payment secure 
     * but as we are using it for demo purpose we are using a random string. but in real world scenario this should be a unique 
     * token for each user request
     */
    const token = crypto.randomBytes(32).toString('hex');
    await prisma.onRampTransaction.create({
        data: {
            userId: Number(userId),
            provider,
            amount: amount * 100,
            status: "Processing",
            startTime: new Date(),
            token
        }
    })

    return {
        message: "on ramp transaction created successfully"
    }
}