import { TabPane } from "reactstrap";
import UserEmailContent from "./UserEmailContent";
import { SupportEmailData } from "@/Data/Applications/LetterBox";

const SupportContent = () => {
  return (
    <TabPane tabId="8">
      <div className="mail-body-wrapper">
        <ul className="simple-list">
          {SupportEmailData.map((data, i) => (
            <li className="inbox-data" key={i}>
              <UserEmailContent data={data} ids={i}/> 
            </li>
          ))}
        </ul>
      </div>
    </TabPane>
  );
};

export default SupportContent;
