import { useAppSelector } from "@/Redux/Hooks";
import StarredEmailContent from "./StarredEmailContent";
import { Fragment } from "react";
import { Col, TabPane } from "reactstrap";
import { ImagePath } from "@/Constant";

const StarredContent = () => {
  const { inboxEmail } = useAppSelector((state) => state.letterBox);
  let starBadges = inboxEmail.filter((data) => data.star === true && 1);

  return (
    <TabPane tabId='3'>
      <div className='mail-body-wrapper'>
        <ul>
          {starBadges.length > 0 ? (
            inboxEmail.map((data, i) => (
              <Fragment key={i}>
                {data.star && (
                  <li className='inbox-data'>
                    <StarredEmailContent data={data} ids={i} />
                  </li>
                )}
              </Fragment>
            ))
          ) : (
            <Col sm='12'>
              <div>
                <div className='search-not-found text-center p-5'>
                  <img className='img-100 mb-4' src={`${ImagePath}/other-images/sad4.gif`} alt='' />
                  <p>{`Sorry, Not Found Any Email`}</p>
                </div>
              </div>
            </Col>
          )}
        </ul>
      </div>
    </TabPane>
  );
};

export default StarredContent;
