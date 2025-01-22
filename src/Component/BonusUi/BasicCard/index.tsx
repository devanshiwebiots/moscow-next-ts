import { Container, Row } from "reactstrap";
import BasicCard from "./BasicCard";
import FlatCard from "./FlatCard";
import WithoutshadowCard from "./WithoutshadowCard";
import IconInHeading from "./IconInHeading";
import DarkColorCard from "./DarkColorCard";
import InfoColorHeader from "./InfoColorHeader";
import InfoColorBody from "./InfoColorBody";
import InfoColorFooters from "./InfoColorFooters";
 

const BasicCardContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicCard/>
        <FlatCard/>
        <WithoutshadowCard/>
        <IconInHeading/>
        <DarkColorCard/>
        <InfoColorHeader/>
        <InfoColorBody/>
        <InfoColorFooters/>
      </Row>
    </Container>
  );
};

export default BasicCardContainer;
