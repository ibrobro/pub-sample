'use client'


import { ReactNode, useState } from 'react';
import styles from '@/app/ui/component/tooltip.module.css'


export interface ToolTipProps {
  children: ReactNode;
  delay?: number;
  content?: ReactNode
}


export default function ToolTip ({ content, delay, children }: ToolTipProps) {
  const [active, setActive] = useState<boolean>(false);
  let timeOut: ReturnType<typeof setTimeout>;

  const showTip = () => {
    timeOut = setTimeout(() => setActive(true), delay || 400 );
  }

  const hideTooltip = () => {
    clearTimeout(timeOut);
    setActive(false);
  }


  return(
    <div className = {` ${styles.container} `} 
      onMouseEnter = { showTip }
      onMouseLeave = { hideTooltip } 
    >
      { children }
      { active && 
        <div className={`${styles.tip} ${styles.bottom}`}>
          <div className={ `${styles.content} bg-blue` }>
            { content || "No text to show" }
          </div>
        </div>
      }
    </div>
  )
}