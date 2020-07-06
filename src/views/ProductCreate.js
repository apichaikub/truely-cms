import React from 'react'
import { useForm } from 'react-hook-form'
import { cleanObj } from '../utils'
import Layout from '../components/Layout'
import FormProductCreate from '../components/Dump/FormProductCreate'

const ProductsCreate = () => {
  const { control, errors, formState, getValues, reset, handleSubmit } = useForm()

  const onCreateProduct = (formValues) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('formValues', formValues)
        resolve()
      }, 5000)
    })
  }

  const handleCancel = () => {
    const formValues = getValues()
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