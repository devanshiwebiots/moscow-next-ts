import { TabPane } from "reactstrap";
import TrashEmailContent from "./TrashEmailContent";
import { TrashEmailData } from "@/Data/Applications/LetterBox";

const TrashContent = () => {
  return (
    <TabPane tabId="5">
      <div className="mail-body-wrapper">
        <ul className="simple-list">
          {TrashEmailData.map((data,i)=>(
            <li className="inbox-data" key={i}>
              <TrashEmailContent data={data} ids={i}/> 
            </li>
          ))}
        </ul>
      </div>
    </TabPane>
  );
};

export default TrashContent;
