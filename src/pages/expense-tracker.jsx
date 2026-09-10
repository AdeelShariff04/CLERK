import React, { useMemo, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiPlus, FiPrinter, FiTrash2, FiX } from 'react-icons/fi'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import PageHeaderMonth from '@/components/shared/pageHeader/PageHeaderMonth'

const dailySummary = {
    '2026-09-01': { gross: 1450, overhead: 120, invoices: 18, items: 124, customers: 8, repeatCustomers: 4 },
    '2026-09-02': { gross: 1680, overhead: 95, invoices: 20, items: 138, customers: 10, repeatCustomers: 6 },
    '2026-09-03': { gross: 1225, overhead: 110, invoices: 15, items: 101, customers: 7, repeatCustomers: 3 },
    '2026-09-04': { gross: 1895, overhead: 140, invoices: 21, items: 154, customers: 11, repeatCustomers: 7 },
    '2026-09-05': { gross: 1350, overhead: 85, invoices: 17, items: 117, customers: 9, repeatCustomers: 5 },
    '2026-09-06': { gross: 2100, overhead: 160, invoices: 24, items: 171, customers: 12, repeatCustomers: 8 },
    '2026-09-07': { gross: 1980, overhead: 135, invoices: 22, items: 166, customers: 10, repeatCustomers: 6 },
    '2026-09-08': { gross: 1745, overhead: 128, invoices: 19, items: 143, customers: 8, repeatCustomers: 5 },
    '2026-09-09': { gross: 2210, overhead: 175, invoices: 26, items: 182, customers: 13, repeatCustomers: 9 },
    '2026-09-10': { gross: 2480, overhead: 185, invoices: 28, items: 201, customers: 14, repeatCustomers: 10 },
    // '2026-09-11': { gross: 1988, overhead: 118, invoices: 23, items: 168, customers: 9, repeatCustomers: 6 },
    // '2026-09-12': { gross: 2145, overhead: 146, invoices: 25, items: 176, customers: 11, repeatCustomers: 7 },
    // '2026-09-13': { gross: 2320, overhead: 152, invoices: 27, items: 189, customers: 12, repeatCustomers: 8 },
    // '2026-09-14': { gross: 2560, overhead: 190, invoices: 29, items: 204, customers: 15, repeatCustomers: 11 },
    // '2026-09-15': { gross: 2025, overhead: 133, invoices: 23, items: 170, customers: 10, repeatCustomers: 7 },
    // '2026-09-16': { gross: 1780, overhead: 124, invoices: 20, items: 149, customers: 9, repeatCustomers: 5 },
    // '2026-09-17': { gross: 2405, overhead: 181, invoices: 27, items: 196, customers: 13, repeatCustomers: 9 },
    // '2026-09-18': { gross: 2610, overhead: 210, invoices: 30, items: 213, customers: 15, repeatCustomers: 10 },
    // '2026-09-19': { gross: 2230, overhead: 168, invoices: 25, items: 191, customers: 12, repeatCustomers: 8 },
    // '2026-09-20': { gross: 2055, overhead: 142, invoices: 24, items: 177, customers: 11, repeatCustomers: 7 },
    // '2026-09-21': { gross: 2160, overhead: 155, invoices: 26, items: 184, customers: 12, repeatCustomers: 8 },
    // '2026-09-22': { gross: 2440, overhead: 186, invoices: 28, items: 202, customers: 14, repeatCustomers: 9 },
    // '2026-09-23': { gross: 2305, overhead: 171, invoices: 27, items: 188, customers: 13, repeatCustomers: 9 },
    // '2026-09-24': { gross: 2180, overhead: 149, invoices: 25, items: 179, customers: 11, repeatCustomers: 7 },
    // '2026-09-25': { gross: 2350, overhead: 162, invoices: 26, items: 190, customers: 12, repeatCustomers: 8 },
    // '2026-09-26': { gross: 2475, overhead: 172, invoices: 29, items: 200, customers: 14, repeatCustomers: 10 },
    // '2026-09-27': { gross: 2515, overhead: 188, invoices: 30, items: 206, customers: 15, repeatCustomers: 11 },
    // '2026-09-28': { gross: 2260, overhead: 154, invoices: 26, items: 183, customers: 12, repeatCustomers: 8 },
    // '2026-09-29': { gross: 2400, overhead: 166, invoices: 27, items: 194, customers: 13, repeatCustomers: 9 },
    // '2026-09-30': { gross: 2695, overhead: 205, invoices: 31, items: 218, customers: 16, repeatCustomers: 12 },
}

