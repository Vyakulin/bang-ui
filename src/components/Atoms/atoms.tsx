'use client';

import clsx from "clsx";
import '@/components/Atoms/style.scss';
import { useState } from "react";

interface Props {
  children?: React.ReactNode,
  style?: string,
  color?: string,
  text?: string,
  className?: string,
  p?: any
}

export function Button({
  children, 
  style = 'bg',
  color = 'w',
  text = 'h3',
  className,
} : Props
) {
  return (
    <div className={clsx({
      [`button button-${style}-${color} ${text} ${className}`]: true,
    })}>
      {children}
    </div>
  )
}

export function InputText({
  children, 
  style = 'bg',
  color = 'w',
  text = 'h3',
  className,
  p = {
    icon: <h3 className={text} style={{opacity: 0}}>.</h3>,
  }
} : Props
) {
  const [isValid, setIsValid] = useState(false);
  const change = (event: any) => {
    event.target.value == '' ? setIsValid(false) : setIsValid(true);
  }

  return (
    <label className={clsx({
      [`input input-${style} input-${style}-${color} ${text} ${className}`]: true,
      [`valid`]: isValid,
    })}>
      <span>{children}</span>
      {p.icon}
      <input type="text" onChange={change}/>
    </label>
  )
}