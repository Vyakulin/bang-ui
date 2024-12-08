'use client';
import '@/components/Blocks/style.scss';
import { Lnk, Props } from '../Atoms/atoms';
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
const links = [createLink('Documentation'), createLink('Contact')]

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
        {links.map((item, index) => {
          return (
            <Lnk color={item.href === path ? 'a' : 'b'} style='-underline' key={index} href={item.href}>
              {item.name}
            </Lnk>
          )
        })}
      </div>
    </div>
  )
}