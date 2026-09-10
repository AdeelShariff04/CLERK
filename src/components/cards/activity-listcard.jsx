import React, { useState } from 'react'
import CardHeader from '@/components/shared/CardHeader';
import useCardTitleActions from '@/hooks/useCardTitleActions';
import CardLoader from '@/components/shared/CardLoader';
import BillPreviewSidebar from '@/components/shared/BillPreviewSidebar';
import { dashboardActivityData } from '@/utils/fackData/dashboardActivityData';
import { FiClock, FiEye } from 'react-icons/fi';

const ActivityList = ({ title }) => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();
    const [selectedBill, setSelectedBill] = useState(null);

    if (isRemoved) {
        return null;
    }

    return (
        <>
            <div className="col-xxl-4 col-lg-6">
                <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                    <CardHeader title={title} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} />
                    <div className="card-body custom-card-action pb-3" style={{ height: '370px', overflowY: 'auto' }}>
                        <ul className="list-unstyled activity-feed mb-0">
                            {dashboardActivityData.slice(0, 7).map((item, index) => (
                                <ActivityListItem
                                    key={`${item.type}-${item.invoiceNumber || item.customerId || index}`}
                                    type={item.type}
                                    leadDate={item.leadDate}
                                    date={item.date}
                                    dateTime={item.dateTime}
                                    text={item.text}
                                    customerId={item.customerId}
                                    supplierId={item.supplierId}
                                    invoiceNumber={item.invoiceNumber}
                                    amount={item.amount}
                                    bill={item.bill}
                                    onViewBill={() => setSelectedBill({ type: item.type === 'success' ? 'supplier' : 'invoice', bill: item.bill })}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {selectedBill && (
                <BillPreviewSidebar
                    type={selectedBill.type}
                    bill={selectedBill.bill}
                    onClose={() => setSelectedBill(null)}
                />
            )}
        </>
    )
}

export default ActivityList

export const ActivityListItem = ({ type, leadDate, date, dateTime, text, customerId, supplierId, invoiceNumber, amount, onViewBill }) => {
    const idLabel = type === 'success' ? supplierId : customerId;
    const kindLabel = type === 'success' ? 'Supplier ID' : 'Customer ID';
    const idClassName = type === 'success' ? 'fw-bold text-success' : 'fw-bold text-info';

    return (
        <li className={`d-flex justify-content-between feed-item feed-item-${type}`}>
            <div className="flex-grow-1 pe-3">
                <span className="text-truncate-1-line lead_date">
                    {leadDate} <span className="date">{date}</span>
                </span>
                <span className="text d-block">
                    {text}: <span className={idClassName}>{idLabel}</span>
                    <span className="text-muted d-block mt-1">{amount}</span>
                </span>
            </div>
            <div className="ms-3 d-flex gap-2 align-items-center">
                <a
                    href={`#activity-${invoiceNumber || kindLabel}`}
                    className="avatar-text avatar-sm"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    title={dateTime}
                    aria-label={`${kindLabel} date time: ${dateTime}`}
                    onClick={(event) => event.preventDefault()}
                >
                    <FiClock size={12} strokeWidth={1.6} />
                </a>
                <a
                    href={`#bill-${invoiceNumber || kindLabel}`}
                    className="avatar-text avatar-sm"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    title="View bill"
                    aria-label={`View bill for ${invoiceNumber}`}
                    onClick={(event) => {
                        event.preventDefault();
                        if (onViewBill) onViewBill();
                    }}
                >
                    <FiEye size={12} strokeWidth={1.6} />
                </a>
            </div>
        </li>
    )
}