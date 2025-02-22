import { useState } from "react";
import { Button, Card, CardBody, Collapse } from "reactstrap";
import HeaderWithIcon from "../HeaderWithIcon";
 
import { FilterHeading, FindJobs } from "@/Constant";
import SearchAndMap from "./SearchAndMap";
import FilterCheckBox from "./FilterCheckBox";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="accordion" id="accordionExample">
      <Card>
        <HeaderWithIcon heading={FilterHeading} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Collapse isOpen={isOpen}>
          <CardBody className="filter-cards-view animate-chk">
            <SearchAndMap/>
            <FilterCheckBox/>
            <Button className="text-center w-100" color="primary" >{FindJobs}</Button>
          </CardBody>
        </Collapse>
      </Card>
    </div>
  );
};

export default Filter;
