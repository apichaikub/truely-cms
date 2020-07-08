import React from 'react'
import { useForm } from 'react-hook-form'
import serviceApi from '../services/api'
import { ROUTER_PATH } from '../enum'
import { cleanObj } from '../utils'
import Layout from '../components/Layout'
import FormProductCreate from '../components/Dump/FormProductCreate'

const ProductsCreate = ({ history }) => {
  const { control, errors, formState, getValues, reset, handleSubmit } = useForm()

  // listener function
  const onCreateProduct = (formValues) => {
    return new Promise((resolve, reject) => {
      const params = {
        name: formValues.name,
        detail: formValues.detail,
        specifications: [],
        rating: parseFloat(formValues.rating),
      }
      const fetch = serviceApi.addProducts(params)
      fetch.then(() => resolve(history.push(ROUTER_PATH.ENUM.PRODUCT_LIST)))
      fetch.catch((error) => reject(error))
    })
  }

  // hanler function
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