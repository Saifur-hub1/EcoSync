import {adminLog, contractorLog} from "../services/logdata"
import { prisma } from "../lib/prisma";
import errorWrapper from "../middleware/errorWrapper";
import {Request, Response} from 'express';
import CustomError from "../services/CustomError";
import bcrypt from "bcrypt";
import { getPermittedRoleNames, PERMISSIONS } from "../permissions/permssions";
import { RoleName } from "../types/rolesTypes";
import { generateToken } from "../services/Token";

const login = errorWrapper(async (req: Request, res: Response)=> {
    const {email, password} = req.body;
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
        include: {
            landfill: true,
            Contractor: true,
            sts: true,
        }
    });

    if(!user){
        throw new CustomError("This email is not registered", 401);
    }
    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);
    if(!isPasswordValid){
        throw new CustomError("Invalid password", 401); // 401 Unauthorized
    }
    
    const role = await getPermittedRoleNames(PERMISSIONS.LOGIN);
    if(!role){
        throw new CustomError("You don't have permission to login", 403); // 403 Forbidden      
    }
    
    adminLog(
        `Login`,
        `User ${user.username}, ${user.roleName} logged in`,
    )
    if(user.roleName === RoleName.CONTRACTOR_EMPLOYEE){
        contractorLog(
            `Login`,
            `User ${user.username}, ${user.roleName} logged in`,
        )
    }

    const token = generateToken({
        id: user.id,
        role: user.roleName
    },
    "1h"
    );
    res.status(200).json({user, token}); // 200 OK
    
}, {statusCode: 500, message: `Login failed`}
)

export {
    login,
}