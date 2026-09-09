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

const EmployeeFormContent = ({ isEdit = false }) => {
    const [gender, setGender] = useState(genderOptions[0])
    const [status, setStatus] = useState(statusOptions[0])
    const [dob, setDob] = useState(isEdit ? new Date('1997-02-14') : null)
    const [doj, setDoj] = useState(isEdit ? new Date('2022-01-12') : null)
    const { handleImageUpload, uploadedImage } = useImageUpload()

    return (
        <div className="col-lg-12">
            <div className="card stretch stretch-full">
                <div className="card-body">
                    <div className="mb-5 d-flex align-items-center justify-content-between">
                        <div>
                            <h5 className="fw-bold mb-2">Employee Details</h5>
                            <span className="fs-12 text-muted">Add employee profile and employment information</span>
                        </div>
                        <label htmlFor="employee-picture" className="wd-100 ht-100 mb-0 position-relative overflow-hidden border border-gray-2 rounded c-pointer">
                            <img src={uploadedImage || '/images/avatar/1.png'} className="img-fluid rounded h-100 w-100" alt="Employee preview" />
                            <span className="position-absolute start-50 top-50 translate-middle avatar-text avatar-sm bg-white text-primary"><FiCamera size={15} /></span>
                            <input id="employee-picture" className="d-none" type="file" accept="image/*" onChange={handleImageUpload} />
                        </label>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <Input icon="feather-user" label="Employee Name" labelId="employeeName" placeholder="Janette Dalton" name="employeeName" defaultValue={isEdit ? 'Janette Dalton' : undefined} />
                            <Input icon="feather-activity" label="Employee ID" labelId="employeeId" placeholder="EMP-001" name="employeeId" defaultValue={isEdit ? 'EMP-001' : undefined} />
                            <div className="row mb-4 align-items-center">
                                <div className="col-lg-4"><label className="fw-semibold">Date of Birth: </label></div>
                                <div className="col-lg-8"><DatePicker selected={dob} onChange={setDob} placeholderText="Date of birth" dateFormat="dd MMM, yyyy" className="form-control" /></div>
                            </div>
                            <div className="row mb-4 align-items-center">
                                <div className="col-lg-4"><label className="fw-semibold">Gender: </label></div>
                                <div className="col-lg-8"><SelectDropdown options={genderOptions} selectedOption={gender} defaultSelect="male" onSelectOption={setGender} /></div>
                            </div>
                            <Input icon="feather-phone" label="Phone" labelId="employeePhone" placeholder="+1 (202) 555-0147" name="phone" defaultValue={isEdit ? '+1 (202) 555-0147' : undefined} />
                            <Input icon="feather-phone-call" label="Emergency Contact" labelId="emergencyContact" placeholder="Emergency contact number" name="emergencyContact" defaultValue={isEdit ? '+1 (202) 555-0199' : undefined} />
                        </div>
                        <div className="col-lg-6">
                            <Input icon="feather-mail" label="Email" labelId="employeeEmail" placeholder="employee@email.com" name="email" type="email" defaultValue={isEdit ? 'janette.dalton@email.com' : undefined} />
                            <Input icon="feather-credit-card" label="CNIC" labelId="employeeCnic" placeholder="CNIC number" name="cnic" defaultValue={isEdit ? '35202-1234567-8' : undefined} />
                            <Input icon="feather-map-pin" label="Address" labelId="employeeAddress" placeholder="Employee address" name="address" defaultValue={isEdit ? 'California, USA' : undefined} />
                            <div className="row mb-4 align-items-center">
                                <div className="col-lg-4"><label className="fw-semibold">Date of Joining: </label></div>
                                <div className="col-lg-8"><DatePicker selected={doj} onChange={setDoj} placeholderText="Date of joining" dateFormat="dd MMM, yyyy" className="form-control" /></div>
                            </div>
                            <Input icon="feather-briefcase" label="Designation" labelId="designation" placeholder="Sales Manager" name="designation" defaultValue={isEdit ? 'Inventory Manager' : undefined} />
                            <Input icon="feather-dollar-sign" label="Salary" labelId="salary" placeholder="5000.00" name="salary" type="number" defaultValue={isEdit ? '4800.00' : undefined} />
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

export default EmployeeFormContent
