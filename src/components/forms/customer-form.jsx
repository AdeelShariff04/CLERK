import React, { useState } from 'react'
import SelectDropdown from '@/components/shared/SelectDropdown'
import Input from '@/components/shared/Input'
import useImageUpload from '@/hooks/useImageUpload'
import DatePicker from 'react-datepicker'
import { FiCamera } from 'react-icons/fi'

const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
]

const statusOptions = [
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
]

const CustomerFormContent = ({ isEdit = false }) => {
    const [gender, setGender] = useState(genderOptions[0])
    const [status, setStatus] = useState(statusOptions[0])
    const [dob, setDob] = useState(isEdit ? new Date('1994-09-21') : null)
    const { handleImageUpload, uploadedImage } = useImageUpload()

    return (
        <div className="col-lg-12">
            <div className="card stretch stretch-full">
                <div className="card-body">
                    <div className="mb-5 d-flex align-items-center justify-content-between">
                        <div>
                            <h5 className="fw-bold mb-2">Customer Details</h5>
                            <span className="fs-12 text-muted">Add customer profile and contact information</span>
                        </div>
                        <label htmlFor="customer-picture" className="wd-100 ht-100 mb-0 position-relative overflow-hidden border border-gray-2 rounded c-pointer">
                            <img src={uploadedImage || '/images/avatar/1.png'} className="img-fluid rounded h-100 w-100" alt="Customer preview" />
                            <span className="position-absolute start-50 top-50 translate-middle avatar-text avatar-sm bg-white text-primary"><FiCamera size={15} /></span>
                            <input id="customer-picture" className="d-none" type="file" accept="image/*" onChange={handleImageUpload} />
                        </label>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <Input icon="feather-user" label="Customer Name" labelId="customerName" placeholder="Alexandra Della" name="customerName" defaultValue={isEdit ? 'Alexandra Della' : undefined} />
                            <Input icon="feather-activity" label="Customer ID" labelId="customerId" placeholder="CUS-001" name="customerId" defaultValue={isEdit ? 'CUS-001' : undefined} />
                            <div className="row mb-4 align-items-center">
                                <div className="col-lg-4"><label className="fw-semibold">Date of Birth: </label></div>
                                <div className="col-lg-8"><DatePicker selected={dob} onChange={setDob} placeholderText="Date of birth" dateFormat="dd MMM, yyyy" className="form-control" /></div>
                            </div>
                            <div className="row mb-4 align-items-center">
                                <div className="col-lg-4"><label className="fw-semibold">Gender: </label></div>
                                <div className="col-lg-8"><SelectDropdown options={genderOptions} selectedOption={gender} defaultSelect="male" onSelectOption={setGender} /></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Input icon="feather-phone" label="Phone" labelId="customerPhone" placeholder="+1 (202) 555-0147" name="phone" defaultValue={isEdit ? '+1 (202) 555-0147' : undefined} />
                            <Input icon="feather-mail" label="Email" labelId="customerEmail" placeholder="customer@email.com" name="email" type="email" defaultValue={isEdit ? 'alex.della@email.com' : undefined} />
                            <Input icon="feather-map-pin" label="Address" labelId="customerAddress" placeholder="Customer address" name="address" defaultValue={isEdit ? 'California, USA' : undefined} />
                            <div className="row mb-4 align-items-center">
                                <div className="col-lg-4"><label className="fw-semibold">Status: </label></div>
                                <div className="col-lg-8"><SelectDropdown options={statusOptions} selectedOption={status} defaultSelect="active" onSelectOption={setStatus} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerFormContent
