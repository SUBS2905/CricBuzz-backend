import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashPassword = async(password) =>{
    try{
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }catch(err){
        throw err;
    }
}

export const comparePassword = async(password, hashedPassword) =>{
    try{
        const match = await bcrypt.compare(password, hashedPassword);
        return match;
    }catch(err){
        throw err;
    }
}