'use client';
import '@/components/Blocks/style.scss';
import { Button, Lnk, Props } from '../Atoms/atoms';
import clsx from 'clsx';
import { FaExplosion } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';

export function Logo({
  color = 'b',
} : Props
) {
  return (
    <Lnk href='/' color={color}>
      <FaExplosion />Bang-UI
    </Lnk>
  )
}
const createLink = (name : string) => {
  return {
    name: name,
    href: `/${name.toLowerCase()}`
  }
}
const links = [createLink('Documentation'), createLink('Contact'), createLink('Donate')]

export function Header() {
  const path = usePathname();

  return (
    <div className={clsx({
      [`header`]: true,
    })}>
      <Logo />
      <div className={clsx({
        [`header-links`]: true,
      })}>
        {links.map((item, index, array) => {
          return (
            index + 1 !== array.length ? <Lnk color={item.href === path ? 'a' : 'b'} style='-underline' key={index} href={item.href}>
              {item.name}
            </Lnk> : <Lnk key={index} href={item.href}>
              <Button color={item.href === path ? 'a' : 'b'} style='ol'>
                {item.name}
              </Button>
            </Lnk>
          )
        })}
      </div>
    </div>
  )
}