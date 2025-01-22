import { Href } from "@/Constant";
import { InformationCommonPropsType } from "@/Types/SearchResultType";
import Link from "next/link";
import ShowRatings from "../ShowRatings";

const InformationCommon :React.FC<InformationCommonPropsType> = ({ item }) => {
  return (
    <div className="info-block">
      <Link href={Href}>{item.url}</Link>
      <h6>{item.title}</h6> 
      <p>{item.detail}</p>
      <div className="star-ratings">
        <ul className="search-info">
          {item.showStar ? <ShowRatings item={item.showStar} /> : ""}
          <li>{item.star}</li>
          <li>{item.vote}</li>
          <li>{item.news}</li>
        </ul>
      </div>
    </div>
  );
};

export default InformationCommon;