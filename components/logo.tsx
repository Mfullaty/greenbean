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
            className={cn("flex items-center gap-2 group dark:brightness-170", className)}
        >
            <Image src="/assets/logos/logo.png" alt="Logo" width={150} height={100} />
        </Link>
    );
}