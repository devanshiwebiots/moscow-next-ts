import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { Href, ImagePath } from "@/Constant";
import { RecentCustomers } from "@/Data/Dashboard/EcommerceDashboarddata";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Col, ListGroup } from "reactstrap";

const RecentCustomer = () => {
  return (
    <Col xl='4' md='6'>
      <Card>
        <DashboardCommonHeader title={"Recent Customers"} />
        <CardBody>
          <ListGroup className='recent-customers list-unstyled'>
            {RecentCustomers.map((customer, index) => (
              <li key={index} className='d-flex align-items-center gap-2'>
                <div className='flex-shrink-0'>
                  <Image src={`${ImagePath}${customer.imgSrc}`} alt={customer.name} className='img-fluid' height={40} width={40} />
                </div>
                <div className='flex-grow-1'>
                  <Link href={Href}>
                    <h5>{customer.name}</h5>
                  </Link>
                  <p className='text-truncate'>
                    ID {customer.id} <span className={customer.statusClass}>{customer.status}</span>
                  </p>
                </div>
                <div className='recent-text'>
                  <h5>{customer.amount}</h5>
                  <p className='mb-0'>{customer.time}</p>
                </div>
              </li>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RecentCustomer;
