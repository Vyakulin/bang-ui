import clsx from "clsx";
import '@/components/Atoms/style.scss';

export enum Style {
  bg = 'bg',
  ol = 'ol',
}

export enum Color {
  w = 'w',
  w2 = 'w2',
  b = 'b',
  b2 = 'b2',
  a = 'a',
}

export enum Text {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  p = 'p',
  sm = 'sm',
}

interface Props {
  children?: React.ReactNode,
  style?: Style,
  color?: Color,
  text?: Text,
  className?: string,
  id?: string,
  p?: any
}

export function Button({
  children, 
  style = Style.bg,
  color = Color.w,
  text = Text.h3,
  className,
  id,
  p,
} : Props
) {
  return (
    <div id={id} className={clsx({
      [`button button-${style}-${color} ${text} ${className}`]: true,
    })}
    {...p}>
      {children}
    </div>
  )
}

export const Input = {
  Text: ({
    children, 
    style = Style.bg,
    color = Color.w,
    text = Text.h3,
    className,
    id,
    p = {
      icon: null,
    },
  } : Props) => {
    return (
      <label className={clsx({
        [`input input-${style}-${color} ${text} ${className}`]: true,
      })}
      {...p}>
        <span>{children}</span>
        {p.icon}
        <input type="text" name={p.name} id={id} />
      </label>
    )
  }
}