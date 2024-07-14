import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import WarningLayOut from "../shared/WarningLayOut";
import { useParams } from "react-router-dom";
import { fetchPayment } from "../../store/actions/payments/paymentActions";
import Owner from "./Owner";
import Loading from "../shared/Loading/Loading";
import ProjectPayments from "./ProjectPayments";

const OwnerPayments = () => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const { payment, isLoading } = useSelector((state) => state.paymentReducer);

  const dispatch = useDispatch();
  const { ownerId } = useParams();

  useEffect(() => {
    if (ownerId) {
      dispatch(fetchPayment(ownerId));
    }
  }, [ownerId]);

  // =========================================================================

  return (
    <div className=" min-vh-100 ">
      {isLoading ? (
        <Loading />
      ) : (
        <div
          className={`container mx-auto p-4   ${
            isDark ? "bg-gray-900" : "bg-white"
          } `}
        >
          <Owner />
          <ProjectPayments />
        </div>
      )}
    </div>
  );
};

export default OwnerPayments;
