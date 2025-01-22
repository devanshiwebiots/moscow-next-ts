"use client";
import { Container, Row } from "reactstrap";
import SimpleRatingBar from "./SimpleRatingBar";
import MovingRating from "./MovingRating";
import SquareRating from "./SquareRating";
import PillRating from "./PillRating";
import ReverseRating from "./ReverseRating";
import StarRating from "./StarRating";
import HalfStarRating from "./HalfStarRating";
import ThumbUpDown from "./ThumbUpDown";
import HeartRating from "./HeartRating";
import EmojiRating from "./EmojiRating";
 
const RatingContainer = () => {
  return (
    <Container fluid>
      <Row>
        <SimpleRatingBar/>
        <MovingRating/>
        <SquareRating/>
        <PillRating/>
        <ReverseRating/>
        <StarRating/>
        <HalfStarRating/>
        <ThumbUpDown/>
        <HeartRating/>   
        <EmojiRating/>    
      </Row>
    </Container>
  );
};

export default RatingContainer;
