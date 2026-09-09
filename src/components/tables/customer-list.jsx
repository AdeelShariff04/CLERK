import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import Pagination from '@/components/shared/Pagination'
import { customerData } from '@/utils/fackData/customerData'
import { FiEdit, FiEye, FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const CustomerList = ({ title }) => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    if (isRemoved) {
        return null;
    }

    return (
        <div className="col-xxl-12">
            <div className={`card stretch stretch-full widget-tasks-content ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <CardHeader title={title} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} />

                <div className="card-body custom-card-action p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead>
                                <tr>
                                    <th>Customer</th>
                                    <th>Customer ID</th>
                                    <th>Contact</th>
                                    <th>Total Orders</th>
                                    <th>Total Spent</th>
                                    <th>Last Visit</th>
                                    <th>Status</th>
                                    <th className="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customerData.map((customer, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="avatar-image">
                                                    <img src={customer.avatar} className="img-fluid" alt="Customer" />
                                                </div>
                                                <div>
                                                    <span className="fw-bold d-block">{customer.name}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="fw-medium">{customer.id}</td>
                                        <td>{customer.contact}</td>
                                        <td>{customer.totalOrders}</td>
                                        <td className="fw-bold text-dark">{customer.totalSpent}</td>
                                        <td>
                                            <span className="d-block">{customer.lastVisit}</span>
                                            <span className="fs-12 text-muted">{customer.invoiceId}</span>
                                        </td>
                                        <td>
                                            <span className={`badge bg-soft-${customer.statusColor} text-${customer.statusColor}`}>
                                                {customer.status}
                                            </span>
                                        </td>
                                        <td className="text-end">
                                            <div className="hstack gap-2 justify-content-end">
                                                <Link to="/customers/view" className="avatar-text avatar-md" title="View">
                                                    <FiEye />
                                                </Link>
                                                <a href="#" className="avatar-text avatar-md" title="Edit">
                                                    <FiEdit />
                                                </a>
                                                <a href="#" className="avatar-text avatar-md" title="Delete">
                                                    <FiTrash2 />
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="card-footer"> <Pagination /></div>
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default CustomerList
