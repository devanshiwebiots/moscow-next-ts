import SVG from "@/CommonComponent/SVG";
import { useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";

const ChatDropMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="dropdown-form">
    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="up">
      <DropdownToggle color="" className="dropdown-form p-0 border-0"><i className="icon-plus" /></DropdownToggle>
      <DropdownMenu className="chat-icon">
        <div className="mb-2 dropdown-item"><SVG iconId="camera" /></div>
        <div className="dropdown-item"><SVG iconId="attchment" /></div>
      </DropdownMenu>
    </Dropdown>
    </div>
  );
};

export default ChatDropMenu;