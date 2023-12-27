export default function NavItem(props: { link: string; name: string }) {
  return (
    <a
      className="text-white hover:underline sm:py-6 "
      href={props.link}
    >
      {props.name}
    </a>
  );
}
