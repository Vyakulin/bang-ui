'use client';

import clsx from "clsx";
import '@/components/Atoms/style.scss';
import { MouseEventHandler, useState, useRef } from "react";
import { HiCheck, HiEye, HiEyeSlash, HiChevronDown } from "react-icons/hi2";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { useOutsideClick } from "../Hooks/customHooks";

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
  onlyIcon?: boolean,
  id?: string,
  required?: boolean,
  pattern?: string,
  checked?: boolean,
}

interface Link extends Props {
  href: Url,
  target?: string,
}

export function Button({
  children, 
  style = 'bg',
  color = 'w',
  text = 'h3',
  className,
  onClick,
  onlyIcon = false,
  id,
} : Props
) {
  return (
    <div id={id} className={clsx({
      [`button${onlyIcon ? '-icon' : ''} button-${style}-${color} ${text} ${className}`]: true,
    })} 
    onClick={onClick}>
      {children}
    </div>
  )
}

export function ButtonSegment({
  children, 
  style = 'bg',
  text = 'h3',
  className,
  id,
} : Props
) {
  const items = (children as string).split(';');

  return (
    <div id={id} className={clsx({
      [`button-segment button-segment-${style} ${className} ${text}`]: true,
    })}>
      {items.map((item, index) => {
        return (
          <label key={index}
          id={index.toString(10)}
          className={`button button-${style}-w`}>
            {item}
            <input type="radio" name={`button-segment${id}`} value={index}/>
          </label>
        )
      })}
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
  target = '_self',
} : Link
) {
  return (
    <Link href={href} target={target}
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
  required = false,
  pattern,
} : Props
) {
  const [isValid, setIsValid] = useState(false);
  const change = (event: any) => {
    event.target.value == '' ? setIsValid(false) : setIsValid(true);
  }

  return (
    <label className={clsx({
      [`input${hint ? '-hint': ''} input-${style} ${text} ${className}`]: true,
      [`valid`]: isValid
    })}>
      <span>{children}</span>
      <h3 className="h3">{icon}</h3>
      <input pattern={pattern} required={required} type="text" onChange={change} name={name}/>
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
  required = false,
  pattern,
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
      <input pattern={pattern} required={required} type={isHidden ? "password" : "text"} onChange={change} name={name}/>
    </label>
  )
}

export function Checkbox({
  style = 'bg',
  className,
  name,
  required = false,
  checked = false,
} : Props
) {
  return (
    <label className={clsx({
      [`checkbox checkbox-${style} ${className}`]: true,
    })}>
      <input type="checkbox" name={name} required={required} defaultChecked={checked}/>
      <HiCheck />
    </label>
  )
}

export function Radio({
  style = 'bg',
  className,
  name,
  required = false,
  checked = false,
} : Props
) {
  return (
    <label className={clsx({
      [`radio radio-${style} ${className}`]: true,
    })}>
      <input type="radio" name={name} required={required} defaultChecked={checked}/>
    </label>
  )
}

export function Switch({
  style = 'bg',
  className,
  name,
  type = 'checkbox',
  required = false,
  checked = false,
} : Props
) {
  return (
    <label className={clsx({
      [`switch checkbox-${style} ${className}`]: true,
    })}>
      <span></span>
      <input type={type} name={name} required={required} defaultChecked={checked}/>
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

export function Select({
  children, 
  style = 'bg',
  text = 'h3',
  className,
  color = 'w',
  name = 'Select',
} : Props
) {

  const [isHidden, setIsHidden] = useState(true);
  const click = () => {
    setIsHidden(!isHidden);
  }

  const [selectName, setSelectName] = useState(name);
  const change = (event: any) => {
    setSelectName(event.target.innerHTML);
  }

  const ref = useRef(null);
  useOutsideClick(ref, setIsHidden);

  return (
    <div className={clsx({
      [`select select-${style}-${color} ${className}`]: true
    })}
    ref={ref}>
      <div className={clsx({
          [`select-name button button-${style}-${color} ${text} ${className}`]: true,
          [`select-name-open`]: !isHidden
        })}
        onClick={click}>
        <span>
          {selectName}
        </span>
        <HiChevronDown />
      </div>
      <ul className={clsx({
        [`select-items p`]: true,
        [`select-items-open`]: !isHidden
      })}>
        {(children as string).split(';').map((item) => {
          return (
            <li className="select-item" key={item + Math.random().toString(10).slice(2)}
            onClick={change}>
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function Tooltip({
  children, 
  className,
  text = 'sm',
  color = 'w',
} : Props
) {
  return (
    <div className={clsx({
      [`tooltip tooltip-${color} ${text} ${className}`]: true
    })}>
      {children}
    </div>
  )
}