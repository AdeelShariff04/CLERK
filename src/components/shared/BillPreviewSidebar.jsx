import React from 'react'
import { FiArrowLeft, FiX } from 'react-icons/fi'

const invoiceItems = [
    { name: 'Wireless Keyboard', quantity: 1, price: '$45.00' },
    { name: 'USB-C Cable', quantity: 2, price: '$12.50' },
    { name: 'Laptop Stand', quantity: 1, price: '$58.00' },
]

const supplierItems = [
    { name: 'iPhone 14 Pro Max', quantity: 10, price: '$600.00' },
    { name: 'Wireless Headphones', quantity: 15, price: '$205.00' },
    { name: 'Smart Watch', quantity: 8, price: '$550.00' },
]

const BillPreviewSidebar = ({ type = 'invoice', bill, onClose }) => {
    const isSupplierBill = type === 'supplier'
    const items = isSupplierBill ? supplierItems : invoiceItems
    const fallbackBill = isSupplierBill
        ? {
            number: '#PO-987456',
            date: '24 Apr, 2024 03:51 PM',
            name: 'Mendes Electronics',
            contact: 'Carlos Mendes',
            payment: 'Account',
            subtotal: '$10,215.00',
            total: '$10,215.00',
        }
        : {
            number: '#INV-987456',
            date: '24 Apr, 2024 03:51 PM',
            name: 'Alexandra Della',
            contact: 'CUS-001',
            payment: 'Cash',
            subtotal: '$128.00',
            total: '$128.00',
        }
    const details = { ...fallbackBill, ...bill }

    return (
        <>
            <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-25" style={{ zIndex: 1040 }} onClick={onClose} />
            <aside className="position-fixed top-0 end-0 h-100 bg-white shadow-lg overflow-auto" style={{ width: 'min(440px, 100vw)', zIndex: 1050 }} aria-label={isSupplierBill ? 'Supplier bill preview' : 'Sales bill preview'}>
                <div className="p-4 border-bottom hstack justify-content-between sticky-top bg-white">
                    <div className="hstack gap-2">
                        <button type="button" className="avatar-text avatar-md border-0 bg-transparent" onClick={onClose} title="Close bill preview">
                            <FiArrowLeft />
                        </button>
                        <div>
                            <h5 className="fw-bold mb-1">{isSupplierBill ? 'Supplier Bill' : 'Sales Bill'}</h5>
                            <span className="fs-12 text-muted">{details.number}</span>
                        </div>
                    </div>
                    <button type="button" className="avatar-text avatar-md border-0 bg-transparent" onClick={onClose} title="Close">
                        <FiX />
                    </button>
                </div>

                <div className="p-4">
                    <div className="text-center border-bottom pb-4 mb-4">
                        <img src="/images/logo-full.png" alt="Clerk" style={{ maxWidth: '150px', maxHeight: '42px' }} className="mb-3" />
                        <h6 className="fw-bold mb-1">{isSupplierBill ? 'Original Purchase Receipt' : 'Original Sales Receipt'}</h6>
                        <span className="fs-12 text-muted d-block">{details.date}</span>
                    </div>

                    <div className="row g-3 mb-4">
                        <div className="col-7">
                            <span className="fs-11 text-muted d-block">{isSupplierBill ? 'Supplier' : 'Customer'}</span>
                            <span className="fw-semibold d-block">{details.name}</span>
                        </div>
                        <div className="col-5 text-end">
                            <span className="fs-11 text-muted d-block">{isSupplierBill ? 'Contact' : 'Customer ID'}</span>
                            <span className="fw-semibold d-block">{details.contact}</span>
                        </div>
                    </div>

                    <div className="table-responsive mb-4">
                        <table className="table table-sm align-middle mb-0">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th className="text-center">Qty</th>
                                    <th className="text-end">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.name}>
                                        <td>{item.name}</td>
                                        <td className="text-center">{item.quantity}</td>
                                        <td className="text-end">{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="border-top pt-3">
                        <div className="hstack justify-content-between mb-2"><span className="text-muted">Subtotal</span><span>{details.subtotal}</span></div>
                        <div className="hstack justify-content-between mb-2"><span className="text-muted">Payment</span><span>{details.payment}</span></div>
                        <div className="hstack justify-content-between pt-2 border-top"><span className="fw-bold">Total</span><span className="fw-bold fs-16">{details.total}</span></div>
                    </div>
                    <p className="text-center fs-12 text-muted mt-5 mb-0">Thank you for your business.</p>
                </div>
            </aside>
        </>
    )
}

export default BillPreviewSidebar
