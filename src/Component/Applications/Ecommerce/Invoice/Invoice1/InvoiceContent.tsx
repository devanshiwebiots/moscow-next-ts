import { AmountDus, BilledTo, InvoiceDate, InvoiceNumber, MoscowMatchettVandelayGroupLTD, UnitedStateTitleText } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { getallCardTotal } from "@/utils/Ecommerce.service";
import { Table } from "reactstrap";

const InvoiceContent = () => {
  const { cart, tax } = useAppSelector((state) => state.cartData);

  return (
    <td>
      <Table className="bill-content w-100" borderless>
        <tbody>
          <tr>
            <td style={{ width: "36%" }}>
              <span style={{ opacity: "0.8" }}>{BilledTo}</span>
              <h6 style={{ width: "46%" }}>{MoscowMatchettVandelayGroupLTD}</h6>
            </td>
            <td style={{ width: "21%" }}>
              <span style={{ opacity: "0.8" }}>{InvoiceDate}</span>
              <h6>09/03/2024</h6>
            </td>
            <td>
              <span style={{ opacity: "0.8" }}>{InvoiceNumber}</span>
              <h6>#VL25000365</h6>
            </td>
            <td style={{ textAlign: "right" }}>
              <span style={{ opacity: "0.8" }}>{AmountDus}</span>
              <h2>$ {getallCardTotal(cart)+ getallCardTotal(cart)*tax/100}</h2>
            </td>
          </tr>
          <tr>
            <td style={{ width: "36%" }}>
              <h6 style={{ width: "63%", paddingTop: 20 }}>{UnitedStateTitleText}</h6>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceContent;
