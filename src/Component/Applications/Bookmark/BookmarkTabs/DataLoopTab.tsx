import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import { CreatedByMe } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import ViewBookmark from "../ViewBookmarks";
import DataLoop from "./DataLoop";

const DataLoopTab = () => {
  const { gridView } = useAppSelector((state) => state.bookmarkTab);

  return (
    <TabPane tabId="1">
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <h5 className="mb-0">{CreatedByMe}</h5>
          <ViewBookmark />
        </CardHeader>
        <CardBody className="pb-0">
          <div className={`details-bookmark text-center ${!gridView ? "list-bookmark" : ""}`}>
            <DataLoop />
          </div>
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default DataLoopTab;
