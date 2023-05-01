import { TextInput } from "@tremor/react";
import { SearchIcon } from "@heroicons/react/solid";
import colombiaIcon from '../assets/colombia-icon.png'
import './styles/navbar.css'

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-icon">
        <img src={colombiaIcon} width="50" height="50" />
        <h1>Wiki Colombia</h1>
      </div>
      <div className="navbar-input">
        <TextInput icon={SearchIcon} placeholder="Buscar..." />
      </div>
    </header>
  )
}