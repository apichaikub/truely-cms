import React from 'react'
import BaseAction from './BaseAction'
import BaseButton from './BaseButton'
import './BaseActionSubmit.scss'

const BaseActionSubmit = (props) => {
  const {
    submitText = 'Submit',
    cancelText = 'Cancel',
    loading = false,
    disabled = false,
    onClickSubmit = () => {},
    onClickCancel = () => {}
  } = props

  return (
    <div className="base-action-create">
      <BaseAction>
        <BaseButton
            loading={loading}
            disabled={loading || disabled}
            type="submit"
            size="md"
            color="success"
            onClick={(e) => onClickSubmit(e)}
        >
          { submitText }
        </BaseButton>
        <BaseButton
            disabled={loading || disabled}
            type="reset"
            size="md"
            color="secondary"
            onClick={(e) => onClickCancel(e)}
        >
          { cancelText }
        </BaseButton>
      </BaseAction>
    </div>
  )
}

export default BaseActionSubmit