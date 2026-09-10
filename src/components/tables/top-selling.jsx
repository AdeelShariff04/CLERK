import React from 'react'
import CardHeader from '@/components/shared/CardHeader';
import useCardTitleActions from '@/hooks/useCardTitleActions';
import CardLoader from '@/components/shared/CardLoader';
import { topSellingData } from '@/utils/fackData/topSellingData';

const TopSellingProduct = ({ title }) => {

    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    if (isRemoved) {
        return null;
    }
    return (
        <div className="col-xxl-4 col-lg-6">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <CardHeader title={title} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} />
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table">
                            <tbody>
                                {topSellingData.map(({ image, price, name, sold }, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="hstack gap-3">
                                                <div className="avatar-image avatar-lg rounded">
                                                    <img className="img-fluid" src={image} alt={name} />
                                                </div>
                                                <div>
                                                    <a href="#" className="d-block">{name}</a>
                                                    <span className="fs-12 text-muted">Electronics</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{price}</td>
                                        <td className="text-end">{`${sold} sold`}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TopSellingProduct

