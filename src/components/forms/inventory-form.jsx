import React, { useState } from 'react'
import SelectDropdown from '@/components/shared/SelectDropdown'
import useImageUpload from '@/hooks/useImageUpload'
import { FiCamera, FiPlus, FiTrash2 } from 'react-icons/fi'

const statusOptions = [
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
    { label: 'Discontinued', value: 'discontinued' },
]

const sampleInventory = {
        productName: 'iPhone 14 Pro Max',
        productId: 'PROD-001',
        stock: 45,
        sold: 18,
        purchasePrice: '600.00',
        sellingPrice: '899.00',
        status: 'Active',
        image: '/images/gallery/4.png',
        supplierName: 'Carlos Mendes',
        supplierId: 'SUP-001',
        contact: '+55 11 98765-4321',
        purchaseHistory: [
            { id: 1, date: '2024-01-15', price: '580.00', quantity: '30' },
            { id: 2, date: '2024-04-20', price: '600.00', quantity: '25' },
        ],
    }

const InventoryFormContent = ({ readOnly = false }) => {
    const [selectedStatus, setSelectedStatus] = useState(
        statusOptions.find((option) => option.label === sampleInventory.status)
    );
    const [purchaseHistory, setPurchaseHistory] = useState(sampleInventory.purchaseHistory);
    const { handleImageUpload, uploadedImage } = useImageUpload()

    const addPurchaseRow = () => {
        setPurchaseHistory((rows) => [
            ...rows,
            { id: Date.now(), date: '', price: '', quantity: '' },
        ])
    }

    const removePurchaseRow = (id) => {
        setPurchaseHistory((rows) => rows.filter((row) => row.id !== id))
    }

    const updatePurchaseRow = (id, field, value) => {
        setPurchaseHistory((rows) => rows.map((row) => (
            row.id === id ? { ...row, [field]: value } : row
        )))
    }


    return (
        <>
            <div className="col-xl-6">
                <div className="card stretch stretch-full">
                    <div className="card-header">
                        <h5 className="fw-bold mb-0">Product Details</h5>
                    </div>
                    <div className="card-body">
                        <div className="mb-4">
                            <label className="form-label">Product Name <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" placeholder="Product name" defaultValue={sampleInventory.productName} readOnly={readOnly} />
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <label className="form-label">Product ID <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="Product ID" defaultValue={sampleInventory.productId} readOnly={readOnly} />
                            </div>
                            <div className="col-lg-6 mb-4">
                                <label className="form-label">Status</label>
                                {readOnly ? (
                                    <input type="text" className="form-control" value={selectedStatus?.label || sampleInventory.status} readOnly />
                                ) : (
                                    <SelectDropdown
                                        options={statusOptions}
                                        selectedOption={selectedStatus}
                                        defaultSelect="active"
                                        onSelectOption={setSelectedStatus}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <label className="form-label">Stock Count</label>
                                <input type="number" className="form-control" placeholder="0" min="0" defaultValue={sampleInventory.stock} readOnly={readOnly} />
                            </div>
                            <div className="col-lg-6 mb-4">
                                <label className="form-label">Sold Count</label>
                                <input type="number" className="form-control" placeholder="0" min="0" defaultValue={sampleInventory.sold} readOnly={readOnly} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <label className="form-label">Current Purchase Price</label>
                                <input type="number" className="form-control" placeholder="0.00" min="0" step="0.01" defaultValue={sampleInventory.purchasePrice} readOnly={readOnly} />
                            </div>
                            <div className="col-lg-6 mb-4">
                                <label className="form-label">Current Selling Price</label>
                                <input type="number" className="form-control" placeholder="0.00" min="0" step="0.01" defaultValue={sampleInventory.sellingPrice} readOnly={readOnly} />
                            </div>
                        </div>
                        <div>
                            <label className="form-label">Product Image</label>
                            <label htmlFor={readOnly ? undefined : "product-image"} className={`d-flex align-items-center gap-3 border border-dashed rounded p-3 ${readOnly ? '' : 'c-pointer'}`}>
                                <div className="avatar-image avatar-lg rounded">
                                    <img src={uploadedImage || sampleInventory.image} className="img-fluid rounded h-100 w-100" alt="Product preview" />
                                </div>
                                <span className="fs-12 text-muted">{readOnly ? 'Product image' : <><FiCamera className="me-2" /> Upload product image</>}</span>
                                {!readOnly && <input id="product-image" className="d-none" type="file" accept="image/*" onChange={handleImageUpload} />}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="card stretch stretch-full">
                    <div className="card-header">
                        <h5 className="fw-bold mb-0">Supplier Details</h5>
                    </div>
                    <div className="card-body">
                        <div className="mb-4">
                            <label className="form-label">Supplier Name <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" placeholder="Supplier name" defaultValue={sampleInventory.supplierName} readOnly={readOnly} />
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <label className="form-label">Supplier ID</label>
                                <input type="text" className="form-control" placeholder="Supplier ID" defaultValue={sampleInventory.supplierId} readOnly={readOnly} />
                            </div>
                            <div className="col-lg-6 mb-4">
                                <label className="form-label">Contact</label>
                                <input type="text" className="form-control" placeholder="Phone or email" defaultValue={sampleInventory.contact} readOnly={readOnly} />
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <div>
                                <h6 className="fw-bold mb-1">Purchase Price History</h6>
                                <span className="fs-12 text-muted">Track previous supplier prices</span>
                            </div>
                            {!readOnly && <button type="button" className="btn btn-sm btn-primary" onClick={addPurchaseRow}>
                                <FiPlus className="me-1" /> Add Row
                            </button>}
                        </div>
                        <div className="table-responsive">
                            <table className="table table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Purchase Price</th>
                                        <th>Quantity</th>
                                        <th className="text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {purchaseHistory.map((row) => (
                                        <tr key={row.id}>
                                            <td>
                                                <input type="date" className="form-control" value={row.date} onChange={(event) => updatePurchaseRow(row.id, 'date', event.target.value)} readOnly={readOnly} />
                                            </td>
                                            <td>
                                                <input type="number" className="form-control" placeholder="0.00" min="0" step="0.01" value={row.price} onChange={(event) => updatePurchaseRow(row.id, 'price', event.target.value)} readOnly={readOnly} />
                                            </td>
                                            <td>
                                                <input type="number" className="form-control" placeholder="0" min="0" value={row.quantity} onChange={(event) => updatePurchaseRow(row.id, 'quantity', event.target.value)} readOnly={readOnly} />
                                            </td>
                                            <td className="text-end">
                                                {!readOnly && <button type="button" className="avatar-text avatar-md text-danger border-0 bg-transparent" title="Remove row" onClick={() => removePurchaseRow(row.id)} disabled={purchaseHistory.length === 1}>
                                                    <FiTrash2 />
                                                </button>}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InventoryFormContent