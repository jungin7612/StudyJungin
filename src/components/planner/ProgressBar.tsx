import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import classes from "./progressBar.module.css";
import Modal from "./Modal";

export default function Progress() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  function getDiff() {
    const currDay = new Date();
    const examDay = new Date("November 17, 2022");

    const diffDays = Math.floor(
      (examDay.getTime() - currDay.getTime()) / (1000 * 60 * 60 * 24)
    );
    return diffDays;
  }
  return (
    <div className={classes.progressWrap}>
      <p className={classes.BeginAgain} onClick={openModal}>
        Begin
      </p>
      <Modal
        open={modalOpen}
        close={closeModal}
        header="Post a Daily Planer"
      ></Modal>
      <ProgressBar
        width="100%"
        height="1vh"
        completed={Math.floor(((991 - getDiff()) / 991) * 100)}
        bgColor="#404040"
        className={classes.progressBar}
        isLabelVisible={true}
        labelSize="5px"
      />
      <p className={classes.BeginAgain}>End</p>
    </div>
  );
}
