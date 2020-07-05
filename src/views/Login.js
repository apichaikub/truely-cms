import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CInputGroup, CInputGroupPrepend, CInputGroupText, CRow, CAlert } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import BaseButton from '../components/Base/BaseButton'
import BaseInput from '../components/Base/BaseInput'
import { authActions } from '../store/actions'
import { ROUTER_PATH } from '../enum'

const Login = () => {
  const dispatch = useDispatch()
  const authState = useSelector(state => state.auth)
  const { control, errors, handleSubmit } = useForm()
  const [submited, setSubmit] = useState(false)

  // handler function
  const onSubmit = ({ username, password }) => {
    setSubmit(true)
    dispatch(authActions.requestGetTokens({username, password}))
  }

  // if user is already logged in, then redirect to product pages
  if(authState.loggedin) {
    return <Redirect to={ROUTER_PATH.ENUM.PRODUCTS} />
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit(onSubmit)}>
                    <h1>Truely - CMS</h1>
                    <p className="text-muted">if you don't have an account please contact an admin.</p>
                    { authState.error && (
                      <CAlert className="py-3 mt-2" color="danger">
                        Username or password is incorrect.
                      </CAlert>
                    )}
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <BaseInput
                        type="text"
                        name="username"
                        placeholder="Username"
                        defaultValue="admin1"
                        control={control}
                        rules={{required: true}}
                        invalid={!!errors.username}
                        invalidMessage="Please enter your username"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <BaseInput
                        type="password"
                        name="password"
                        placeholder="Password"
                        defaultValue="123456"
                        control={control}
                        rules={{required: true}}
                        invalid={!!errors.password}
                        invalidMessage="Please enter your password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="12">
                        <BaseButton type="submit" color="success" className="px-4 col-12" loading={submited}>
                          Login
                        </BaseButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login