import { useEffect, useState } from "react";
import "./App.css";

function App() {
  /*Store state for all the Labels*/
  const [showSubMenu, setShowSubMenu] = useState([]);
  // Array of labels
  const input = [
    {
      label: "Menu 1",
    },
    {
      label: "Menu 2",
      submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
    },
    {
      label: "Menu 3",
      submenu: [
        { label: "Sub Menu 1" },
        { label: "Sub Menu 2" },
        { label: "Sub Menu 3" },
        { label: "Sub Menu 4" },
      ],
    },
    {
      label: "Menu 4",
      submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
    },
  ];
  //Changing state from false to true & vice-versa for the index Label
  const toggleSubMenu = (index) => {
    setShowSubMenu((prev) => ({
      [index]: !prev[index],
    }));
  };
  //Just for seeing state
  useEffect(() => {
    console.log(showSubMenu);
  }, [showSubMenu]);
  //Render submenus if there is any
  const renderSubmenu = (submenus) => {
    return (
      <ul className="space-y-2 mt-[2vh] relative left-5">
        {submenus.map((submenu, index) => (
          <li key={index}>✔ {submenu.label}</li>
        ))}
      </ul>
    );
  };
  return (
    <div className="bg-black h-screen w-screen font-mono text-3xl space-y-5 text-white flex flex-col items-center justify-center ">
      <h1 className="relative bottom-[15vh]">Multilevel dropdown menu</h1>
      {input.map((item, index) => (
        <div key={index} className="p-2 relative bottom-[10vh]">
          <button
            className="border-2 p-2 rounded-3xl w-[calc(100%+50px)] hover:text-black hover:bg-white duration-500"
            onClick={() => toggleSubMenu(index)}
          >
            {item.label}
          </button>
          {/* Submenu is rendered only when the showsubmenu state for a particular index(key) is true and submenu actually exists then call the function which renders the submenu*/}
          {showSubMenu[index] && item.submenu && renderSubmenu(item.submenu)}
        </div>
      ))}
    </div>
  );
}

export default App;
