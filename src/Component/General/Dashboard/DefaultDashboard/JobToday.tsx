import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import SVG from "@/CommonComponent/SVG";
import { ImagePath } from "@/Constant";
import { JobData, JobtableData } from "@/Data/Dashboard/Deafult_Dashboarddata";
import Image from "next/image";
import { Card, CardBody, Col, ListGroup, ListGroupItem, Table } from "reactstrap";

const JobToday = () => {
  return (
    <Col xl='5' md='6'>
      <Card className='job-card'>
        <DashboardCommonHeader title={"Job Today"} />
        <CardBody>
          <ListGroup className='d-flex align-items-center justify-content-center gap-3' horizontal>
            {JobData.map((item, index) => (
              <ListGroupItem key={index}>
                <div className='d-flex gap-2'>
                  <div className={`flex-shrink-0 bg-light-${item.bgColor}`}>
                    <SVG iconId={item.icon} className='stroke-icon' />
                  </div>
                  <div className='flex-grow-1'>
                    <h3>{item.count}</h3>
                    <p>{item.label}</p>
                  </div>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
          <div className='table-responsive custom-scrollbar mt-4'>
            <Table className='display'>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Job</th>
                  <th>Company</th>
                  <th className='text-center'>Employee</th>
                </tr>
              </thead>
              <tbody>
                {JobtableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.time}</td>
                    <td>{row.job}</td>
                    <td>{row.company}</td>
                    <td>
                      <div className='d-flex align-items-center gap-2'>
                        <div className='flex-shrink-0'>
                          <Image src={`${ImagePath}${row.employeeImg}`} width={28} height={26} alt={row.employeeName} />
                        </div>
                        <div className='flex-grow-1'>
                          <h6>{row.employeeName}</h6>
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

export default JobToday;
