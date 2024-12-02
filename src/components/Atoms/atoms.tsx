import clsx from "clsx";

enum Style {
  bg = 'bg',
  ol = 'ol',
}

enum Color {
  w = 'w',
  w2 = 'w2',
  w3 = 'w3',
  b = 'b',
  b2 = 'b2',
  b3 = 'b3',
  a = 'a',
  a2 = 'a2',
}

enum Text {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  p = 'p',
  sm = 'sm',
}

interface ButtonProps {
  children?: React.ReactNode,
  style?: Style,
  color?: Color,
  text?: Text,
  className?: string,
}

export function Button({
  children, 
  style = Style.bg,
  color = Color.w,
  text = Text.h3,
  className,
  ...p
} : ButtonProps
) {
  return (
    <div className={clsx({
      [`button-${style}-${color} ${text} ${className}`]: true,
    })}
    {...p}>
      {children}
    </div>
  )
}