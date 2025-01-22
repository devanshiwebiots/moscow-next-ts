import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import SVG from "@/CommonComponent/SVG";
import { Href, ImagePath } from "@/Constant";
import { TopusersData } from "@/Data/Dashboard/Deafult_Dashboarddata";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Col } from "reactstrap";

const TopUsers = () => {
  return (
    <Col xl='4' md='6'>
      <Card>
        <DashboardCommonHeader title={"Top Users"} />
        <CardBody className='top-user custom-scrollbar'>
          <ul className='list-unstyled custom-scrollbar'>
            {TopusersData.map((user, index) => (
              <li key={index} className='d-flex align-items-center justify-content-between gap-2'>
                <div className='d-flex gap-2 align-items-center'>
                  <div className='flex-shrink-0 comman-round'>
                    <Image src={`${ImagePath}${user.imgSrc}`} width={31} height={31} alt='' />
                  </div>
                  <div>
                    <Link href={Href}>
                      <h6>{user.name}</h6>
                    </Link>
                    <p>
                      <SVG className='stroke-icon' iconId='map-icon' />
                      {user.location}
                    </p>
                  </div>
                </div>
                <span>{user.amount}</span>
                <button className={`btn bg-light-${user.statusClass} border-light-${user.statusClass} text-${user.statusClass}`}>{user.status}</button>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TopUsers;
