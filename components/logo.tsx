import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Logo = (
    {
        className
    }: {
        className?: string;
    }
) => {
    return (
        <Link
            href="/"
            className={cn("flex items-center group dark:brightness-170 py-2", className)}
        >
            <Image src="/assets/logos/logo.png" alt="Logo" width={150} height={100} />
        </Link>
    );
}