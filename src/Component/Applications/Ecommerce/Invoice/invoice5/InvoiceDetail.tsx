import { BankTransfer, BankAccount, Code, Invoices } from "@/Constant";

const InvoiceDetail = () => {
  return (
    <td>
      <h4 style={{ fontSize: 42, fontWeight: 600, color: "rgba(26, 95, 127, 1)", margin: "0 0 12px 0" }} >{Invoices}</h4>
      <span style={{ fontSize: 16, color: "rgba(26, 95, 127, 1)", display: "block", fontWeight: 600, marginBottom: 20 }} >{BankTransfer}</span>
      <span style={{ color: "rgba(26, 95, 127, 1)", display: "block", marginBottom: 12, fontWeight: 600 }} >Leslie Alexander</span>
      <span style={{ display: "block", fontSize: 16, marginBottom: 12 }}>{BankAccount} : 0981234098765</span>
      <span style={{ display: "block", fontSize: 16, marginBottom: 12 }} >{Code} : LEF098756</span>
    </td>
  );
};

export default InvoiceDetail;
