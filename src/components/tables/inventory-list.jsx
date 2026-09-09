import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import { inventoryData } from '@/utils/fackData/inventoryData'
import { FiEdit, FiEye, FiTrash2 } from 'react-icons/fi'
import Pagination from '@/components/shared/Pagination'
import { Link } from 'react-router-dom'



const InventoryList = ({ title }) => {
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
                                    <th>Product</th>
                                    <th>Supplier</th>
                                    <th>Stock</th>
                                    <th>Cost Price</th>
                                    <th>Selling Price</th>
                                    <th>Status</th>
                                    <th className="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inventoryData.map((product, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="hstack gap-3">
                                                <div className="avatar-image avatar-lg rounded">
                                                    <img className="img-fluid" src={product.image} alt={product.name} />
                                                </div>
                                                <div>
                                                    <span className="d-block">{product.name}</span>
                                                    <span className="fs-12 text-muted d-block">ID: {product.productId}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="d-block mb-1">{product.supplierFirstname}</span>
                                            <span className="fs-12 text-muted d-block">ID: {product.supplierId}</span>
                                        </td>
                                        <td>
                                            <span className="text-dark fw-bold">{product.stock}</span>
                                        </td>
                                        <td>
                                            <span className="text-dark fw-bold">{product.costPrice}</span>
                                        </td>
                                        <td className="text-dark fw-bold">{product.sellingPrice}</td>
                                        <td>
                                            <span className={`badge bg-soft-${product.color} text-${product.color}`}>{product.status}</span>
                                        </td>
                                        <td className="text-end">
                                            <div className="hstack gap-2 justify-content-end">
                                                <Link to="/inventory/view" className="avatar-text avatar-md" title="View">
                                                    <FiEye />
                                                </Link>
                                                <Link to="/inventory/edit" className="avatar-text avatar-md" title="Edit">
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

export default InventoryList
