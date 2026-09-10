import React, { useEffect, useMemo, useState } from 'react'

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const yearOptions = [2024, 2025, 2026]

const PageHeaderMonth = ({ value, onChange }) => {
  const currentValue = useMemo(() => {
    if (value) return value

    const today = new Date()
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`
  }, [value])

  const [selectedMonth, setSelectedMonth] = useState(currentValue)

  useEffect(() => {
    setSelectedMonth(currentValue)
  }, [currentValue])

  const handleMonthChange = (event) => {
    const year = selectedMonth.split('-')[0]
    const nextValue = `${year}-${String(Number(event.target.value) + 1).padStart(2, '0')}`
    setSelectedMonth(nextValue)
    onChange?.(nextValue)
  }

  const handleYearChange = (event) => {
    const nextYear = event.target.value
    const currentMonth = selectedMonth.split('-')[1] || '01'
    const nextValue = `${nextYear}-${currentMonth}`
    setSelectedMonth(nextValue)
    onChange?.(nextValue)
  }

  const yearValue = selectedMonth.split('-')[0]
  const monthValue = Number(selectedMonth.split('-')[1] || '1') - 1

  return (
    <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
      <select
        className="form-select form-select-sm w-auto"
        value={monthValue}
        onChange={handleMonthChange}
        aria-label="Select month"
      >
        {monthNames.map((month, index) => (
          <option key={month} value={index}>{month}</option>
        ))}
      </select>

      <select
        className="form-select form-select-sm w-auto"
        value={yearValue}
        onChange={handleYearChange}
        aria-label="Select year"
      >
        {yearOptions.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>
  )
}

export default PageHeaderMonth