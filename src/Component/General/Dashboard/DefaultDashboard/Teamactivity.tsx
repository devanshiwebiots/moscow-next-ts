import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { Href, ImagePath } from "@/Constant";
import { TeamActivitiesData } from "@/Data/Dashboard/Deafult_Dashboarddata";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Col, Table } from "reactstrap";

const Teamactivity = () => {
  return (
    <Col xl='5' sm='6'>
      <Card>
        <DashboardCommonHeader title={"Team Activity"} dropDownFalse />
        <CardBody>
          <div className='activity-table table-responsive custom-scrollbar'>
            <Table className='order-table project-table activity-log'>
              <tbody>
                {TeamActivitiesData.map((activity, index) => (
                  <tr key={index}>
                    <td>
                      <div className='team-activity'>
                        <div className='activity-data d-flex align-items-center gap-3'>
                          <div className='common-space gap-2'>
                            <div className='user-activity me-3'>
                              <Image className='rounded-circle p-1 img-fluid me-3 img-50' src={`${ImagePath}${activity.imgSrc}`} alt='user' width={50} height={50} />
                              <Link className='f-10 f-w-500 username' href={Href}>
                                {activity.name}
                              </Link>
                            </div>
                            <div className='activity-time'>
                              <span className='f-light f-w-500 f-10'>{activity.time}</span>
                            </div>
                          </div>
                          <div className='subtitle'>
                            <p className='f-w-400 f-10'>{activity.activity}</p>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Teamactivity;
