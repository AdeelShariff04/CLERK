import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import Pagination from '@/components/shared/Pagination'
import { employeeData } from '@/utils/fackData/employeeData'
import { FiEdit, FiEye, FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const EmployeeList = ({ title }) => {
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
                                    <th>Employee</th>
                                    <th>Employee ID</th>
                                    <th>Contact</th>
                                    <th>Age</th>
                                    <th>DOJ</th>
                                    <th>Salary</th>
                                    <th>Status</th>
                                    <th className="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employeeData.map((employee, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="avatar-image">
                                                    <img src={employee.avatar} className="img-fluid" alt={employee.name} />
                                                </div>
                                                <div>
                                                    <span className="fw-bold d-block">{employee.name}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="fw-medium">{employee.id}</td>
                                        <td>{employee.contact}</td>
                                        <td>{employee.age}</td>
                                        <td>{employee.doj}</td>
                                        <td className="fw-bold text-dark">{employee.salary}</td>
                                        <td>
                                            <span className={`badge bg-soft-${employee.statusColor} text-${employee.statusColor}`}>
                                                {employee.status}
                                            </span>
                                        </td>
                                        <td className="text-end">
                                            <div className="hstack gap-2 justify-content-end">
                                                <Link to="/employees/view" className="avatar-text avatar-md" title="View">
                                                    <FiEye />
                                                </Link>
                                                <Link to="/employees/edit" className="avatar-text avatar-md" title="Edit">
                                                    <FiEdit />
                                                </Link>
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

export default EmployeeList
