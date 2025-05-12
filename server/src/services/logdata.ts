import {prisma} from '../lib/prisma';

const adminLog = async (logData: string, description: string)=> {
    await prisma.adminLog.create({
        data: {
            type: logData,
            description: description
        }
    })
}

const contractorLog = async (logData: string, description: string) => {
    await prisma.constractorLogs.create({
        data: {
            type: logData,
            description: description
        }
    })
}

export {
    adminLog,
    contractorLog
}