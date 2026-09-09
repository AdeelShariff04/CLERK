import React from 'react'
import { FiEye } from 'react-icons/fi'

const defaultOrders = [
    { id: 1, date: '20 Sep, 2023', invoice: '#PO-987456', total: '$3,560.00', products: 5 },
    { id: 2, date: '14 Aug, 2023', invoice: '#PO-987112', total: '$2,480.50', products: 3 },
    { id: 3, date: '08 Jul, 2023', invoice: '#PO-986840', total: '$5,120.00', products: 8 },
]

const SupplierHistoryCard = ({ orders = defaultOrders }) => (
    <div className="card stretch stretch-full">
        <div className="card-body p-0">
            <div className="p-4">
                <h5 className="fw-bold mb-1">Supplier Order History</h5>
                <span className="fs-12 text-muted">Recent supplier orders and invoices</span>
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
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.date}</td>
                                <td className="fw-medium">{order.invoice}</td>
                                <td className="fw-bold text-dark">{order.total}</td>
                                <td>{order.products}</td>
                                <td className="text-end"><a href="#" className="avatar-text avatar-md" title="View invoice"><FiEye /></a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
)

export default SupplierHistoryCard
