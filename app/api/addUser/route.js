import prisma from "@/lib/prisma";
async function addUser({data}){
    const res = data.json();
    const {name,email} = res

    try{
        await prisma.user.create({
            name,
            email,
        })
    }
    catch (e) {
        console.log("Some error occured while writing into the database,{e}")
    }
}