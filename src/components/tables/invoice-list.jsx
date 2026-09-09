import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FiEdit3, FiEye, FiPrinter, FiShare2, FiTrash2 } from 'react-icons/fi'
import { invoiceData } from '@/utils/fackData/invoiceData';
import Table from '@/components/shared/table/Table';

const InvoiceList = () => {
  const columns = [
    {
      accessorKey: 'id',
      header: ({ table }) => {
        const checkboxRef = React.useRef(null);

        useEffect(() => {
          if (checkboxRef.current) {
            checkboxRef.current.indeterminate = table.getIsSomeRowsSelected();
          }
        }, [table.getIsSomeRowsSelected()]);

        return (
          <input
            type="checkbox"
            className="custom-table-checkbox"
            ref={checkboxRef}
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
        );
      },
      cell: ({ row }) => (
        <input
          type="checkbox"
          className="custom-table-checkbox"
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
      meta: {
        headerClassName: 'width-30',
      },
    },

    {
      accessorKey: 'invoice',
      header: () => 'Invoice Number',
      cell: (info) => <a href='#' className='fw-bold'>{info.getValue()}</a>
    },
    {
      accessorKey: 'client',
      header: () => 'Customer',
      cell: (info) => {
        const customer = info.getValue();
        return (
          <a href="#" className="hstack gap-3">
            {
              customer?.img ?
                <div className="avatar-image avatar-md">
                  <img src={customer?.img} alt={customer?.name} className="img-fluid" />
                </div>
                :
                <div className="text-white avatar-text user-avatar-text avatar-md">{customer?.name.substring(0, 1)}</div>
            }
            <div>
              <span className="text-truncate-1-line">{customer?.name}</span>
              <small className="fs-12 fw-normal text-muted">ID: {customer?.id}</small>
            </div>
          </a>
        )
      }
    },
    {
      accessorKey: 'itemsCount',
      header: () => 'Items Count',
    },
    {
      accessorKey: 'billAmount',
      header: () => 'Bill Amount',
      meta: {
        className: "fw-bold text-dark"
      }
    },
    {
      accessorKey: 'date',
      header: () => 'Date',
    },
    {
      accessorKey: 'paymentType',
      header: () => 'Payment Type',
    },
    {
      accessorKey: 'actions',
      header: () => "Actions",
      cell: info => (
        <div className="hstack gap-2 justify-content-end">
          <Link to="/payment/view" className="avatar-text avatar-md" title="View">
            <FiEye />
          </Link>
          <a href="#" className="avatar-text avatar-md" title="Print">
            <FiPrinter />
          </a>
          <a href="#" className="avatar-text avatar-md" title="Share">
            <FiShare2 />
          </a>
          <Link to="/payment/edit" className="avatar-text avatar-md" title="Edit">
            <FiEdit3 />
          </Link>
          <a href="#" className="avatar-text avatar-md" title="Delete">
            <FiTrash2 />
          </a>
        </div>
      ),
      meta: {
        headerClassName: 'text-end'
      }
    },
  ]
  return (
    <>
      <Table data={invoiceData} columns={columns} />
    </>
  )
}

export default InvoiceList