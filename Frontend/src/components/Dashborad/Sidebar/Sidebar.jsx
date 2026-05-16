import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FormContext } from "../../../context/FormContext";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const { hasFormData } = useContext(FormContext);

  const links = [
    { icon: "fa-chart-line", title: "Status", path: "/" },
    { icon: "fa-users", title: "Users Management", path: "/users" },
    { icon: "fa-building", title: "Projects Management", path: "/projects" },
    { icon: "fa-building", title: "Developers Management" },
    { icon: "fa-globe", title: "CMS" },
    { icon: "fa-message", title: "Live Chat" },
  ];

  return (
    <aside className={`min-vh-100 py-4 ${styles.sidebar}`}>
      <div className="fw-semibold px-3 fs-4 mb-2">Dashboard</div>
      <nav>
        {links.map((item, index) => (
          <NavLink
            to={item.path}
            className={`${styles.navItem} d-flex align-items-center gap-3`}
            key={index}
          >
            <i className={`fa-solid ${item.icon} fs-5`}></i>
            <span className="fs-5">{item.title}</span>
            {hasFormData && item.title === "Users Management" && (
              <span className={`badge ${styles.draftBadge}`}>Draft</span>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
