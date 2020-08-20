import React from "react";
import "./style.scss";
import Header from "../../components/header/Header";
import Call from "../../components/call/Call";
import AddRequest from "./add-request-form/AddRequest";

function NewSubscriber() {
  return (
    <div>
      <Header />
      <div className='new-subscriber-call d_flex j_content_between'>
        <AddRequest />
        <Call />
      </div>
    </div>
  );
}

export default NewSubscriber;
