"use client";
import { Container, Row } from "reactstrap";
import BadgesContextualVariationsCard from "./BadgesContextualVariationsCart";
import PillsContextualVariationsCard from "./PillsContextualVariationsCart";
import NumberofBadgeCard from "./NumberofBadgeCard";
import NumberOfPillsTagCard from "./NumberOfPillsTagCart";
import BadgeTagsWithIconsCard from "./BadgeTagsWithIconsCart";
import RoundedPillsWithIconsCard from "./RoundedPillsWithIconsCart";
import BadgeHeadingsExampleCard from "./BadgeHeadingsExampleCart";
import BadgesAsPartButtonsCard from "./BadgesAsPartButtons/BadgesAsPartButtonsCart";

const TagAndPillsContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BadgesContextualVariationsCard />
        <PillsContextualVariationsCard/>
        <NumberofBadgeCard/>
        <NumberOfPillsTagCard/>
        <BadgeTagsWithIconsCard/>
        <RoundedPillsWithIconsCard/>
        <BadgeHeadingsExampleCard/>
        <BadgesAsPartButtonsCard/>
      </Row>
    </Container>
  );
};

export default TagAndPillsContainer;
