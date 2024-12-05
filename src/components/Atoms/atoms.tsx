'use client';

import clsx from "clsx";
import '@/components/Atoms/style.scss';
import { MouseEventHandler, useState } from "react";
import { HiCheck, HiEye, HiEyeSlash, HiChevronDown } from "react-icons/hi2";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

interface Props {
  children?: React.ReactNode,
  style?: string,
  color?: string,
  text?: string,
  className?: string,
  icon?: React.ReactNode,
  hint?: boolean,
  name?: string,
  onClick?: MouseEventHandler,
  type?: string,
}

interface Link extends Props {
  href: Url,
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
    })} 
    onClick={onClick}>
      {children}
    </div>
  )
}

export function Lnk({
  children, 
  style = '',
  color = 'w',
  text = 'h3',
  className,
  href,
} : Link
) {
  return (
    <Link href={href} 
    className={clsx({
      [`link${style} link-${color} ${text} ${className}`]: true,
    })}>
      {children}
    </Link>
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
      <input type="checkbox" name={name}/>
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
      [`radio checkbox-${style} ${className}`]: true,
    })}>
      <input type="radio" name={name}/>
    </label>
  )
}

export function Switch({
  style = 'bg',
  className,
  name,
  type = 'checkbox',
} : Props
) {
  return (
    <label className={clsx({
      [`switch checkbox-${style} ${className}`]: true,
    })}>
      <span></span>
      <input type={type} name={name}/>
    </label>
  )
}

export function Accordion({
  children, 
  style = 'bg',
  text = 'h3',
  className,
  color = 'w',
  name = 'Accordion',
} : Props
) {

  const [isHidden, setIsHidden] = useState(true);
  const click = () => {
    setIsHidden(!isHidden);
  }

  return (
    <div className={clsx({
      [`accordion accordion-${style}-${color} ${className}`]: true
    })}>
      <div className={clsx({
          [`accordion-name button button-${style}-${color} ${text} ${className}`]: true,
          [`accordion-name-open`]: !isHidden
        })}
        onClick={click}>
        <span>
          {name}
        </span>
        <HiChevronDown />
      </div>
      <span className={clsx({
        [`accordion-text p`]: true,
        [`accordion-text-open`]: !isHidden
      })}>
        {children}
      </span>
    </div>
  )
}