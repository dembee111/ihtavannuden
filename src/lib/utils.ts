import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractText = (richTextDocument: any, wordLimit = 20) => {
  if (!richTextDocument || !richTextDocument.content) return "";

  let textArray: any = [];

  richTextDocument.content.forEach((block: any) => {
    if (block.content) {
      block.content.forEach((child: any) => {
        if (child.nodeType === "text" && child.value) {
          textArray.push(child.value);
        }
      });
    }
  });

  // Бүх текстийг нэгтгэж, үгээр нь хязгаарлах
  return textArray.join(" ").split(/\s+/).slice(0, wordLimit).join(" ");
};
