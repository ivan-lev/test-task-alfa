import './Logo.scss';

export default function Logo(): JSX.Element {
  return (
    <a href="#">
      <img className="logo" src="./public/favicon.svg"></img>
    </a>
  );
}
