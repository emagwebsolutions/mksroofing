import Link from 'next/link'

type Links = {
    link: string 
    icon?: string
    name: string 
}

const Links = ({link,icon,name}: Links) => {
  return (
    <li>
    <Link href={link}>{icon? <i className={icon}></i> : ''} {name}</Link>
  </li>
  )
}

export default Links