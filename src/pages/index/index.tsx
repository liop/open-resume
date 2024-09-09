/*
 * @Date: 2024-09-07 21:25:31
 * @Description: 功能：
 */
import clsx from 'clsx'
import styles from './index.module.scss'
import { Suspense } from 'react'
import { Alert, Spin } from 'antd'
import { useMemo } from 'react'

import { templates } from 'src/templates'

export const IndexPage = () => {
  
  const template = useMemo(() => {
    let t = templates.filter(it => it.key == 'simple-one-page')[0]
    t.importConfig()
    t.importData()
    return t
  }
   ,[])
  const Provider =   template.provider 

  const View = template.view
  const isGray = true // store.grayPreview
  return (
    <div className={styles.index}>
       <div className={clsx(styles.content, isGray && styles.gray)}>
        <div id="template-view">
          <Suspense fallback={<Spin />}>
          <Provider>
            <View></View>
          </Provider>
          </Suspense>
        </div>
      </div>
    </div>
  )
}
