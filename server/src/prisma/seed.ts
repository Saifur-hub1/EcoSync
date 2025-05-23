import { Prisma } from '@prisma/client';
import { prisma } from '../lib/prisma';
import { RoleName } from '../types/rolesTypes';
import { PERMISSIONS } from '../permissions/permssions';

const hashedP = "$2b$10$gAUoB3TeR/yJBQcaUZ.o6.wHnLCteGHroUtkvXM.jjxpqlpic0yvO"

const roleData: Prisma.RoleCreateInput[] = [
    {
        name: RoleName.LAND_MANAGER,
        description: "Land Manager Role",
    },
    {
        name: RoleName.SYSTEM_ADMIN,
        description: "System Admin Role",
    },
    {
        name: RoleName.STS_MANAGER,
        description: "STS Manager Role",
    },
    {
        name: RoleName.UNASSIGNED,
        description: "Unassigned Role",
    },
    {
        name: RoleName.CONTRACTOR_MANAGER,
        description: "Contractor Manager Role",
    },
    {
        name: RoleName.CONTRACTOR_EMPLOYEE,
        description: "Contractor Employee Role",
    }
]

const permissionData: Prisma.PermissionCreateInput[] = [
    { name: PERMISSIONS.CREATE_USER, description: "Can Create User" },
    { name: PERMISSIONS.LOGIN, description: "Can Login" },
    { name: PERMISSIONS.CHANGE_PASSWORD, description: "Can Change Password" },
    { name: PERMISSIONS.DELETE_USER, description: "Can Delete User" },
    { name: PERMISSIONS.GET_USERS, description: "Can Get Users" },
    { name: PERMISSIONS.CREATE_BILL, description: "Can Create Bill" },
    { name: PERMISSIONS.GET_BILLS, description: "Can Get Bills" },
    { name: PERMISSIONS.UPDATING_USER_ROLE, description: "Can Update User Role" },
    { name: PERMISSIONS.DELETE_BILL, description: "Can Delete Bill" },
    { name: PERMISSIONS.CREATE_LANDFILL, description: "Can Create Landfill" },
    { name: PERMISSIONS.DELETE_LANDFILL, description: "Can Delete Landfill" },
    { name: PERMISSIONS.UPDATE_LANDFILL, description: "Can Update Landfill" },
    { name: PERMISSIONS.CREATE_STS, description: "Can Create Sts" },
    { name: PERMISSIONS.DELETE_STS, description: "Can Delete Sts" },
    { name: PERMISSIONS.UPDATE_STS, description: "Can Update Sts" },
    {
        name: PERMISSIONS.CREATE_STS_VEHICLE_ENTRY,
        description: "Can Create Sts Vehicle Entry",
    },
    {
        name: PERMISSIONS.GET_CURRENT_STS_VEHICLE,
        description: "Can Get Current Sts Vehicle",
    },
    {
        name: PERMISSIONS.GET_LEFT_STS_VEHICLE,
        description: "Can Get Left Sts Vehicle",
    },
    {
        name: PERMISSIONS.DELETE_STS_VEHICLE_ENTRY,
        description: "Can Delete Sts Vehicle Entry",
    },
    {
        name: PERMISSIONS.UPDATE_STS_VEHICLE_ENTRY,
        description: "Can Update Sts Vehicle Entry",
    },
    {
        name: PERMISSIONS.CREATE_LANDFILL_VEHICLE_ENTRY,
        description: "Can Create Landfill Vehicle Entry",
    },
    {
        name: PERMISSIONS.DELETE_LANDFILL_VEHICLE_ENTRY,
        description: "Can Delete Landfill Vehicle Entry",
    },
    {
        name: PERMISSIONS.UPDATE_LANDFILL_VEHICLE_ENTRY,
        description: "Can Update Landfill Vehicle Entry",
    },
    { name: PERMISSIONS.RBAC, description: "Can RBAC" },
    { name: PERMISSIONS.CREATE_TRIP, description: "Can Create Trip" },
    { name: PERMISSIONS.COMPLETE_TRIP, description: "Can Complete Trip" },
    { name: PERMISSIONS.CREATE_VEHICLE, description: "Can Create Vehicle" },
    { name: PERMISSIONS.DELETE_VEHICLE, description: "Can Delete Vehicle" },
    { name: PERMISSIONS.EDIT_VEHICLE, description: "Can Edit Vehicle" },
];

