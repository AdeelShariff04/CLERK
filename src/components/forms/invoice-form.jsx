import React, { useEffect, useState } from 'react'
import SelectDropdown from '@/components/shared/SelectDropdown'
import { currencyOptionsData } from '@/utils/fackData/currencyOptionsData'
import { customerData } from '@/utils/fackData/customerData'
import { inventoryData } from '@/utils/fackData/inventoryData'
import { FiCamera, FiInfo, FiTrash2 } from 'react-icons/fi'
import { BsCreditCardFill } from 'react-icons/bs'
import DatePicker from 'react-datepicker'
import useDatePicker from '@/hooks/useDatePicker'
import useImageUpload from '@/hooks/useImageUpload'
import Dropdown from '@/components/shared/Dropdown'


const previtems = [
    {
        id: 1,
        product: null,
        qty: 1,
        price: 0,
        discount: 0,
    }
]

const customerOptions = customerData.map((customer) => ({
    value: customer.id,
    label: `${customer.name} (${customer.id})`,
}))

const productOptions = inventoryData.map((product) => ({
    value: product.productId,
    label: `${product.productId} - ${product.name}`,
    price: Number.parseFloat(product.sellingPrice.replace(/[^0-9.]/g, '')),
}))

const InvoiceFormContent = ({ isEdit = false }) => {
    const { startDate, setStartDate, renderFooter } = useDatePicker();
    const { handleImageUpload, uploadedImage } = useImageUpload()
    const { handleImageUpload: handleAccountBillUpload, uploadedImage: accountBillImage } = useImageUpload()
    const [selectedCustomer, setSelectedCustomer] = useState(null)
    const [selectedOption, setSelectedOption] = useState(null)
    const [paymentMethod, setPaymentMethod] = useState('Card')
    const [items, setItems] = useState(isEdit ? [
        { id: 1, product: productOptions[0], qty: 2, price: productOptions[0].price, discount: 5 },
        { id: 2, product: productOptions[1], qty: 1, price: productOptions[1].price, discount: 0 },
    ] : previtems);
    const [amountReceived, setAmountReceived] = useState('');
    const [invoiceNumber, setInvoiceNumber] = useState(isEdit ? '#INV-2026-001' : '');

    useEffect(() => {
        if (isEdit) {
            setStartDate(new Date('2026-09-09T10:30:00'));
        }
    }, [isEdit, setStartDate]);


    const addItem = () => {
        const newItem = {
            id: items.length + 1,
            product: null,
            qty: 1,
            price: 0,
            discount: 0,
        };
        setItems([...items, newItem]);
    };

    const handleInputChange = (id, field, value) => {
        const updatedItems = items.map(item => {
            if (item.id === id) {
                const updatedItem = { ...item, [field]: value };
                if (field === 'product') {
                    updatedItem.price = value?.price || 0;
                }
                return updatedItem;
            }
            return item;
        });
        setItems(updatedItems);
    };

    const subTotal = items.reduce((accumulator, currentValue) => {
        return accumulator + (currentValue.price * currentValue.qty);
    }, 0);
    const totalDiscount = items.reduce((accumulator, currentValue) => (
        accumulator + (currentValue.price * currentValue.qty * (Number(currentValue.discount) || 0)) / 100
    ), 0);
    const finalBillAmount = Math.max(subTotal - totalDiscount, 0);
    const changeToReturn = Math.max((Number(amountReceived) || 0) - finalBillAmount, 0);
    return (
        <>
            <div className="col-xl-8">
                <div className="card invoice-container">
                    <div className="card-header">
                        <h5>Invoice Create</h5>
                    </div>
                    <div className="card-body p-0">
                        <div className="px-4 pt-4">
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                        <label className="form-label">Issue Date:</label>
                                        <div className='input-group date '>
                                            <DatePicker
                                                placeholderText='Issue date...'
                                                selected={startDate}
                                                showTimeSelect
                                                timeFormat="HH:mm"
                                                dateFormat="yyyy-MM-dd h:mm aa"
                                                showPopperArrow={false}
                                                onChange={(date) => setStartDate(date)}
                                                className='form-control'
                                                popperPlacement="bottom-start"
                                                calendarContainer={({ children }) => (
                                                    <div className='bg-white react-datepicker'>
                                                        {children}
                                                        {renderFooter("start")}
                                                    </div>
                                                )}
                                            />
                                        </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                        <label className="form-label">Invoice Number:</label>
                                        <div className='input-group date '>
                                            <input type="text" className="form-control" placeholder="#INV-2026-001" value={invoiceNumber} onChange={(event) => setInvoiceNumber(event.target.value)} />
                                        </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                        <label className="form-label">Customer</label>
                                        <SelectDropdown
                                            options={customerOptions}
                                            selectedOption={selectedCustomer}
                                            defaultSelect="CUS-001"
                                            onSelectOption={setSelectedCustomer}
                                        />
                                </div>
                            </div>
                        </div>
                        <hr className="border-dashed" />
                        <div className="px-4 clearfix proposal-table" >
                            <div className="mb-4 d-flex align-items-center justify-content-between">
                                <div>
                                    <h6 className="fw-bold">Add Items:</h6>
                                    <span className="fs-12 text-muted">Add items to invoice</span>
                                </div>
                            </div>
                            <div className="table-responsive" style={{ zIndex: 1 }}>
                                <table className="table table-bordered invoice-item-table" id="tab_logic">
                                    <thead>
                                        <tr className="single-item">
                                            <th className="text-center">#</th>
                                            <th className="text-center wd-300">Product</th>
                                            <th className="text-center wd-100">Qty</th>
                                            <th className="text-center wd-150">Price</th>
                                            <th className="text-center wd-150">Discount %</th>
                                            <th className="text-center wd-150">Total</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            items.map(({ id, price, product, qty, discount }, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{id}</td>
                                                        <td className="product-dropdown-cell" style={{ zIndex: 2 }}>
                                                            <SelectDropdown
                                                                options={productOptions}
                                                                selectedOption={product}
                                                                defaultSelect={product?.value}
                                                                onSelectOption={(option) => handleInputChange(id, 'product', option)}
                                                            />
                                                        </td>
                                                        <td><input type="number" name="qty" placeholder="Qty" className="form-control qty" step="1" min="1" value={qty} onChange={(e) => handleInputChange(id, 'qty', Number(e.target.value))} /></td>
                                                        <td><input type="number" name="price" placeholder="Auto" className="form-control price" value={price.toFixed(2)} readOnly /></td>
                                                        <td><input type="number" name="discount" placeholder="0" className="form-control" step="0.01" min="0" max="100" value={discount} onChange={(e) => handleInputChange(id, 'discount', Number(e.target.value))} /></td>
                                                        <td><input type="number" name="total" placeholder="0.00" className="form-control total" readOnly value={(price * qty * (1 - (discount || 0) / 100)).toFixed(2)} /></td>
                                                        <td className="text-center">
                                                            <button type="button" className="avatar-text avatar-md text-danger border-0 bg-transparent" title="Remove item" onClick={() => setItems((currentItems) => currentItems.filter((item) => item.id !== id))} disabled={items.length === 1}>
                                                                <FiTrash2 />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-flex justify-content-end gap-2 mt-3">
                                <button className="btn btn-sm btn-primary" onClick={addItem}>Add Items</button>
                            </div>
                        </div>
                        <hr className="border-dashed" />
                        <div className="px-4 pb-4">
                            <div className="form-group">
                                <label htmlFor="InvoiceNote" className="form-label">Invoice Note:</label>
                                <textarea rows={3} className="form-control" id="InvoiceNote" placeholder="It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!" defaultValue={""} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4">
                <div className="card stretch stretch-full invoice-summary-card">
                    <div className="card-body overflow-auto">
                        <div className="mb-4 d-flex align-items-center justify-content-between">
                            <div>
                                <h6 className="fw-bold">Payment Method</h6>
                                <span className="fs-12 text-muted">Choose how the customer pays</span>
                            </div>
                        </div>
                        <div className="row g-2 mb-4">
                            {[
                                { value: 'Cash', label: 'Cash' },
                                { value: 'Card', label: 'Card' },
                                { value: 'Account', label: 'Account' },
                            ].map((option) => (
                                <div className="col-4" key={option.value}>
                                    <label className={`border rounded p-2 d-flex align-items-center gap-2 c-pointer ${paymentMethod === option.value ? 'border-primary' : 'border-gray-2'}`}>
                                        <input type="radio" name="paymentMethod" value={option.value} checked={paymentMethod === option.value} onChange={(event) => setPaymentMethod(event.target.value)} />
                                        <span className="fs-12">{option.label}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                        {paymentMethod === 'Cash' && (
                            <div className="mb-4">
                                <label className="form-label">Amount Received</label>
                                <input type="number" className="form-control mb-3" min="0" step="0.01" placeholder="0.00" value={amountReceived} onChange={(event) => setAmountReceived(event.target.value)} />
                                <label className="form-label">Change To Return</label>
                                <input type="number" className="form-control" readOnly value={changeToReturn.toFixed(2)} />
                            </div>
                        )}
                        {paymentMethod === 'Card' && (
                            <div className="mb-4">
                                <label className="form-label">Card Number</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><BsCreditCardFill /></span>
                                    <input type="text" className="form-control" placeholder="Card number" />
                                </div>
                                <input type="text" className="form-control mb-3" placeholder="Card holder name" />
                                <div className="row g-2">
                                    <div className="col-7"><input type="text" className="form-control" placeholder="MM/YYYY" /></div>
                                    <div className="col-5"><input type="text" className="form-control" placeholder="CVV" /></div>
                                </div>
                            </div>
                        )}
                        {paymentMethod === 'Account' && (
                            <div className="mb-4">
                                <label className="form-label">Account Reference</label>
                                <input type="text" className="form-control mb-3" placeholder="Account number" />
                                <input type="text" className="form-control mb-3" placeholder="Account holder name" />
                                <label htmlFor="account-bill-image" className="form-label">Online Bill</label>
                                <label htmlFor="account-bill-image" className="d-flex align-items-center gap-3 border border-dashed rounded p-3 c-pointer">
                                    <div className="avatar-image avatar-lg rounded">
                                        <img src={accountBillImage || "/images/logo-abbr.png"} className="img-fluid rounded h-100 w-100" alt="Online bill preview" />
                                    </div>
                                    <span className="fs-12 text-muted"><FiCamera className="me-2" /> Upload online bill</span>
                                    <input id="account-bill-image" className="d-none" type="file" accept="image/*" onChange={handleAccountBillUpload} />
                                </label>
                            </div>
                        )}
                        <hr className="border-dashed" />
                        <div className="mb-4 d-flex align-items-center justify-content-between">
                            <div>
                                <h6 className="fw-bold">Invoice Summary:</h6>
                                <span className="fs-12 text-muted">Review invoice totals</span>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-bordered" id="tab_logic_total">
                                <tbody>
                                    <tr className="single-item">
                                        <th className="fs-10 text-dark text-uppercase">Total Items</th>
                                        <td className="w-25"><input type="number" name="total_items" className="form-control border-0 bg-transparent p-0" readOnly value={items.reduce((count, item) => count + (Number(item.qty) || 0), 0)} /></td>
                                    </tr>
                                    <tr className="single-item">
                                        <th className="fs-10 text-dark text-uppercase">Total Discount</th>
                                        <td className="w-25"><input type="number" name="total_discount" className="form-control border-0 bg-transparent p-0" readOnly value={totalDiscount.toFixed(2)} /></td>
                                    </tr>
                                    <tr className="single-item">
                                        <th className="fs-10 text-dark text-uppercase">Payment Method</th>
                                        <td className="w-25"><input type="text" name="payment_method" className="form-control border-0 bg-transparent p-0" readOnly value={paymentMethod} /></td>
                                    </tr>
                                    <tr className="single-item">
                                        <th className="fs-10 text-dark text-uppercase">Final Bill Amount</th>
                                        <td className="w-25"><input type="number" name="final_bill_amount" className="form-control border-0 bg-transparent p-0 fw-700 text-dark" readOnly value={finalBillAmount.toFixed(2)} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InvoiceFormContent