import { NavLink } from "react-router-dom";
import { links } from "../../utils/utils.js";
const Navlinks = () => {
    return (
        <div className="nav-links">
            {links.map((link) => {
                const { text, path, id } = link
                return (
                    <NavLink to={path} className={({ isActive }) => {
                        return isActive ? "nav-link active" : 'nav-link'
                    }}
                        key={id}
                    >
                        {text}
                    </NavLink>
                )
            })}
        </div>
    )
}

export default Navlinks

