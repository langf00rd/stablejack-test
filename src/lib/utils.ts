import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { WALLET_ADDRESS_REGEX } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function bigIntToNumber(value: bigint | unknown): number {
  return Number(value);
}

export function validateWalletAddress(address: string): boolean {
  return WALLET_ADDRESS_REGEX.test(address);
}
