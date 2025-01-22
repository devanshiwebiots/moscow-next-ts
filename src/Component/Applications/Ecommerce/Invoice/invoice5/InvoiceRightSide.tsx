import SVG from "@/CommonComponent/SVG";
import { Website } from "@/Constant";

const InvoiceRightSide = () => {
  return (
    <ul style={{ listStyle: "none", display: "flex", background: "rgba(26, 95, 127, 1)", padding: "31px 80px", borderBottomLeftRadius: 100, gap: 28 }} >
      <li className="align-items-center d-flex">
        <SVG className="stroke-icon" iconId="call" style={{ height: "14px", width: "14px", fill: "#fff", marginRight: "10px" }} />
        <span style={{ color: "#FFFFFF" }}>(239) 555-0108</span>
      </li>
      <li className="align-items-center d-flex" style={{ borderLeft: "1px dashed rgba(255, 255, 255, 0.3)", borderRight: "1px dashed rgba(255, 255, 255, 0.3)", padding: "0 22px" }} >
        <SVG className="stroke-icon" style={{ height: "16px", width: "16px", fill: "#fff", marginRight:"10px" }} iconId="email-box" />
        <span style={{ color: "#FFFFFF" }}>Moscow@themesforest.com</span>
      </li>
      <li className="align-items-center d-flex">
        <SVG className="stroke-icon" style={{ height: "16px", width: "16px", fill: "#fff", marginRight: "10px" }} iconId="web" />
        <span style={{ color: "#FFFFFF" }}>{Website}: www.Moscowthemes.com</span>
      </li>
    </ul>
  );
};

export default InvoiceRightSide;
