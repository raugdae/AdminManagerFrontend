import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import "../../index.css";
import { useState } from "react";

function MenuForm() {
    const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");
  

  const menuItems = [
    { id: "login", label: "Connexion", path: "/auth/login", section: "public" },
    {
      id: "register",
      label: "S'enregister",
      path: "/auth/register",
      section: "public",
    },
    {
      id: "allEvent",
      label: "Tout les évènements",
      path: "/admin/allEvents",
      section: "admin",
    },
    
  ];

  return (
    <div className="flex h-screen bg-emerald-800">
      <div className="w-64 shadow-lg">
        <div className="p-4 border-b">
          <h1 className="text-xl fond-bold text-shadow-indigo-300">
            Mon Application
          </h1>
        </div>

        <nav className="p-4 bg-purple-200 rounded-2xl">
          {menuItems.map((item) => {
            return (
              <Button color='bg-blue-500'
                key={item.id}
                onClick={() => {navigate(item.path);
                    return setActiveSection(item.id)}}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  activeSection === item.id
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span>{item.label}</span>
              </Button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default MenuForm;
