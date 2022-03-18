import React from 'react'
import { Icon } from 'antd-mobile';
import styles from './listLoading.module.scss'

export default function ListLoading({loading}) {
  if(loading) {
    return (
      <div className={styles['list-loading']}>
        <Icon type='loading' />
        <span >加载中...</span>
      </div>
    )
  }
  return null
}
