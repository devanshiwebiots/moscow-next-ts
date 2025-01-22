import { Documentation, Href, Print } from "@/Constant";
import { useRef } from "react";
import { Printer } from "react-feather";
import { useReactToPrint } from "react-to-print";
import { Card, CardHeader } from "reactstrap";
import CreatedByMe from "./CreatedByMe";

const ListOfTask = () => {
   const contentRef = useRef<HTMLDivElement | null>(null);

   const handlePrint = useReactToPrint({
     contentRef,
   });
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <h5 className="mb-0">{Documentation}</h5>
        <a href={Href} onClick={()=>handlePrint()}>
          <Printer className="me-2" />
          {Print}
        </a>
      </CardHeader>
      <CreatedByMe ref={contentRef} />
    </Card>
  );
};

export default ListOfTask;
