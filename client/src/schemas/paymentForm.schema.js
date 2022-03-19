import * as Yup from "yup";

const errors = {
  card_number: 'Номер карты может содержать только числовые значения',
  exp_date: 'Дата должна быть записана в формате MM/YYYY',
  cvv: 'CVV должен состоять из 3 цифр',
  amount: 'Сумма может содержать только числовые значения',
  required: 'Это поле обязательно для заполнения',
  length: 'Это поле должно содержать 16 символов'
}

const PaymentFormSchema = Yup.object().shape({
  card_number: Yup.string().matches(/^[0-9]*$/gi, errors.card_number).length(16, errors.length).required(errors.required),
  expiration_date: Yup.string().matches(/^[0-9]{2}\/[0-9]{4}$/gi, errors.exp_date).required(errors.required),
  cvv: Yup.string().matches(/^[0-9]{3}$/gi, errors.cvv).required(errors.required),
  amount: Yup.string().matches(/^[0-9]*$/gi, errors.amount).required(errors.required),
});
export default PaymentFormSchema;