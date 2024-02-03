import * as React from 'react'

interface TableHeaderProps {
  children: React.ReactNode
}

export const PktTableHeader = ({ children }: TableHeaderProps) => <th className="pkt-table__th">{children}</th>
