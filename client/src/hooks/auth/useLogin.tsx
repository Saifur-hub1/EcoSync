import { apiRoutes } from "@/data/apiRoutes";
import { contractorId, currActive, jwtToken, landfillId, landfillName, role, stsId, stsName, username } from "@/data/cookieName";
import { setCookie } from "@/lib/cookieFunction";
import { message } from "antd";
import axios from "axios";
import { useState } from "react";

export const useLogin = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    
    async function login(){
        try {
            const response = await axios.post(apiRoutes.auth.login, {
                email: loginData.email,
                password: loginData.password,
            });
            const roleName = response.data.user.roleName;
            // console.log(roleName);
            setCookie(role, roleName, 1);
            setCookie(currActive, roleName === "UNASSIGNED" ? `${roleName}-My Profile`: `${roleName} -Dashboard`, 1 );
            // console.log(currActive);
            setCookie(jwtToken, response.data.token, 1);
            
            setCookie(stsId, response.data.user.stsId, 1);
            setCookie(landfillId, response.data.user.landfillId, 1);
            setCookie(username, response.data.user.username, 1);
            
            setCookie(landfillName, response.data?.user?.landfill?.name, 1);
            setCookie(stsName, response.data?.user?.sts?.name, 1);
            setCookie(contractorId, response.data.user?.contractorId, 1);
            
            message.success(`Login successful! welcome to EcoSync, ${response.data.user.name}`);
            return true;
        } catch (error: any) {
            message.error(error?.response?.data?.message || "Login failed");
            // Handle error
            console.error("Login failed", error);
            return false;
        }
    }
    return {
        loginData,
        setLoginData,
        login,
    };
}