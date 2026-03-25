import type { ReactNode, ButtonHTMLAttributes } from "react";

export interface IButtonForm extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string; 
  loading?: boolean;
}