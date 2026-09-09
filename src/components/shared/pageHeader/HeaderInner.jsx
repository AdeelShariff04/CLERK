import React from 'react'
import { FiSave, FiUserPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const HeaderInner = ({ listName, to }) => {
    return (
        <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
            <button type="button" className="btn btn-primary">
                <FiSave size={16} className='me-2' />
                <span>Save {listName}</span>
            </button>
        </div>
    )
}

export default HeaderInner