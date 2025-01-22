import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { ImagePath } from "@/Constant";
import { TransactionsData } from "@/Data/Dashboard/Deafult_Dashboarddata";
import { useAppSelector } from "@/Redux/Hooks";
import { Card, CardBody, Col, FormGroup, Input, Label, Progress, Table } from "reactstrap";
import SearchBar from "../common/SearchTable";

const TransactionTable = () => {
  const searchTerm = useAppSelector((state) => state.search.searchTerm);
  const FilterOrderTablesData = TransactionsData.filter((transaction) => transaction.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <Col xl='7' md='6'>
      <Card className='transaction-table'>
        <DashboardCommonHeader title={"Transaction"} dropDownFalse />
        <CardBody>
          <div className='table-responsive custom-scrollbar'>
            <div className='dataTables_wrapper no-footer'>
              <SearchBar />
              <Table id='transaction-table'>
                <thead>
                  <tr>
                    <th>
                      <FormGroup check>
                        <Input type='checkbox' />
                        <Label check />
                      </FormGroup>
                    </th>
                    <th>Item Name</th>
                    <th>Date and Time</th>
                    <th>Income</th>
                    <th>Progress</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {FilterOrderTablesData.length > 0 ? (
                    <>
                      {FilterOrderTablesData.map((transaction) => (
                        <tr key={transaction.id}>
                          <td>
                            <FormGroup check>
                              <Input type='checkbox' />
                              <Label check />
                            </FormGroup>
                          </td>
                          <td>
                            <div className='d-flex gap-2'>
                              <div className='flex-shrink-0'>
                                <img src={`${ImagePath}${transaction.image}`} alt='user' height={24} width={24} />
                              </div>
                              <div className='flex-grow-1'>
                                <a href='product.html'>
                                  <h6 className='f-w-500'>{transaction.name}</h6>
                                  <span>{transaction.delivery}</span>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h6>{transaction.date}</h6>
                            <span>{transaction.time}</span>
                          </td>
                          <td className='f-w-500'>{transaction.income}</td>
                          <td>
                            <Progress value={transaction.progress} color={`${transaction.statusColor}`} />
                          </td>
                          <td>
                            <span className={`btn f-w-500 txt-${transaction.statusColor} bg-light-${transaction.statusColor}`}>{transaction.status}</span>
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

export default TransactionTable;
