import { useNavigate } from "react-router-dom";
import MenuButton from "../ui/MenuButton";
import "../../index.css";
import { useState } from "react";
import { filterMenuButtons } from "../../utils/menuHelpers";
import { isAuthenticated, getUserRole } from "../../utils/authHelpers";

function Menu() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);

  const menuItems = [
    {
      id: "administration",
      label: "Administration",
      path: "/admin",
      section: 1,
      requireAuth: true,
      requiredRole: "any",
    },
    {
      id: "login",
      label: "Connexion",
      path: "/auth/login",
      section: 3,
      requireAuth: false,
      requireRole: "any",
    },
    {
      id: "register",
      label: "S'enregister",
      path: "/auth/register",
      section: 3,
      requireAuth: false,
      requiredRole: "any",
    },
    {
      id: "allEvent",
      label: "Tout les évènements",
      path: "/admin/events",
      section: 2,
      requireAuth: true,
      requiredRole: "admin",
    },
    {
      id:"allUsers",
      label:"Tout les utilisateurs",
      path:"/admin/users/alluserslist",
      section:2,
      requireAuth:true,
      requiredRole:'admin'
    }
  ];
  const visibleItems = filterMenuButtons(
    menuItems,
    isAuthenticated(),
    getUserRole()
  );
  return (
    <div>
      <nav className="flex flex-col bg-emerald-500 rounded-3xl">
        {visibleItems
          .sort((a, b) => a.section - b.section)
          .map((item) => (
            <MenuButton
              section={item.section}
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                navigate(item.path);
              }}
              isActive={activeSection === item.id}
              label={item.label}
            />
          ))}
      </nav>
    </div>
  );
}

export default Menu;
