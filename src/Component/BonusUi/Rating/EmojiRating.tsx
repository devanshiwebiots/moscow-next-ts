//@ts-nocheck
import React, { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HalfStarRatingBar } from "@/Constant";
import { HalfStarRatingData } from "@/Data/BonusUi/Rating";

const EmojiRating = () => {
  const [rating, setRating] = useState(null);

  const handleRating = (rate: React.SetStateAction<null>) => {
    setRating(rate);
  };

  const renderEmoji = (rate: number | React.SetStateAction<null>, className: string) => (
    <li className={`${className} ${rating === rate ? 'active' : ''} me-0`} onClick={() => handleRating(rate)}>
      <div>
        <svg className="eye left">
          <use xlinkHref="../assets/svg/icon-sprite.svg#eye"></use>
        </svg>
        <svg className="eye right">
          <use xlinkHref="../assets/svg/icon-sprite.svg#eye"></use>
        </svg>
        {rate !== 3 && (
          <svg className="mouth">
            <use xlinkHref="../assets/svg/icon-sprite.svg#mouth"></use>
          </svg>
        )}
      </div>
    </li>
  );

  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={HalfStarRatingBar} span={HalfStarRatingData} />
        <CardBody>
          <div className="rating-container">
            <ul className="feedback">
              {renderEmoji(1, 'angry')}
              {renderEmoji(2, 'sad')}
              {renderEmoji(3, 'ok')}
              {renderEmoji(4, 'good')}
              {renderEmoji(5, 'happy')}
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EmojiRating;
