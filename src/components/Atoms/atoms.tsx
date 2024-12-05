'use client';

import clsx from "clsx";
import '@/components/Atoms/style.scss';
import { MouseEventHandler, useState } from "react";
import { HiCheck, HiEye, HiEyeSlash } from "react-icons/hi2";

interface Props {
  children?: React.ReactNode,
  style?: string,
  color?: string,
  text?: string,
  className?: string,
  icon?: any,
  hint?: boolean,
  name?: string,
  onClick?: MouseEventHandler,
}

export function Button({
  children, 
  style = 'bg',
  color = 'w',
  text = 'h3',
  className,
  onClick,
} : Props
) {
  return (
    <div className={clsx({
      [`button button-${style}-${color} ${text} ${className}`]: true,
    })} onClick={onClick}>
      {children}
    </div>
  )
}

export function InputText({
  children, 
  style = 'bg',
  text = 'h3',
  className,
  icon = <HiCheck />,
  hint = false,
  name,
} : Props
) {
  const [isValid, setIsValid] = useState(false);
  const change = (event: any) => {
    event.target.value == '' ? setIsValid(false) : setIsValid(true);
  }

  return (
    <label className={clsx({
      [`input${hint ? '-hint': ''} input-${style} ${text} ${className}`]: true,
      [`valid`]: isValid,
    })}>
      <span>{children}</span>
      <h3 className="h3">{icon}</h3>
      <input type="text" onChange={change} name={name}/>
    </label>
  )
}

export function InputPassword({
  children, 
  style = 'bg',
  text = 'h3',
  className,
  hint = false,
  name,
} : Props
) {
  const [isValid, setIsValid] = useState(false);
  const change = (event: any) => {
    event.target.value == '' ? setIsValid(false) : setIsValid(true);
  }

  const [isHidden, setIsHidden] = useState(true);
  const click = () => {
    setIsHidden(!isHidden);
  }

  return (
    <label className={clsx({
      [`input${hint ? '-hint': ''} input-password input-${style} ${text} ${className}`]: true,
      [`valid`]: isValid,
    })}>
      <span>{children}</span>
      <h3 className="h3 eye" onClick={click}>{isHidden ? <HiEye /> : <HiEyeSlash />}</h3>
      <input type={isHidden ? "password" : "text"} onChange={change} name={name}/>
    </label>
  )
}

export function Checkbox({
  style = 'bg',
  className,
  name,
} : Props
) {
  return (
    <label className={clsx({
      [`checkbox checkbox-${style} ${className}`]: true,
    })}>
      <input type="checkbox" name={name} />
      <HiCheck />
    </label>
  )
}

export function Radio({
  style = 'bg',
  className,
  name,
} : Props
) {
  return (
    <label className={clsx({
      [`radio radio-${style} ${className}`]: true,
    })}>
      <input type="radio" name={name}/>
    </label>
  )
}