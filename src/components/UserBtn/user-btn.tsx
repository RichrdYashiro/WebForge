import { Link } from "react-router-dom";
import type { IUserBtn } from "../../types/mainPage";

export const UserBtn = ({ link, children, size, className }: IUserBtn) => {
  const sizeClasses =
    size === "xl" ? "h-[80px] px-20 text-[12px]" : "h-[60px] px-12 text-[10px]";

  return (
    <Link
      to={link}
      className={`
        inline-flex items-center justify-center
        bg-white text-black 
        hover:bg-purple-600 hover:text-white 
        rounded-full transition-all 
        hover:scale-110 active:scale-95 
        font-black uppercase tracking-widest 
        border-none shadow-[0_20px_40px_rgba(0,0,0,0.4)]
        no-underline
        ${sizeClasses}
        ${className || ""}
      `}
    >
      {children}
    </Link>
  );
};
