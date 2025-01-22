import SVG from "@/CommonComponent/SVG";
import { CheckAll, NotiFications } from "@/Constant";
import { NotificationData } from "@/Data/Layout";
import Link from "next/link";

export const Notification = () => {

  return (
    <li className="onhover-dropdown">
      <div className="notification-box">
        <SVG iconId="bell" />
      </div>
      <div className="onhover-show-div notification-dropdown">
        <h5 className="f-18 mb-0 dropdown-title">{NotiFications}</h5>
        <ul>
          {NotificationData.map((item, index) => (
           <li className={`b-l-${item.color} border-4`} key={index}>
           <p>
             {item.title} <span className={item.font}>{item.min}</span>
           </p>
         </li>
          ))}
          <li className='mt-0'><Link className="f-w-700" href={`/chat/private_chat`}>{CheckAll}</Link></li>
        </ul>
      </div>
    </li>
  );
};
