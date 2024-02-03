import classNames from 'classnames'
import * as React from 'react'

export type ModifierName = 'info' | 'success' | 'strong' | 'shadow'

interface TableProps {
  isResponsive?: boolean
  modifiers?: { [key in ModifierName]?: boolean }
  children: React.ReactNode
}

const ResponsiveWrapper = ({ isResponsive, children }: TableProps) => {
  return isResponsive ? <div className="pkt-table-container">{children}</div> : <>{children}</>
}

export const PktTable = ({
  isResponsive,
  modifiers: { info = false, success = false, strong = false, shadow = false } = {},
  children,
}: TableProps) => {
  return (
    <ResponsiveWrapper isResponsive={isResponsive}>
      <table
        className={classNames('pkt-table', {
          'pkt-table--info': info,
          'pkt-table--success': success,
          'pkt-table--strong': strong,
          'pkt-table--shadow': shadow,
        })}
      >
        {children}
      </table>
    </ResponsiveWrapper>
  )
}
