import Link from 'next/link'
import {usePathname} from 'next/navigation'

type Links = {
    link: string 
    icon?: string
    name: string 
}

const Links = ({link,icon,name}: Links) => {
  const path = usePathname()
  return (
    <li>
    <Link href={link} className={`${path === link? 'activelnk': ''}`}>{icon? <i className={icon}></i> : ''} {name}</Link>
  </li>
  )
}

export default Links