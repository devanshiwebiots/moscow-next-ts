import { InvoiceFourData } from "@/Data/Applications/Ecommerce";

const InvoiceTableBody = () => {
  return (
    <>
      {InvoiceFourData.map((data, i) => (
        <tr key={i}>
          <td style={{ padding: 30 }}>
            <h4 style={{ fontWeight: 600, margin: "4px 0px", fontSize: 16, color: "var(--theme-default)" }}>{data.title}</h4>
            <span style={{ opacity: "0.8", fontSize: 16 }}>{data.detail}</span>
          </td>
          <td style={{ width: "12%", textAlign: "center" }}>
            <span style={{ opacity: "0.8" }}>${data.price}.00</span>
          </td>
          <td style={{ width: "12%", textAlign: "center" }}>
            <span style={{ opacity: "0.8" }}>{data.quantity}</span>
          </td>
          <td style={{ width: "12%", textAlign: "center" }}>
            <span style={{ color: "var(--theme-default)", fontWeight: 600, opacity: "0.9" }}>${data.total}.00</span>
          </td>
        </tr>
      ))}
    </>
  );
};

export default InvoiceTableBody;
