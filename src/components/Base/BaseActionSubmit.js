import React from 'react'
import BaseAction from './BaseAction'
import BaseButton from './BaseButton'
import './BaseActionSubmit.scss'

const BaseActionSubmit = ({ loading, disabled, onClickSubmit = () => {}, onClickCancel = () => {} }) => {
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
                Create
            </BaseButton>
            <BaseButton
                disabled={loading || disabled}
                type="reset"
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

export default BaseActionSubmit