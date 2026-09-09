import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import { FiEdit, FiMail, FiMapPin, FiPhone, FiTrash2, FiUser } from 'react-icons/fi'

const profileData = {
    employee: {
        idLabel: 'Employee ID', id: 'EMP-001', name: 'Janette Dalton', email: 'janette.dalton@email.com',
        dob: '14 Feb, 1997', doj: '12 Jan, 2022', mainLabel: 'Salary', mainValue: '$4,800.00',
    },
    customer: {
        idLabel: 'Customer ID', id: 'CUS-001', name: 'Alexandra Della', email: 'alex.della@email.com',
        dob: '21 Sep, 1994', mainLabel: 'Total Sales', mainValue: '$4,860.00',
    },
    supplier: {
        idLabel: 'Supplier ID', id: 'SUP-001', name: 'Carlos Mendes', email: 'carlos@mendeselectronics.com',
        mainLabel: 'Total Purchase', mainValue: '$12,480.00',
    },
}

const ProfileCard = ({ type = 'customer', profile = {}, onDelete, onEdit }) => {
    const details = { ...profileData[type], ...profile }
    const isEmployee = type === 'employee'
    const isCustomer = type === 'customer'
    const secondaryStats = isEmployee
        ? [['DOB', details.dob], ['DOJ', details.doj], ['Status', details.status || 'Active']]
        : isCustomer
            ? [['Visits', details.visitCount || '18'], ['Items Bought', details.itemsBought || '42'], ['Status', details.status || 'Active']]
            : [['Purchases', details.purchaseCount || '24'], ['Items Purchased', details.itemsPurchased || '1260'], ['Status', details.status || 'Active']]

    return (

        <div className="card stretch stretch-full">
            <div className="card-body">
                <div className="mb-4 text-center">
                    <div className="wd-150 ht-150 mx-auto mb-3 position-relative">
                        <div className="avatar-image wd-150 ht-150 border border-5 border-gray-3">
                            <img src={details.image || details.avatar || '/images/avatar/1.png'} alt={details.name} className="img-fluid" />
                        </div>
                        <div className="wd-10 ht-10 text-success rounded-circle position-absolute translate-middle" style={{ top: "76%", right: "10px" }}>
                            <BsPatchCheckFill size={16} />
                        </div>
                    </div>
                    <div className="mb-4">
                        <span className="fs-14 fw-bold d-block">{details.name}</span>
                        <span className="fs-12 fw-normal text-muted d-block">{details.email}</span>
                        <span className="fs-12 text-muted d-block mt-1"><FiUser size={12} className="me-1" />{details.idLabel}: {details.id}</span>
                    </div>
                    <div className="fs-12 fw-normal text-muted text-center d-flex flex-wrap gap-3 mb-4">
                        {secondaryStats.map(([label, value]) => (
                            <div key={label} className="flex-fill py-3 px-3 rounded-1 border border-dashed border-gray-5">
                                <h6 className="fs-15 fw-bolder">{value}</h6>
                                <p className="fs-12 text-muted mb-0">{label}</p>
                            </div>
                        ))}
                        <div className="flex-fill py-3 px-3 rounded-1 border border-dashed border-gray-5">
                            <h6 className="fs-15 fw-bolder">{details.mainValue}</h6>
                            <p className="fs-12 text-muted mb-0">{details.mainLabel}</p>
                        </div>
                    </div>
                </div>
                <ul className="list-unstyled mb-4">
                    <li className="hstack justify-content-between mb-4">
                        <span className="text-muted fw-medium hstack gap-3"><FiMapPin size={16} />Location</span>
                        <span className="float-end text-end">{details.address || 'California, USA'}</span>
                    </li>
                    <li className="hstack justify-content-between mb-4">
                        <span className="text-muted fw-medium hstack gap-3"><FiPhone size={16} />Phone</span>
                        <span className="float-end">{details.contact || '+01 (375) 2589 645'}</span>
                    </li>
                    <li className="hstack justify-content-between mb-0">
                        <span className="text-muted fw-medium hstack gap-3"><FiMail size={16} />Email</span>
                        <span className="float-end">{details.email}</span>
                    </li>
                </ul>
                <div className="d-flex gap-2 text-center pt-4">
                    <button type="button" onClick={onDelete} className="w-50 btn btn-light-brand">
                        <FiTrash2 size={16} className='me-2' />
                        <span>Delete</span>
                    </button>
                    <button type="button" onClick={onEdit} className="w-50 btn btn-primary">
                        <FiEdit size={16} className='me-2' />
                        <span>Edit Profile</span>
                    </button>
                </div>
            </div>
        </div>


    )
}

export default ProfileCard