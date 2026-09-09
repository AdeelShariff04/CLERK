import React, { useState } from 'react'
import SelectDropdown from '@/components/shared/SelectDropdown'
import Input from '@/components/shared/Input'
import useImageUpload from '@/hooks/useImageUpload'
import { FiCamera } from 'react-icons/fi'

const statusOptions = [
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
]

const SupplierFormContent = ({ isEdit = false }) => {
    const [selectedStatus, setSelectedStatus] = useState(statusOptions[0])
    const { handleImageUpload, uploadedImage } = useImageUpload()

    return (
        <div className="col-lg-12">
            <div className="card stretch stretch-full">
                <div className="card-body">
                    <div className="mb-5 d-flex align-items-center justify-content-between">
                        <div>
                            <h5 className="fw-bold mb-2">Supplier Details</h5>
                            <span className="fs-12 text-muted">Add supplier contact and purchasing information</span>
                        </div>
                        <label htmlFor="supplier-picture" className="wd-100 ht-100 mb-0 position-relative overflow-hidden border border-gray-2 rounded c-pointer">
                            <img src={uploadedImage || '/images/avatar/1.png'} className="img-fluid rounded h-100 w-100" alt="Supplier preview" />
                            <span className="position-absolute start-50 top-50 translate-middle avatar-text avatar-sm bg-white text-primary">
                                <FiCamera size={15} />
                            </span>
                            <input id="supplier-picture" className="d-none" type="file" accept="image/*" onChange={handleImageUpload} />
                        </label>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <Input icon="feather-user" label="Supplier Name" labelId="supplierName" placeholder="Carlos Mendes" name="supplierName" defaultValue={isEdit ? 'Carlos Mendes' : undefined} />
                            <Input icon="feather-activity" label="Supplier ID" labelId="supplierId" placeholder="SUP-001" name="supplierId" defaultValue={isEdit ? 'SUP-001' : undefined} />
                            <Input icon="feather-briefcase" label="Company Name" labelId="companyName" placeholder="Mendes Electronics" name="companyName" defaultValue={isEdit ? 'Mendes Electronics' : undefined} />
                            <Input icon="feather-phone" label="Contact" labelId="supplierContact" placeholder="+55 11 98765-4321" name="contact" defaultValue={isEdit ? '+55 11 98765-4321' : undefined} />
                        </div>
                        <div className="col-lg-6">
                            <Input icon="feather-mail" label="Email" labelId="supplierEmail" placeholder="carlos@mendeselectronics.com" name="email" type="email" defaultValue={isEdit ? 'carlos@mendeselectronics.com' : undefined} />
                            <Input icon="feather-map-pin" label="Address" labelId="supplierAddress" placeholder="Supplier address" name="address" defaultValue={isEdit ? 'Sao Paulo, Brazil' : undefined} />
                            <div className="row mb-4 align-items-center">
                                <div className="col-lg-4">
                                    <label className="fw-semibold">Status: </label>
                                </div>
                                <div className="col-lg-8">
                                    <SelectDropdown
                                        options={statusOptions}
                                        selectedOption={selectedStatus}
                                        defaultSelect="active"
                                        onSelectOption={setSelectedStatus}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupplierFormContent
