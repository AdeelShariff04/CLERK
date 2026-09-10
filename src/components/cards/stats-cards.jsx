import React from 'react';
import { Link } from 'react-router-dom';
import { dashboardStatisticsData } from '@/utils/fackData/dashboardStatisticsData';
import getIcon from '@/utils/getIcon';


const StatsCards = () => {
    return (
        <>
            {
                dashboardStatisticsData.map(({ id, running_month, todays, title, icon }) => {
                    const parseSales = (sales) => {
                        if (typeof sales === 'string') {
                            const parsed = parseInt(sales.replace(/,/g, ''), 10);
                            return isNaN(parsed) ? 0 : parsed;
                        }
                        return sales || 0;
                    };

                    return (
                        <div key={id} className="col-xxl-3 col-md-6">
                            <div className="card stretch stretch-full">
                                <div className="card-body">
                                    <div className="hstack justify-content-between">
                                        <div>
                                            <div className="hstack gap-2 mb-4">
                                                {React.cloneElement(getIcon(icon), { size: "16" })}
                                                <span>{title}</span>
                                            </div>
                                            <h4 className="fw-bolder mb-3">$<span className="counter">{running_month}</span> USD</h4>
                                            <p className="fs-12 text-muted mb-0">Todays: <span className="fw-semibold text-dark">${todays} USD</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                )
            }
        </>
    );
};

export default StatsCards;
