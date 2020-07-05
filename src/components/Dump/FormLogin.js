import React from 'react'
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CAlert,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import BaseInput from '../Base/BaseInput'
import BaseButton from '../Base/BaseButton'

const FormLogin = ({ authState, control, errors, submited, onSubmit }) => (
  <div className="c-app c-default-layout flex-row align-items-center">
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard className="p-4">
              <CCardBody>
                <CForm onSubmit={onSubmit}>
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

export default FormLogin