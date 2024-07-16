import * as Yup from "yup";

const validationSchema = (params) => {
  let baseSchema = Yup.object({
    project_name: Yup.string().min(2).required("required"),
    ref_number_old: Yup.string().matches(
      /^FES-\d+-\d+$/,
      "Invalid ref number format. It should match the pattern FES-###-###."
    ),
    client_id: Yup.string().length(24).required("required"),
    type_id: Yup.string().length(24).required("required"),

    contract_expiry_date: Yup.date().required("required"),
    register_contract_date: Yup.date(),
    internal_contract_date: Yup.date().required("required"),
    istefa_certificate: Yup.string().trim().required("required"),
    first_visit: Yup.date().required("required"),
    second_visit: Yup.date().required("required"),
    third_visit: Yup.date().required("required"),
    fourth_visit: Yup.date().required("required"),
    stickers: Yup.date(),
    file_number: Yup.string().trim(),
    // attachments: Yup.array().max(10, "You can only upload up to 10 files"),
  });

  if (!params.projectId) {
    baseSchema = baseSchema.shape({
      payment: Yup.number().min(0).required("Payment is required"),
      received: Yup.number().min(0).required("Received is required"),
      balances: Yup.array().of(
        Yup.object().shape({
          balance_amount: Yup.number().min(
            0,
            "Balance amount must be greater than 0"
          ),
          balance_date: Yup.date(),
        })
      ),
    });
  }

  return baseSchema;
};

export default validationSchema;
