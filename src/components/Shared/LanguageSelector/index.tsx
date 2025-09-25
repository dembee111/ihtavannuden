"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DropdownMenuCheckboxes = () => {
  const pathname = usePathname();
  const [isEnglish, setIsEnglish] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsEnglish(window.location.hostname.startsWith("en."));
    }
  }, []);

  const handleLanguageChange = (lang: "en" | "mn") => {
    if (lang === "en") {
      window.location.href = `https://en.ikhtavannuden.mn${pathname}`;
    } else {
      window.location.href = `https://ikhtavannuden.mn${pathname}`;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-gray-800 w-fit">
          <Image
            src={
              isEnglish === null
                ? "/image/mn.png"
                : isEnglish
                ? "/image/en.png"
                : "/image/mn.png"
            }
            alt={"ddd"}
            width={60}
            height={40}
            className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform"
          />
          {isEnglish === null ? "…" : isEnglish ? "English" : "Монгол хэл"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuCheckboxItem
          checked={isEnglish === true}
          onCheckedChange={() => handleLanguageChange("en")}
        >
          English
        </DropdownMenuCheckboxItem>

        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem
          checked={isEnglish === false}
          onCheckedChange={() => handleLanguageChange("mn")}
        >
          Монгол хэл
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownMenuCheckboxes;
