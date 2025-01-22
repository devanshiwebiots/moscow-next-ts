import React, { useState } from "react";
import { Search } from "react-feather";
import { Card, Col, Input, InputGroup, InputGroupText } from "reactstrap";
import { SearchHere } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { searchMember } from "@/Redux/Reducers/ChatSlice";
import { ChatOptionTab } from "./ChatOptionTab";

export const LeftSideBar = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const dispatch = useAppDispatch();
  const handleSearchKeyword = (keyword: string) => {
    setSearchKeyword(keyword);
    dispatch(searchMember(keyword));
  };

  return (
    <Col xxl="3" xl="4" md="5" className="box-col-5">
      <div className="left-sidebar-wrapper card">
        <div className="left-sidebar-chat">
          <InputGroup>
            <InputGroupText>
              <Search className="search-icon text-gray" />
            </InputGroupText>
            <Input type="text" placeholder={SearchHere} defaultValue={searchKeyword} onChange={(e) => handleSearchKeyword(e.target.value)} />
          </InputGroup>
        </div>
        <ChatOptionTab />
      </div>
    </Col>
  );
};
