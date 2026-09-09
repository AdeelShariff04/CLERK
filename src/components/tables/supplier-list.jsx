import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import Pagination from '@/components/shared/Pagination'
import { supplierData } from '@/utils/fackData/supplierData'
import { FiEdit, FiEye, FiFileText, FiTrash2, FiClock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const SupplierList = () => {
    const data = supplierData.trackerProjects
    return (
        <div className="col-lg-12">
            <div className="card stretch stretch-full">
                <CardHeader title={"Supplier List"} />

                <div className="card-body custom-card-action p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">Supplier</th>
                                    <th scope="col">Supplier ID</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Purchase Count</th>
                                    <th scope="col">Purchase Amount</th>
                                    <th scope="col">Status</th>
                                    <th scope="col" className="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((supplier, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="hstack gap-3">
                                                    <div className="avatar-text bg-soft-primary text-primary">
                                                        <FiClock size={16} />
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <span className="fw-bold d-block mb-1">{supplier.supplierName}</span>
                                                            <span className="fs-12 text-muted d-block">{supplier.companyName}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="fw-medium">{supplier.supplierId}</td>
                                            <td>
                                                <span className="d-block">{supplier.contact}</span>
                                            </td>
                                            <td>{supplier.purchaseCount}</td>
                                            <td className="fw-bold">{supplier.purchaseAmount}</td>
                                            <td>
                                                <span className={`badge bg-soft-${supplier.statusColor} text-${supplier.statusColor}`}>
                                                    {supplier.status}
                                                </span>
                                            </td>
                                            <td className="text-end">
                                                <div className="hstack gap-2 justify-content-end">
                                                    <Link to="/supplier/view" className="avatar-text avatar-md" title="View">
                                                        <FiEye />
                                                    </Link>
                                                    <a href="#" className="avatar-text avatar-md">
                                                        <FiFileText strokeWidth={1.6} />
                                                    </a>
                                                    <a href="#" className="avatar-text avatar-md">
                                                        <FiEdit strokeWidth={1.6} />
                                                    </a>
                                                    <a href="#" className="avatar-text avatar-md">
                                                        <FiTrash2 strokeWidth={1.6} />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-footer">
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default SupplierList
