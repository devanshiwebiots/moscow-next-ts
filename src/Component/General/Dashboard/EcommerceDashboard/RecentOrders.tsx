import { CommonDropdown } from "@/CommonComponent/CommonDropdown/CommonDropdown";
import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { Href, ImagePath } from "@/Constant";
import { OrderTablesData } from "@/Data/Dashboard/EcommerceDashboarddata";
import { useAppSelector } from "@/Redux/Hooks";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, CardBody, Col, FormGroup, Input, Table } from "reactstrap";
import SearchBar from "../common/SearchTable";

const RecentOrders = () => {
  const searchTerm = useAppSelector((state) => state.search.searchTerm);
  const FilterOrderTablesData = OrderTablesData.filter((order) => order.productName.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <Col xl='7' md='12'>
      <Card className='recent-order'>
        <DashboardCommonHeader title={"Recent Orders"} dropDownFalse />
        <CardBody>
          <div className='table-responsive custom-scrollbar'>
            <div className='dataTables_wrapper no-footer'>
              <SearchBar />
              <Table className='last-orders-table custom-scrollbar' id='recent-orders'>
                <thead>
                  <tr>
                    <th>
                      <FormGroup check>
                        <Input type='checkbox' />
                      </FormGroup>
                    </th>
                    <th>Product Name</th>
                    <th>Date & Time</th>
                    <th>Customer</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {FilterOrderTablesData.length > 0 ? (
                    <>
                      {FilterOrderTablesData.map((order) => (
                        <tr key={order.id}>
                          <td>
                            <FormGroup check>
                              <Input type='checkbox' />
                            </FormGroup>
                          </td>
                          <td>
                            <div className='user-data d-flex gap-2'>
                              <div>
                                <Image src={`${ImagePath}${order.productImage}`} alt='product' height={40} width={40} />
                              </div>
                              <div>
                                <Link href={Href}>
                                  <h6>{order.productName}</h6>
                                  <span>{order.productBrand}</span>
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className='user-time'>
                              <Link href={Href}>
                                <h6>{order.date}</h6>
                                <span>{order.time}</span>
                              </Link>
                            </div>
                          </td>
                          <td>
                            <span>{order.customerName}</span>
                          </td>
                          <td>
                            <span>{order.price}</span>
                          </td>
                          <td>
                            <Button color='' className={`bg-${order.statusColor}`}>
                              {order.status}
                            </Button>
                          </td>
                          <td>
                            <CommonDropdown />
                          </td>
                        </tr>
                      ))}
                    </>
                  ) : (
                    <tr>
                      <th colSpan={7} className='text-center'>
                        No matching records found
                      </th>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RecentOrders;
