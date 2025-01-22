import { InvoiceFourDetails } from "@/Data/Applications/Ecommerce";
import { Table } from "reactstrap";

const InvoiceFourDetail = () => {
  return (
    <td>
      <Table className="table-responsive" style={{ width: "100%", borderSpacing: 4, marginBottom: 20 }}>
        <tbody>
          <tr>
            {InvoiceFourDetails.map((data, i) => (
              <td style={{ background: "#dfe8ed", padding: "15px 25px" }} key={i}>
                <p style={{ fontSize: 16, fontWeight: 500, color: "var(--theme-default)", opacity: "0.8", margin: 0, lineHeight: 2 }}>{data.title} :</p>
                <span style={{ fontSize: 16, fontWeight: 600 }}>{data.value}</span>
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceFourDetail;