const roleAssignmentData = [
    {
        roleName: RoleName.SYSTEM_ADMIN,
        permissions: [
            PERMISSIONS.CREATE_USER,
            PERMISSIONS.LOGIN,
            PERMISSIONS.CHANGE_PASSWORD,
            PERMISSIONS.DELETE_USER,
            PERMISSIONS.GET_USERS,
            PERMISSIONS.CREATE_BILL,
            PERMISSIONS.GET_BILLS,
            PERMISSIONS.UPDATING_USER_ROLE,
            PERMISSIONS.DELETE_BILL,
            PERMISSIONS.CREATE_LANDFILL,
            PERMISSIONS.DELETE_LANDFILL,
            PERMISSIONS.UPDATE_LANDFILL,
            PERMISSIONS.CREATE_STS,
            PERMISSIONS.DELETE_STS,
            PERMISSIONS.UPDATE_STS,
            PERMISSIONS.CREATE_STS_VEHICLE_ENTRY,
            PERMISSIONS.GET_CURRENT_STS_VEHICLE,
            PERMISSIONS.GET_LEFT_STS_VEHICLE,
            PERMISSIONS.DELETE_STS_VEHICLE_ENTRY,
            PERMISSIONS.UPDATE_STS_VEHICLE_ENTRY,
            PERMISSIONS.CREATE_LANDFILL_VEHICLE_ENTRY,
            PERMISSIONS.DELETE_LANDFILL_VEHICLE_ENTRY,
            PERMISSIONS.UPDATE_LANDFILL_VEHICLE_ENTRY,
            PERMISSIONS.RBAC,
            PERMISSIONS.CREATE_TRIP,
            PERMISSIONS.COMPLETE_TRIP,
            PERMISSIONS.CREATE_VEHICLE,
            PERMISSIONS.DELETE_VEHICLE,
            PERMISSIONS.EDIT_VEHICLE,
        ],
    },

    {
        roleName: RoleName.LAND_MANAGER,
        permissions: [
            PERMISSIONS.LOGIN,
            PERMISSIONS.CHANGE_PASSWORD,
            PERMISSIONS.CREATE_BILL,
            PERMISSIONS.GET_BILLS,
            PERMISSIONS.UPDATE_LANDFILL,
            PERMISSIONS.CREATE_LANDFILL_VEHICLE_ENTRY,
            PERMISSIONS.DELETE_LANDFILL_VEHICLE_ENTRY,
        ]
    },
    {
        roleName: RoleName.STS_MANAGER,
        permissions: [
            PERMISSIONS.LOGIN,
            PERMISSIONS.CHANGE_PASSWORD,
            PERMISSIONS.UPDATE_STS,
            PERMISSIONS.CREATE_STS_VEHICLE_ENTRY,
            PERMISSIONS.GET_CURRENT_STS_VEHICLE,
            PERMISSIONS.GET_LEFT_STS_VEHICLE,
            PERMISSIONS.DELETE_STS_VEHICLE_ENTRY,
            PERMISSIONS.UPDATE_STS_VEHICLE_ENTRY,
            PERMISSIONS.CREATE_TRIP
        ]
    },
    {
        roleName: RoleName.UNASSIGNED,
        permissions: [PERMISSIONS.CHANGE_PASSWORD]
    }
]

const userData: Prisma.UserCreateInput[] = [
    {
        username: "Admin",
        email: "admin@gmail.com",
        hashedPassword: hashedP,
        role: {
            connect: {
                name: RoleName.SYSTEM_ADMIN,
            }
        }
    },
    {
        username: "Saifur",
        email: "sr018695@gmail.com",
        hashedPassword: hashedP,
        role: {
            connect: {
                name: RoleName.CONTRACTOR_MANAGER
            }
        }
    },
    {
        username: "Tarek",
        email: "tarek@gmail.com",
        hashedPassword: hashedP,
        role: {
            connect: {
                name: RoleName.STS_MANAGER
            }
        }
    }
]

async function main() {
    // Delete all existing data
    // console.log(`Deleting all existing data ...`);
    // await prisma.user.deleteMany();
    // await prisma.role.deleteMany();
    // await prisma.permission.deleteMany();
    // console.log(`Deleted all existing data ...`);


    console.log(`Seeding roles ...`);
    for (const role of roleData) {
        const existingRole = await prisma.role.findUnique({
            where: {
                name: role.name,
            }
        })
        if (existingRole) {
            console.log(`Role ${role.name} already exists, skipping ...`);
            continue;
        }
        const r = await prisma.role.create({
            data: role,
        })
        console.log(`Created role with id: ${r.id}`);
    }

    console.log(`Seeding permissions ...`);
    for (const permission of permissionData) {
        const existingPermission = await prisma.permission.findUnique({
            where: {
                name: permission.name,
            }
        })
        if (existingPermission) {
            console.log(`Permission ${permission.name} already exists, skipping ...`);
            continue;
        }
        const newPermission = await prisma.permission.create({
            data: permission,
        })
        console.log(`Created permission with id: ${newPermission.id}`);
    }

    console.log(`Assigning permissions to roles ...`);
    for (const roleAssignment of roleAssignmentData) {
        for (const permission of roleAssignment.permissions) {
            const existingPermission = await prisma.permission.findUnique({
                where: {
                    name: permission,
                }
            })
            console.log(existingPermission);
            if(!existingPermission) {
                console.log(`Permission ${permission} not found, skipping ...`);
                continue;
            }
            const role = await prisma.role.update({
                where: {
                    name: roleAssignment.roleName,
                },
                data: {
                    permissions: {
                        connect: {
                            name: permission,
                        }
                    }
                },
                include: {
                    permissions: true,
                }
            })
            console.log(role);
        }
    }

    for (const user of userData) {
        const existingUser = await prisma.user.findUnique({
            where: {
                email: user.email,
            }
        })
        if(existingUser) {
            console.log(`User ${user.email} already exists, skipping ...`);
            continue;
        }
        const u = await prisma.user.create({
            data: user,
        })
        console.log(`Created user with id: ${u.id}`);
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })