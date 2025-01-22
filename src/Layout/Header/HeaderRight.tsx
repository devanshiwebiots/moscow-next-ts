import { Col } from "reactstrap";
import Languages from "./Languages";
import { Searchbar } from "./ReponsiveSearch/Searchbar";
import { BookMark } from "./BookMark";
import { CartData } from "./CartData";
import { DarkMode } from "./DarkMode";
import { Notification } from "./Notification";
import { Profile } from "./Profile";
 

export const HeaderRight = () => {
  return (
    <Col className="nav-right col-auto pull-right right-header p-0 ms-auto">
      <ul className="nav-menus">
        <Languages/>
        <Searchbar />
        <BookMark />
        <DarkMode />
        <CartData />
        <Notification />         
        <Profile/>
      </ul>
    </Col>
  );
};
