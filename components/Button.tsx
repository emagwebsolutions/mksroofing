import Link from 'next/link';

type Links = {
  url: string;
  children: React.ReactNode
  cls: string
} 

const Button = ({ children, url,cls }: Links) => {
  return (
    <Link href={url} className={cls}>
      {children}
    </Link>
  );
};

export default Button;
