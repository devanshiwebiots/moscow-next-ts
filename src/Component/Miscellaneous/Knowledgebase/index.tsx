"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import KnowledgebaseHelp from "./KnowledgebaseHelp";
import { CategoryDataCardBody } from "./CategoryData/CategoryDataCardBody";
import CategoryData from "./CategoryData";
import FeaturesTutorial from "./FeaturesTutorial";
import ArticalAndVideo from "./ArticalVideo";

const KnowledgebaseContainer = () => {
  return (
    <Container fluid>
      <Row>
        <KnowledgebaseHelp />
        {/* <Articals /> */}
        <CategoryData/>
        <FeaturesTutorial/>
        <ArticalAndVideo/>
      </Row>
    </Container>
  );
};

export default KnowledgebaseContainer;
