"use client";


import {usePathname} from "next/navigation";
import Navbar from "@/app/Components/Navbar/navbar";
import Footer from "@/app/Components/Footer/footer";

function ClientLayout({
    children,}: {
    children: React.ReactNode;}) {

    const pathname = usePathname();
    const hideLayout = pathname === "/UI-Components/Pages/Page404"

    return (
        <>
            {!hideLayout && <Navbar/>}
            {children}
            {!hideLayout && <Footer/>}
        </>
    );
}

export default ClientLayout;