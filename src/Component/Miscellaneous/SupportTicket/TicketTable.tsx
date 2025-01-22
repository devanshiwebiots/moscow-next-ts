import { DeleteData, DeleteSupportTicket, SearchTableButton } from "@/Constant";
import { SupportColumnData, SupportTicketData } from "@/Data/Miscellaneous/SupportTicket";
import { SupportDataType } from "@/Types/SupportTicketType";
import { useCallback, useState } from "react";
import DataTable from "react-data-table-component";
import { Button, Input, Label } from "reactstrap";

const TicketTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [data, setData] = useState(SupportTicketData);

  const handleRowSelected = useCallback((state: any) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map((r: SupportDataType) => r.name)}?`)) {
      setToggleDelete(!toggleDelete);
      setData(data.filter((item) => (selectedRows.filter((elem: SupportDataType) => elem.id === item.id).length > 0 ? false : true)));
      setSelectedRows([]);
    }
  };

  const filteredItems = data.filter((item) => item.office && item.office.toLowerCase().includes(filterText.toLowerCase()));

  return (
    <div className='table-responsive basic-data-table'>
      {selectedRows.length !== 0 && (
        <div className={`d-flex align-items-center justify-content-between bg-light-info p-2`}>
          <h6 className='text-muted m-0'>{DeleteData}</h6>
          <Button color='danger' onClick={handleDelete}>
            {DeleteSupportTicket}
          </Button>
        </div>
      )}
      <div className='d-flex justify-content-end'>
        <div id='API-chield-row_filter' className='dataTables_filter d-flex align-items-center'>
          <Label className='me-2'>{SearchTableButton}:</Label>
          <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type='search' value={filterText} />
        </div>
      </div>
      <DataTable className='theme-scrollbar' columns={SupportColumnData} data={filteredItems} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
    </div>
  );
};
export default TicketTable;
