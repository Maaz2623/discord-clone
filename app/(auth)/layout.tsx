import React from "react";

export default async function AuthLayout({children}:{children: React.ReactNode}) {
    return(
        <div className="h-screen flex items-center justify-center">
            {children}
        </div>
    )
}