const buildCalendar = (year, monthIndex) => {
    const firstDayOfMonth = new Date(year, monthIndex, 1)
    const lastDayOfMonth = new Date(year, monthIndex + 1, 0)
    const startWeekday = (firstDayOfMonth.getDay() + 6) % 7
    const totalDays = lastDayOfMonth.getDate()
    const cells = []

    const prevMonthDays = new Date(year, monthIndex, 0).getDate()
    for (let i = startWeekday - 1; i >= 0; i -= 1) {
        cells.push({
            day: prevMonthDays - i,
            inCurrentMonth: false,
            date: new Date(year, monthIndex - 1, prevMonthDays - i),
        })
    }

    for (let day = 1; day <= totalDays; day += 1) {
        cells.push({
            day,
            inCurrentMonth: true,
            date: new Date(year, monthIndex, day),
        })
    }

    while (cells.length % 7 !== 0) {
        cells.push({
            day: cells.length % 7 === 0 ? 1 : cells.length % 7,
            inCurrentMonth: false,
            date: new Date(year, monthIndex + 1, cells.length % 7),
        })
    }

    return cells
}

const formatDateKey = (date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
}

const formatHeaderDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    }).format(date)
}

const ExpenseTracker = () => {
    const [selectedMonth, setSelectedMonth] = useState('2026-09')
    const [selectedDate, setSelectedDate] = useState(null)
    const [overheadsRows, setOverheadsRows] = useState([
        { id: 1, reason: 'Electricity Bill', amount: '120' },
        { id: 2, reason: 'Staff Meal Allowance', amount: '75' },
        { id: 3, reason: 'Store Supplies', amount: '35' },
    ])

    const selectedDateKey = selectedDate ? formatDateKey(selectedDate) : ''
    const selectedDayData = selectedDate && dailySummary[selectedDateKey] ? dailySummary[selectedDateKey] : {
        gross: 0,
        overhead: 0,
        invoices: 0,
        items: 0,
        customers: 0,
        repeatCustomers: 0,
    }

    const [yearValue, monthValue] = selectedMonth.split('-').map(Number)
    const calendarData = useMemo(() => buildCalendar(yearValue, monthValue - 1), [yearValue, monthValue])
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    const addOverheadRow = () => {
        setOverheadsRows((prev) => [...prev, { id: Date.now(), reason: '', amount: '' }])
    }

    const updateOverheadRow = (id, field, value) => {
        setOverheadsRows((prev) => prev.map((row) => row.id === id ? { ...row, [field]: value } : row))
    }

    const removeOverheadRow = (id) => {
        setOverheadsRows((prev) => prev.filter((row) => row.id !== id))
    }

    const overheadTotal = overheadsRows.reduce((sum, row) => {
        const value = Number(row.amount || 0)
        return sum + value
    }, 0)

    const netDayCash = selectedDayData.gross - overheadTotal

    return (
        <>
            <PageHeader>
                <PageHeaderMonth value={selectedMonth} onChange={setSelectedMonth} />
            </PageHeader>

            <div className="main-content">
                <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body p-3 p-lg-4">
                        <div className="row g-2 text-center fw-semibold text-muted mb-3">
                            {weekdays.map((day) => (
                                <div key={day} className="col">
                                    {day}
                                </div>
                            ))}
                        </div>

                        <div className="row g-2">
                            {calendarData.map(({ day, inCurrentMonth, date }, index) => {
                                const dateKey = formatDateKey(date)
                                const daySummary = dailySummary[dateKey]
                                const isSelected = selectedDate ? formatDateKey(selectedDate) === dateKey : false
                                const isToday = formatDateKey(new Date()) === dateKey

                                return (
                                    <div key={`${dateKey}-${index}`} className="col-12 col-sm-6 col-md-4 col-lg-2 p-0">
                                        <button
                                            type="button"
                                            className={[
                                                'w-100 border rounded-3 p-2 text-start h-100 bg-body',
                                                inCurrentMonth ? 'text-body' : 'text-muted opacity-50',
                                                isSelected ? 'border-primary border-2 shadow-sm' : 'border-light-subtle',
                                            ].join(' ')}
                                            onClick={() => setSelectedDate(date)}
                                            style={{ minHeight: '125px' }}
                                        >
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <span className={`fw-semibold ${isToday ? 'text-primary' : ''}`}>{day}</span>
                                                {isToday && <span className="badge bg-primary-subtle text-primary">Today</span>}
                                            </div>

                                            {daySummary ? (
                                                <div className="d-flex flex-column gap-2">
                                                    <span className="badge bg-soft-success text-success rounded-pill w-fit-content">+$ {daySummary.gross.toLocaleString()}</span>
                                                    <span className="badge bg-soft-danger text-danger rounded-pill w-fit-content">-$ {daySummary.overhead.toLocaleString()}</span>
                                                </div>
                                            ) : (
                                                <div className="d-flex flex-column gap-2 mt-4">
                                                    <span className="badge bg-light text-muted rounded-pill w-fit-content">No Record</span>
                                                </div>
                                            )}
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {selectedDate && (
                <>
                    <div className="position-fixed top-0 start-0 w-100 h-100" onClick={() => setSelectedDate(null)} style={{ zIndex: 1040 }} />
                    <div className="offcanvas offcanvas-end show" tabIndex={-1} aria-modal="true" role="dialog" style={{ visibility: 'visible', zIndex: 1050 }}>
                        <div className="offcanvas-header border-bottom px-4 py-3">
                            <div>
                                <h5 className="offcanvas-title mb-1">{selectedDate ? formatHeaderDate(selectedDate) : 'Daily reconciliation summary'}</h5>
                                <small className="text-muted">Daily reconciliation summary</small>
                            </div>
                            <button type="button" className="btn-close" aria-label="Close" onClick={() => setSelectedDate(null)} />
                        </div>

                        <div className="offcanvas-body p-4">
                            <div className="row g-3 mb-4">
                                <div className="col-6">
                                    <div className="card border-0 bg-body-tertiary h-75">
                                        <div className="card-body">
                                            <div className="text-muted small text-uppercase">Gross Sales</div>
                                            <div className="fs-4 fw-bold text-success">${selectedDayData.gross.toLocaleString()}</div>
                                            <div className="small text-muted">{selectedDayData.invoices} invoices</div>
                                            <div className="small text-muted">{selectedDayData.items} items sold</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card border-0 bg-body-tertiary h-75">
                                        <div className="card-body">
                                            <div className="text-muted small text-uppercase">Stock Purchase</div>
                                            <div className="fs-4 fw-bold text-warning">${(selectedDayData.gross * 0.42).toFixed(0).toLocaleString()}</div>
                                            <div className="small text-muted">12 deliveries</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card border-0 bg-body-tertiary h-75">
                                        <div className="card-body">
                                            <div className="text-muted small text-uppercase">Walk-In Customers</div>
                                            <div className="fs-4 fw-bold text-primary">{selectedDayData.customers}</div>
                                            <div className="small text-muted">Registered today</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card border-0 bg-body-tertiary h-75">
                                        <div className="card-body">
                                            <div className="text-muted small text-uppercase">Retaining Customers</div>
                                            <div className="fs-4 fw-bold text-info">{selectedDayData.repeatCustomers}</div>
                                            <div className="small text-muted">Repeat visits today</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card border-0 shadow-sm mb-4">
                                <div className="card-header border-0 bg-transparent d-flex align-items-center justify-content-between px-3 py-3">
                                    <h6 className="mb-0 fw-bold">Shop Overheads</h6>
                                    <button type="button" className="btn btn-sm btn-primary" onClick={addOverheadRow}>
                                        <FiPlus size={14} className="me-2" />
                                        Add Row
                                    </button>
                                </div>
                                <div className="card-body p-0">
                                    <div className="table-responsive" style={{ overflowX: 'auto' }}>
                                        <table className="table align-middle mb-0" style={{ minWidth: '500px' }}>
                                            <thead className="table-light">
                                                <tr>
                                                    <th className="px-3" style={{ width: '40%' }}>Reason</th>
                                                    <th style={{ width: '25%' }}>Amount</th>
                                                    <th style={{ width: '10%' }} className="text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {overheadsRows.map((row) => (
                                                    <tr key={row.id}>
                                                        <td className="px-3">
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm"
                                                                placeholder="Reason"
                                                                value={row.reason}
                                                                onChange={(event) => updateOverheadRow(row.id, 'reason', event.target.value)}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control form-control-sm"
                                                                placeholder="0.00"
                                                                value={row.amount}
                                                                onChange={(event) => updateOverheadRow(row.id, 'amount', event.target.value)}
                                                            />
                                                        </td>
                                                        <td className="text-center">
                                                            <button type="button" className="btn btn-link text-danger p-0" onClick={() => removeOverheadRow(row.id)} aria-label="Delete row">
                                                                <FiTrash2 size={14} />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="card border-0 shadow-sm mb-4">
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table align-middle mb-0">
                                            <tbody>
                                                <tr>
                                                    <td className="fw-semibold text-muted">Subtotal Gross Cash Invoiced</td>
                                                    <td className="text-end fw-semibold">${selectedDayData.gross.toLocaleString()}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-semibold text-muted">Subtotal Day Overheads</td>
                                                    <td className="text-end fw-semibold text-danger">-${overheadTotal.toLocaleString()}</td>
                                                </tr>
                                                <tr className="table-light">
                                                    <td className="fw-bold">Net Day Cash</td>
                                                    <td className="text-end fw-bold text-success">${netDayCash.toLocaleString()}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <button type="button" className="btn btn-primary w-100 py-3 fw-semibold">
                                <FiPrinter className="me-2" />
                                Print Slip
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default ExpenseTracker