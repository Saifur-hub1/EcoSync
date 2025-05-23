"use client";
import React, { useState } from "react";
import Input from "@/components/ui/Input";
import { useLogin } from "@/hooks/auth/useLogin";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const LoginForm = () => {
    const { loginData, setLoginData, login} = useLogin();
    const router = useRouter();
    const handleFormatSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        const success = await login();
        if (success) {
            // Redirect to dashboard or home page
            router.push("/dashboard");
        }
    };

    return (
        <>
            <form onSubmit={handleFormatSubmit} className="grid gap-4 ">
                <div className="grid gap-2">
                    <label htmlFor="email" className="text-black">Email</label>
                    <Input 
                        type="email" 
                        placeholder="example@gmail.com" 
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        required
                    />
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <label htmlFor="password" className="text-black">Password</label>
                        <a className="ml-auto underline text-black" href="/auth/reset-password/inititate">
                            Forget your password?
                        </a>
                    </div>
                    <Input 
                        type="password" 
                        placeholder="xxxxxxxx" 
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        required
                    />
                </div>
                <Button className="bg-black text-white p-2 rounded">Login</Button>
            </form>
        </>
    );
}

export default LoginForm;
