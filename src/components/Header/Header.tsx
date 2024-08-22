import './Header.scss';

import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <span className="header__title">Тестово задание для ООО Экосистема Альфа</span>
    </header>
  );
}
