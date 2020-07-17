import React from 'react'
import clsx from 'clsx'

import styles from './Loading.module.css'

export interface ILoadingProps {
  classes?: {
    wrapper?: string
    loader?: string
  }
}

const Loading: React.FC<ILoadingProps> = ({ classes = {} }: ILoadingProps) => {
  return (
    <div className={clsx(styles.wrapper, classes.wrapper)}>
      <div className={clsx(styles.loader, classes.loader)}></div>
    </div>
  )
}
export default Loading
