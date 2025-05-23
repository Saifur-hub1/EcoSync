import { cn } from "@/lib/utils"
import * as React from "react"

const Button = React.forwardRef<
    HTMLButtonElement,
    React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
    <button
        ref={ref}
        className={cn("rounded-xl p-2 hover:cursor-pointer", className)}
        {...props}
    />
))

Button.displayName = "Button"

export {
    Button
}