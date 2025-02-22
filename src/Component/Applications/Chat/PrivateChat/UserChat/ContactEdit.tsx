import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { useState } from "react";
import SVG from "@/CommonComponent/SVG";
import { DropClassTypes } from "@/Types/ChatType";

const ContactEdit: React.FC<DropClassTypes> = ({ dropClass }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className={`contact-edit ${dropClass}`}>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} color="">
        <DropdownToggle color="">
          <SVG className="border-0 stroke-primary" iconId="menubar" />
        </DropdownToggle>
        <DropdownMenu end>
          <DropdownItem>View details</DropdownItem>
          <DropdownItem>Send messages</DropdownItem>
          <DropdownItem>Add to favorites</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ContactEdit;