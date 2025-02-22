import { TabContent, TabPane } from "reactstrap";
import { VerticalValidationWizardFormPropsType } from "@/Types/FormType";
import YourInfoForm from "./YourInfoForm";
import CartInfoForm from "./CartInfoForm";
import NetBankingForm from "./NetBankingForm";

const VerticalValidationWizardTabComponent :React.FC<VerticalValidationWizardFormPropsType> = ({activeTab,activeCallBack}) => {
  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId={1}>
        <YourInfoForm activeCallBack={activeCallBack} /> 
      </TabPane>
      <TabPane tabId={2}>
        <CartInfoForm activeCallBack={activeCallBack} /> 
      </TabPane>
      <TabPane tabId={3}>
        <NetBankingForm /> 
      </TabPane>
    </TabContent>
  );
};

export default VerticalValidationWizardTabComponent;
