import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SidebarFooter = () => {
    return (
        <div className="mt-auto p-4">
            <Card>
                <CardHeader className="p-2 pt-0 md:p-4">
                    <CardTitle>Code Samurai 2024</CardTitle>
                    <CardDescription>
                        I am Saifur from RMSTU CSE
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button className="bg-[#2ba720]">Repo link</Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default SidebarFooter;
