import type { IButtonForm } from "../../types/buttonform";

export const ButtonForm = ({ children, className }: IButtonForm) => {
  return (
    <button
      className={`
inline-flex items-center justify-center
        bg-white text-black 
        hover:bg-purple-600 hover:text-white 
        rounded-full transition-all 
        hover:scale-110 active:scale-95 
        font-black uppercase tracking-widest 
        border-none shadow-[0_20px_40px_rgba(0,0,0,0.4)]
        no-underline
        h-[60px] px-12 text-[10px]
        ${className || ""}
      `}
    >
      {children}
    </button>
  );
};
