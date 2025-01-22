import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { Href, ImagePath } from "@/Constant";
import { activities } from "@/Data/Dashboard/Deafult_Dashboarddata";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Col, Table } from "reactstrap";

const Activity = () => { 
  return (
    <Col xl='4' md='6'>
      <Card className='activity-review'>
      <DashboardCommonHeader title={"Activities"} />        
        <CardBody>
          <Table className='table-bordernone'>
            <tbody>
              {activities.map((activity, index) => (
                <tr key={index}>
                  <td>
                    <div className='d-flex gap-2'>
                      <Image className='img-fluid' src={`${ImagePath}${activity.imgSrc}`} width={46} height={40} alt='' />
                      <div className='flex-grow-1'>
                        <Link href={Href}>
                          <h5>{activity.title}</h5>
                        </Link>
                        <p>{activity.date}</p>
                      </div>
                      <div className='time-badge'>
                        <p>{activity.timeAgo}</p>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Activity;
