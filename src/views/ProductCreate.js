import React from 'react'
import { useForm } from 'react-hook-form'
import { cleanObj } from '../utils'
import Layout from '../components/Layout'
import FormProductCreate from '../components/Dump/FormProductCreate'

const ProductsCreate = () => {
  const { control, errors, formState, reset, handleSubmit } = useForm()

  const onCreateProduct = (form) => {
    console.log('form', form)
  }

  const handleCancel = () => {
    const formValues = control.getValues()
    const cleanForm = cleanObj(formValues, "")
    reset(cleanForm)
  }

  return (
    <Layout>
      <FormProductCreate
        control={control}
        errors={errors}
        formState={formState}
        onSubmit={handleSubmit(onCreateProduct)}
        onCancel={handleCancel}
      />
    </Layout>
  )
}

export default ProductsCreate