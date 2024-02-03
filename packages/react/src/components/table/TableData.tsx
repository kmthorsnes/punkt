import * as React from 'react'

interface TableDataProps {
  children: React.ReactNode
}

export const PktTableData = ({ children }: TableDataProps) => <td className="pkt-table__th">{children}</td>
