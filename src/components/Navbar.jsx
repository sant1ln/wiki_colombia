import { TextInput } from "@tremor/react";
import { SearchIcon } from "@heroicons/react/solid";
import { TabList, Tab } from "@tremor/react";
import colombiaIcon from '../assets/colombia-icon.png'
import './styles/navbar.css'
import { useState } from "react";

const LocationA = [
  {
    name: "Cundinamarca",
    percentage: 120000,
    stat: "$ 100,838",
  },
  {
    name: "Antioquia",
    percentage: 14600000,
    stat: "$ 90,224",
  },
];

const LocationB = [
  {
    name: "Presidente A",
    percentage: 82,
    stat: "$ 108,799",
  },
  {
    name: "Presidente B",
    percentage: 10,
    stat: "$ 13,268",
  },
];


export const Navbar = () => {

  const [showCard, setShowCard] = useState(true);

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
          defaultValue="1"
          className="place-items-center"
          onValueChange={() => setShowCard(!showCard)}
        >
          <Tab value="1" text="Departamentos"  />
          <Tab value="2" text="Presientes" />
          <Tab value="3" text="Turismo" />
          <Tab value="4" text="Area natural" />
        </TabList>
      </nav>

      {showCard === true ? (
        <div className="mt-6">
          {LocationA.map((item) => (
            <div className="mt-4" key={item.name}>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6">
          {LocationB.map((item) => (
            <div className="mt-4" key={item.name}>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      )}


    </header>
  )
}