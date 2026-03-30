import React from 'react'
import type { IconType } from "react-icons";

interface btnProps {
    title: string;
    btnonClick: () => void;
    btnColor?: "primary" | "secondary" | "danger" | "white" | "warning" | "fullWidth";
    BtnIcon?: IconType
}

const Button: React.FC<btnProps> = ({title, btnonClick, btnColor, BtnIcon}) => {
  return (
    <>
        <button className={`btn btn-${btnColor}`} onClick={btnonClick}>{BtnIcon && <span><BtnIcon /></span>} {title}</button>
    </>
  )
}

export default Button