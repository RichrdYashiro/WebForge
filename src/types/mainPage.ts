import type { ReactNode } from "react";

export interface IUserBtn {
  link: string;
  size?: "md" | "xl" ;
  className?: string;
  children?: ReactNode;
  
}