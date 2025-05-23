"use client"

import { currActive, landfillId, role, stsId, username } from "@/data/cookieName";
import { landfillManager, stsManager } from "@/data/role";
import { getCookie } from "@/lib/cookieFunction";
import AppLogo from "../auth/login/AppLogo";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/dashboard-components/sidebar/Sidebar";
import MainSection from "@/components/mainContent/MainSection";
import { NavContext } from "@/hooks/contexts/useNavCtx";
const Page = () => {
    const [curRole, setCurrentRole] = useState("");
    const [currentActive, setCurrentActive] = useState("");
    const [curStsId, setStsId] = useState("");
    const [curLandfillId, setCurrLandFillId] = useState("")
    const [curUserName, setCurUserName] = useState("")
    const router = useRouter();
    useEffect(() => {
        setCurrentRole(getCookie(role));
        setCurrentActive(getCookie(currActive));
        setStsId(getCookie(stsId));
        setCurrLandFillId(getCookie(landfillId))
        setCurUserName(getCookie(username));

    }, [])
    return (
        <div>
            <NavContext.Provider value={{ currentActive, setCurrentActive }}>
                {(curRole === stsManager && curStsId === "") || (curRole === landfillManager && curLandfillId === "") ? (
                    <>
                        <AppLogo />
                        <h1>Welcome {curUserName}</h1>
                        <h1>You are not assigned to any {curRole === stsManager ? "STS" : "Landfill"}</h1>
                        <h1>Contact admin for being assigned to a {curRole === stsManager ? "STS" : "Landfill"}</h1>
                        <button
                            onClick={() => router.push("/auth/login")}
                        >
                            Logout
                        </button>
                    </>
                ) :
                    (
                        <>
                            <Sidebar role={curRole} />
                            <MainSection />
                        </>
                    )

                }
            </NavContext.Provider>
        </div>
    );
}

export default Page;
