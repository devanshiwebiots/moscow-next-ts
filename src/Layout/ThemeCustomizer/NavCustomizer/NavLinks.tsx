import { NavLinkList } from "@/Data/Layout"
import { NavLink } from "reactstrap"

const NavLinks = () => {
  return (
    <>
      {NavLinkList &&
        NavLinkList.map((item, index) => (
          <NavLink key={index} href={item.path} target="_blank">
            <div>
            <i className={`${item.icon}`}></i>
            </div>
            <span>{item.name}</span>
          </NavLink>
        ))}
    </>
  )
}

export default NavLinks