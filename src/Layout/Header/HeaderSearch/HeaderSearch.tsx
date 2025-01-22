import SVG from "@/CommonComponent/SVG";
import { SearchHere } from "@/Constant";
import { ChangeEvent, useEffect, useState } from "react";
import SearchSuggestionList from "./SearchSuggestionList";
import { MenuList } from "@/Data/Layout/Menu";
import { MenuItem, SearchSuggestionItem } from "@/Types/LayoutTypes";
import { getLinkItemsArray } from "@/Redux/Reducers/HeaderBookmarkSlice";
import { useAppDispatch } from "@/Redux/Hooks";
import { Form, Input } from "reactstrap";

export const HeaderSearch = () => {
  const dispatch = useAppDispatch();
  const [arr, setArr] = useState<SearchSuggestionItem[]>([]);
  const [searchedWord, setSearchedWord] = useState<string>("");
  const [searchedArray, setSearchedArray] = useState<SearchSuggestionItem[]>([]);

  useEffect(() => {
    const suggestionArray: SearchSuggestionItem[] = [];
    let num = 0;
    const getAllLink = (item: MenuItem, icon: string | undefined) => {
      if (item.children) {
        item.children.forEach((ele) => {
          getAllLink(ele, icon);
        });
      } else {
        num = num + 1;
        suggestionArray.push({ icon: icon, title: item.title, path: item.path ? item.path : "", bookmarked: false, id: num });
      }
    };
    MenuList?.forEach((item) => {
      item.Items?.forEach((child) => {
        getAllLink(child, child.icon);
      });
    });
    setArr(suggestionArray);
    dispatch(getLinkItemsArray(suggestionArray));
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    let searchKey = e.target.value.toLowerCase();
    if (!searchedWord) setSearchedWord("");
    if (searchKey !== "") {
      document.body.classList.add("offcanvas");
    setSearchedWord(e.target.value);
    const result = arr.filter((item) => item.title?.toLowerCase().includes(e.target.value.toLowerCase()));
    setSearchedArray(result);
    }else{
      setSearchedWord("");
      document.body.classList.remove("offcanvas");       
    }
  };

  return (
    <div className='left-header col-xxl-6 col-auto p-0'>
    <Form className='col-auto form-inline search-full' action='#' method='get'>
      <div className='form-group'>
        <div className='Typeahead Typeahead--twitterUsers'>
          <div className='u-posRelative'>
            <Input className='demo-input Typeahead-input form-control-plaintext w-100 border-0' type='text' placeholder={SearchHere} name='q' title='' onChange={(e) => handleSearch(e)} value={searchedWord} />
            <SVG className='search-bg svg-color' iconId='search' />
          </div>
          <div className={`Typeahead-menu custom-scrollbar ${searchedWord.length ? "is-open" : ""}`}>
            <SearchSuggestionList searchedArray={searchedArray} setSearchedWord={setSearchedWord} />
          </div>
        </div>
      </div>
    </Form>
    </div>
  );
};
