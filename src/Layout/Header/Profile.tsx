import { Href, ImagePath, Logout } from "@/Constant";
import { UserProfileData } from "@/Data/Layout";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { LogOut } from "react-feather";

export const Profile = () => {
  const {data:session} = useSession();
  const LogOutUser = () => {
    signOut();
  };
  console.log("loggin key",session)
  return (
    <li className="profile-nav onhover-dropdown px-0 py-0">
      <div className="d-flex profile-media align-items-center">
        <Image height={40} width={40} className="b-r-10" src={session?.user?.image || `${ImagePath}/dashboard/profile.png`} alt="" />
        <div className="flex-grow-1">          
          <span>{session?.user?.email}</span>
          <p className="mb-0 font-outfit">{session?.user?.name || 'Admin'} <i className="middle fa fa-angle-down"/></p>
        </div>
      </div>
      <ul className="profile-dropdown onhover-show-div">
        {UserProfileData.map((item, index) => (
          <li key={index}>
            <Link href={`/${item.link}`}>{item.icon}<span>{item.title} </span></Link>
          </li>
        ))}
        <li onClick={LogOutUser}><Link href={Href}scroll={false} ><LogOut /><span>{Logout} </span></Link></li>
      </ul>
    </li>
  );
};
