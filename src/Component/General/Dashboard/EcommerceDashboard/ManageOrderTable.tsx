import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { Href, ImagePath } from "@/Constant";
import { ManageOrderdata } from "@/Data/Dashboard/EcommerceDashboarddata";
import { useAppSelector } from "@/Redux/Hooks";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, CardBody, Col, FormGroup, Input, Table } from "reactstrap";
import SearchBar from "../common/SearchTable";

const ManageOrderTable = () => {
  const searchTerm = useAppSelector((state) => state.search.searchTerm);
  const filteredTransactions = ManageOrderdata.filter((transaction) => transaction.productName.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <Col xl='7' md='6'>
      <Card className='latest-sales'>
        <DashboardCommonHeader title={"Manage Order"} dropDownFalse />
        <CardBody>
          <div className='table-responsive custom-scrollbar'>
            <div className='dataTables_wrapper no-footer'>
              <SearchBar />
              <Table className='display' id='manage-order'>
                <thead>
                  <tr>
                    <th>
                      <FormGroup check>
                        <Input type='checkbox' />
                      </FormGroup>
                    </th>
                    <th>Products name</th>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.length > 0 ? (
                    <>
                      {filteredTransactions.map((order, index) => (
                        <tr key={index}>
                          <td>
                            <FormGroup check>
                              <Input type='checkbox' />
                            </FormGroup>
                          </td>
                          <td>
                            <div className='d-flex gap-2'>
                              <Image src={`${ImagePath}${order.imgSrc}`} height={42} width={42} alt='product' />
                              <Link href={Href}>
                                <h6>{order.productName}</h6>
                              </Link>
                            </div>
                          </td>
                          <td>{order.id}</td>
                          <td>{order.date}</td>
                          <td>{order.price}</td>
                          <td>
                            <Button color='' className={`${order.statusClass}`}>
                              {order.status}
                            </Button>
                          </td>
                          <td>{order.quantity}</td>
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

export default ManageOrderTable;
