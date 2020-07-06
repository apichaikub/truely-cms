import React from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../components/Layout'
import FormProductCreate from '../components/Dump/FormProductCreate'

const ProductsCreate = () => {
  const { control, errors, formState, reset, handleSubmit } = useForm()

  const onCreateProduct = (form) => {
    console.log('form', form)
  }

  return (
    <Layout>
      <FormProductCreate
        control={control}
        errors={errors}
        formState={formState}
        reset={reset}
        onSubmit={handleSubmit(onCreateProduct)}
      />
    </Layout>
  )
}

export default ProductsCreate