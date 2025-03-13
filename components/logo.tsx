import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import React from "react";


const headingFont = localFont({
    src: "../public/fonts/CalSans-SemiBold.woff2"
});

export const Logo = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 transition flex items-center gap-x-2">
                <Image src="/logo.svg" alt="Logo" height={30} width={30} className="ml-2" />
                <p className={cn("text-lg text-neutral-700 pb-1", headingFont.className)}>Taskify</p>
            </div>
        </Link>
    );
};
