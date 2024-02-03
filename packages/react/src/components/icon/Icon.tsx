import React, { useContext, useEffect, useState } from 'react'

import { PktIconContext } from "./IconContext";

interface PktIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name?: string // name is now optional
  path?: string
}

export const PktIcon: React.FC<PktIconProps> = ({name, path, className = '', ...props}) => {
  const [innerHtml, setInnerHtml] = useState<string | null>(null)
  const iconFetcherContext = useContext(PktIconContext)

  useEffect(() => {
    if (!name) {
      setInnerHtml(null);
    } else {
      iconFetcherContext.fetchIcon(name, path).then(setInnerHtml);
    }
  }, [name, path]);

  if (!innerHtml) return null

  return (
    <span
      className={`pkt-icon ${className}`}
      dangerouslySetInnerHTML={{__html: innerHtml}}
      {...props}
    />
  )
}

export default PktIcon
