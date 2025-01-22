import { TabPane } from "reactstrap";
import DraftEmailContent from "./DraftEmailContent";
import { DraftEmailData } from "@/Data/Applications/LetterBox";

const DraftContent = () => {
  return (
    <TabPane tabId="4">
      <div className="mail-body-wrapper">
        <ul>
          {DraftEmailData.map((data,i)=>(
            <li className="inbox-data" key={i}>
              <DraftEmailContent data={data} ids={i}/> 
            </li>
          ))}
        </ul>
      </div>
    </TabPane>
  );
};

export default DraftContent;
