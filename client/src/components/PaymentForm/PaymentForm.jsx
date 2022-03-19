import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import PaymentFormSchema from "../../schemas/paymentForm.schema";
import TextInput from "../TextInput/TextInput";
import cls from './payment_form.module.css'
import {Button} from "@mui/material";
import {useSnackbar} from "notistack";
import axios from 'axios'

const PaymentForm = () => {
  const [inputs, setInputs] = useState({})
  const {enqueueSnackbar} = useSnackbar();

  const handleInput = async (e) => {
    const {name, value} = e.target
    setInputs(prev => ({...inputs, [name]: value}))
  }

  const handleSubmit = async (values, {setSubmitting}) => {
    try {
      const res = await axios.post('http://localhost:4000/payment', values)
      console.log(res)
      enqueueSnackbar('Форма успешно отпралена!', {variant: "success"})
      setSubmitting(false)
    } catch (err) {
      enqueueSnackbar('Произошла ошибка', {variant: "error"})
    }
  }
  return (
    <Formik
      initialValues={{card_number: '', expiration_date: '', cvv: '', amount: ''}}
      validationSchema={PaymentFormSchema}
      validateOnMount={true}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Form className={cls.formWrap}>
          <TextInput label="Card Number" name="card_number" handleChange={handleInput}/>
          <TextInput label="Expiration Date" name="expiration_date" handleChange={handleInput}/>
          <TextInput label="CVV" name="cvv" handleChange={handleInput}/>
          <TextInput label="Amount" name="amount" handleChange={handleInput}/>
          <Button variant="contained" type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}>Submit</Button>
        </Form>
      )}

    </Formik>
  );
};

export default PaymentForm