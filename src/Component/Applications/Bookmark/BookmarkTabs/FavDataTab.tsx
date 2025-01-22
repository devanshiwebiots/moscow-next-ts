import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import { Favorites } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import ViewBookmark from "../ViewBookmarks";
import FavDataLoop from "./FavDataLoop";

const FavDataTab = () => {
  const { gridView } = useAppSelector((state)=>state.bookmarkTab)
  return (
    <TabPane tabId="2">
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <h5 className="mb-0">{Favorites}</h5>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <div className={`details-bookmark text-center ${gridView ? "" : "list-bookmark"}`}>
            <FavDataLoop />
          </div>
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default FavDataTab;
