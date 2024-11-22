import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const colorClasses: { [key: string]: string } = {
  red: "bg-red-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  yellow: "bg-yellow-500",
  gray: "bg-gray-500",
};

export const changeColor = (color: string) => {
  const colors = {
    short: "text-red-500",
    weak: "text-red-500",
    average: "text-yellow-500",
    strong: "text-green-500",
  };

  return colors[color as keyof typeof colors] || "text-gray-500";
};

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
