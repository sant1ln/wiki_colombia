import { useContext, useState } from "react";
import { TextInput } from "@tremor/react";
import { SearchIcon } from "@heroicons/react/solid";
import { TabList, Tab } from "@tremor/react";
import colombiaIcon from '../assets/colombia-icon.png'
import './styles/navbar.css'
import { AppContext } from "../context/AppContext";
import { appTabs, appTypes } from "../context/types/types";
import { useTabs } from "../hooks/useTabs";

export const Navbar = () => {

  /* const {dispatch} = useContext(AppContext); */
  const {setNewTab} = useTabs();


  const handleChange = (value) => {
    setNewTab(value)
  }

  return (
    <header className="header">
      <section className="header_main_container">
        <div className="header-icon">
          <img src={colombiaIcon} width="50" height="50" />
          <h1>Wiki Colombia</h1>
        </div>
        <div className="header-input">
          <TextInput icon={SearchIcon} placeholder="Buscar..." />
        </div>
      </section>
      <nav className="header-tabs">
        <TabList
          defaultValue={appTabs.home}
          className="place-items-center"
          onValueChange={(data) => handleChange(data)}
          color="neutral"
        >
          <Tab value={appTabs.home} text="inicio"  />
          <Tab value={appTabs.states} text="Departamentos"  />
          <Tab value={appTabs.presidents} text="Presidentes" />
          <Tab value={appTabs.turism} text="Turismo" />
          <Tab value={appTabs.natural} text="Area natural" />
        </TabList>
      </nav>

    </header>
  )
}