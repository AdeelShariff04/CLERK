import React, { Fragment } from 'react'
import CardHeader from '@/components/shared/CardHeader';
import useCardTitleActions from '@/hooks/useCardTitleActions';
import CardLoader from '@/components/shared/CardLoader';
import { topCustomerList } from '@/utils/fackData/topCustomerList';

const TopCustomersList = ({ title }) => {
    const data = topCustomerList(0, 6);
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    if (isRemoved) {
        return null;
    }

    return (
        <div className="col-xxl-4 col-lg-6">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <CardHeader title={title} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} />
                <div className="card-body custom-card-action">
                    {data.map(({ id, user_img, user_name, user_email, color, proposal, date }, index) => (
                        <Fragment key={id}>
                            <div className="w-100 d-flex align-items-center justify-content-between chat-single-item">
                                <div className="d-flex align-items-center">
                                    {user_img ? (
                                        <div className="avatar-image me-3">
                                            <img src={user_img} alt={user_name} className="img-fluid rounded-circle" />
                                        </div>
                                    ) : (
                                        <div className="text-white avatar-text user-avatar-text me-3">{user_name.substring(0, 1)}</div>
                                    )}
                                    <div>
                                        <div className="d-flex align-items-center mb-1">
                                            <span className="fw-semibold me-2">{user_name}</span>
                                            <span className={`badge bg-soft-${color} text-${color} fs-10`}>{proposal}</span>
                                        </div>
                                        <div className="fs-11 text-muted mt-1">Customer ID: {id}</div>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-bold text-dark">${(index + 1) * 420 + 680}</div>
                                    <div className="fs-11 text-muted"> Sept 2026</div>
                                </div>
                            </div>
                            {data.length - 1 === index ? "" : <hr className="border-dashed my-3" />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopCustomersList
