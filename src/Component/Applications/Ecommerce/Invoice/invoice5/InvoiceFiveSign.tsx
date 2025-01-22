import { ImagePath } from "@/Constant";

const InvoiceFiveSign = () => {
  return (
    <tr style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: 36 }} >
      <td>
        <img src={`${ImagePath}/email-template/invoice-3/sign.png`} alt="sign" />
        <span style={{ color: "rgba(26, 95, 127, 1)", display: "block", fontSize: 16, fontWeight: 600 }} >Laurine T. Ebbert</span>
        <span style={{ display: "block", fontSize: 14, paddingTop: 5 }}>( Designer )</span>
      </td>
    </tr>
  );
};

export default InvoiceFiveSign;
