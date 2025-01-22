import { BookmarkListData } from "./BookmarkListData";
import { BookmarkBack } from "./BookmarkBack";
import { useAppSelector } from "@/Redux/Hooks";
import SVG from "@/CommonComponent/SVG";

export const BookMark = () => {
  const { flip } = useAppSelector((state) => state.layout);

  return (
    <li className="onhover-dropdown">
      <SVG iconId="bookmark-drop" />
      <div className={`onhover-show-div bookmark-flip ${flip ? "active" : ""}`}>
        <div className="flip-card">
          <div className={`flip-card-inner ${flip ? "flipped" : ""}`}>
            <BookmarkListData />
            <BookmarkBack />
          </div>
        </div>
      </div>
    </li>
  );
};
