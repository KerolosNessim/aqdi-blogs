"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
const Navbar = () => {
  const NAV_LINKS = [
    {
      name: "الرئيسية",
      href: "https://aqdi.sa/",
    },
    {
      name: "عقاراتي",
      href: "https://aqdi.sa/real-estate",
    },
    {
      name: "الطلبات",
      href: "https://aqdi.sa/myContract",
    },
    {
      name: "المدونه",
      href: "/",
    },
    {
      name: "من نحن",
      href: "https://aqdi.sa/about-us",
    },
    {
      name: "الأسئلة الشائعة",
      href: "https://aqdi.sa/faqs",
    },
  ];

  return (
    <div className="navbar bg-white  flex items-center   ">
      <div className="navbar-container container  ">
        <a href="https://aqdi.sa/">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={120}
            height={40}
            className="w-32 h-auto"
          />
        </a>
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-lg font-bold transition-colors px-4 py-2  ",
                    link.href === "/" && "bg-main/80 text-white rounded-full",
                    "hover:bg-main/80 hover:text-white hover:rounded-full transition-all duration-300",
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="https://aqdi.sa/login"
            className="border-2 border-main h-12 px-8 rounded-full flex items-center justify-center  font-bold text-main hover:bg-main hover:text-white  transition-all duration-300"
          >
            تسجيل الدخول
          </Link>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant={"outline"}
                className="border-2 border-main h-12 w-12 rounded-full  font-bold text-main hover:bg-main hover:text-white  transition-all duration-300"
              >
                <MenuIcon className="size-6 grow" />
              </Button>
            </SheetTrigger>
            <SheetContent dir="ltr" side="right" showCloseButton={false}>
              <SheetHeader>
                <SheetTitle className="py-4">
                  <a href="https://aqdi.sa/" className="block mx-auto w-fit">
                    <Image
                      src={"/logo.svg"}
                      alt="logo"
                      width={120}
                      height={40}
                      className="w-32 h-auto"
                    />
                  </a>
                </SheetTitle>
                <SheetDescription asChild>
                  <ul className="flex flex-col items-center gap-5">
                    {NAV_LINKS.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className={cn(
                            "text-base font-bold transition-colors px-2 py-1  ",
                            link.href === "/" &&
                              "bg-main/80 text-white rounded-full",
                            "hover:bg-main/80 hover:text-white hover:rounded-full transition-all duration-300",
                          )}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
