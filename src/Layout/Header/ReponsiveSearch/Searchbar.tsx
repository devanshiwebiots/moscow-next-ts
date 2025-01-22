import SVG from "@/CommonComponent/SVG";
import { SearchHere } from "@/Constant";
import { MenuList } from "@/Data/Layout/Menu";
import { useAppDispatch } from "@/Redux/Hooks";
import { setResponsiveSearch } from "@/Redux/Reducers/LayoutSlice";
import { MenuItem, SearchSuggestionItem } from "@/Types/LayoutTypes";
import { ChangeEvent, useEffect, useState } from "react";
import { FormGroup, Input } from "reactstrap";
import ResponsiveSearchList from "./ResponsiveSearchList";
import { X } from "react-feather";

export const Searchbar = () => {
  const [arr, setArr] = useState<SearchSuggestionItem[]>([]);
  const [searchedWord, setSearchedWord] = useState<string>("");
  const [searchedArray, setSearchedArray] = useState<SearchSuggestionItem[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setResponsiveSearch());
    setSearchedWord("");
    document.body.classList.remove("offcanvas");
  };

  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const suggesionArray: SearchSuggestionItem[] = [];
    const getAllLink = (item: MenuItem, icon: string | undefined) => {
      if (item.children) {
        item.children.forEach((ele) => {
          getAllLink(ele, icon);
        });
      } else {
        suggesionArray.push({ icon: icon, title: item.title, path: item.path || "" });
      }
    };
    MenuList?.forEach((item) => {
      item.Items?.forEach((child) => {
        getAllLink(child, child.icon);
      });
    });
    setArr(suggesionArray);    
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    let searchKey = e.target.value.toLowerCase();
    if (!searchedWord) setSearchedWord("");
    if (searchKey !== "") {
      document.body.classList.add("offcanvas");
      setSearchedWord(e.target.value);
      let data = [...arr];
      let result = data.filter((item) => item.title?.toLowerCase().includes(e.target.value.toLowerCase()));
      setSearchedArray(result);
    }else{
      dispatch(setResponsiveSearch());
      setSearchedWord("");
      document.body.classList.remove("offcanvas");
      setOpen(false)
    }
  };

  return (
    <li className='serchinput'>
      <div className='serchbox' onClick={toggle}>
        <SVG iconId={"search"} />
      </div>
      <FormGroup className={`search-form search-form d-flex ${open ? "open" : ""}`}>
        <Input type='text' placeholder={SearchHere} value={searchedWord} onChange={(e) => handleSearch(e)} /> <X onClick={handleClose} />
        <div className={`Typeahead-menu ${searchedWord.length ? "is-open" : ""}`}>
        <ResponsiveSearchList searchedArray={searchedArray} setSearchedWord={setSearchedWord} />
      </div>
      </FormGroup>
      
    </li>
  );
};
