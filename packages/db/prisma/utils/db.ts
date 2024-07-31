import { PrismaClient , AuthType , OnRampStatus} from '@prisma/client';
import bcrypt  from 'bcrypt';

const insertUser = async(client:PrismaClient , name:string , email:string , number:string , password:string) : Promise<number | null> =>{
    const user = await client.user.create({
        data: {
            name,
            email,
            number,
            password: await bcrypt.hash(password, 10),
        }
    })

    if(user && user.id){
        console.log("user cerated with Id: %s\n", user.id);       
    }
    return user.id
}

const insertMerchant = async(client:PrismaClient , name:string , email:string , auth_type:AuthType): Promise<number | null> =>{
    const merchant = await client.merchant.create({
        data: {
            name,
            email,
            auth_type
        }
    })

    if(merchant && merchant.id){
        console.log("merchant cerated with Id: %s\n", merchant.id);
    }

    return merchant.id
}

const addBalance = async(client:PrismaClient , userId:number , amount:number , locked:number) : Promise<number | null> =>{
    const balance = await client.balance.create({
        data: {
            amount,
            locked,
            userId
        }
    })
    if(balance && balance.id){
        console.log("balance cerated with Id: %s\n", balance.id);
    }

    return balance.id
}


const addOnRampTransaction = async(client:PrismaClient , userId:number , startTime:Date , status:OnRampStatus , amount:number , token:string , provider:string) : Promise<number | null> =>{
    const onRampTransaction = await client.onRampTransaction.create({
        data: {
            userId,
            startTime,
            status,
            amount,
            token,
            provider
        }
    })

    if(onRampTransaction && onRampTransaction.id){
        console.log("onRampTransaction cerated with Id: %s\n", onRampTransaction.id);
    }   

    return onRampTransaction.id
}

export {insertUser , insertMerchant , addBalance , addOnRampTransaction}