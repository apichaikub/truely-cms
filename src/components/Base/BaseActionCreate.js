import React from 'react'
import BaseAction from './BaseAction'
import BaseButton from './BaseButton'
import './BaseActionCreate.scss'

const FormProductCreate = ({ onClickCreated = () => {}, onClickCancel = () => {} }) => {
  return (
    <div className="base-action-create">
        <BaseAction>
            <BaseButton
                size="md"
                color="success"
                onClick={(e) => onClickCreated(e)}
            >
                Create
            </BaseButton>
            <BaseButton
                size="md"
                color="secondary"
                onClick={(e) => onClickCancel(e)}
            >
                Cancel
            </BaseButton>
        </BaseAction>
    </div>
  )
}

export default FormProductCreate