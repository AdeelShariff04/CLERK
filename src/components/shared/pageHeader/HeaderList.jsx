import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom';


const HeaderList = ({ listName, to }) => {
    return (
        <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
            <Link to={to} className="btn btn-primary">
                <FiPlus size={16} className='me-2' />
                <span>Add {listName}</span>
            </Link>
        </div>
    )
}

export default HeaderList