import Link from 'next/link';

type Links = {
  url: string;
  children: string;
  cls: string
} & Omit<React.ComponentProps<'a'>, 'children'>;

const Button = ({ children, url,cls }: Links) => {
  return (
    <Link href={url} className={`${cls} bg-red-500 text-white px-10 py-4 rounded-xl `}>
      {children}
    </Link>
  );
};

export default Button;
