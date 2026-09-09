import React from 'react'
import { FiEye } from 'react-icons/fi'

const defaultVisits = [
    { id: 1, date: '21 Sep, 2023', invoice: '#INV-987456', total: '$249.99', products: 4 },
    { id: 2, date: '12 Aug, 2023', invoice: '#INV-987112', total: '$180.50', products: 3 },
    { id: 3, date: '05 Jul, 2023', invoice: '#INV-986840', total: '$420.00', products: 7 },
]

const CustomerHistoryCard = ({ visits = defaultVisits }) => (
    <div className="card stretch stretch-full">
        <div className="card-body p-0">
            <div className="p-4">
                <h5 className="fw-bold mb-1">Customer Visit History</h5>
                <span className="fs-12 text-muted">Recent invoices and purchases</span>
            </div>
            <div className="table-responsive">
                <table className="table table-hover mb-0">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Invoice Number</th>
                            <th>Total Purchase</th>
                            <th>Total Products</th>
                            <th className="text-end">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {visits.map((visit) => (
                            <tr key={visit.id}>
                                <td>{visit.date}</td>
                                <td className="fw-medium">{visit.invoice}</td>
                                <td className="fw-bold text-dark">{visit.total}</td>
                                <td>{visit.products}</td>
                                <td className="text-end"><a href="#" className="avatar-text avatar-md" title="View invoice"><FiEye /></a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
)

export default CustomerHistoryCard
