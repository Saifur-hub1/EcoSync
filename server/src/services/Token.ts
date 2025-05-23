import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


const generateToken = (info: any, expiry: any) => {
    const secret: Secret | undefined = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT secret is not defined');
    }

    return jwt.sign(info, secret, { expiresIn: expiry });
}

export {
    generateToken,
}