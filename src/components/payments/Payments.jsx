import React, { useState } from "react";

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [totalAmount, setTotalAmount] = useState(1000); // Total amount
  const [amountPaid, setAmountPaid] = useState("");
  const [paymentDate, setPaymentDate] = useState("");

  const handleAddPayment = () => {
    if (amountPaid && paymentDate) {
      setPayments([
        ...payments,
        { amount: parseFloat(amountPaid), date: paymentDate },
      ]);
      setAmountPaid("");
      setPaymentDate("");
    }
  };

  const totalPaid = payments.reduce((sum, payment) => sum + payment.amount, 0);
  const remainingAmount = totalAmount - totalPaid;
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Payment Table</h1>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Paid Amount</th>
            <th className="px-4 py-2">Payment Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{payment.amount}</td>
              <td className="border px-4 py-2">{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mb-4">
        <input
          type="number"
          className="border px-4 py-2 mr-2"
          placeholder="Paid Amount"
          value={amountPaid}
          onChange={(e) => setAmountPaid(e.target.value)}
        />
        <input
          type="date"
          className="border px-4 py-2 mr-2"
          value={paymentDate}
          onChange={(e) => setPaymentDate(e.target.value)}
        />
        <button
          onClick={handleAddPayment}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Add Payment
        </button>
      </div>
      <div>
        <p>Total Amount: {totalAmount}</p>
        <p>Total Paid: {totalPaid}</p>
        <p>Remaining Amount: {remainingAmount}</p>
      </div>
    </div>
  );
};

export default Payments;
