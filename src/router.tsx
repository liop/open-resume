/*
 * @Date: 2024-09-07 21:25:31
 * @Description: 功能：
 */
import { createHashHistory, Router } from 'oh-router'
import { editorRoute } from 'src/pages/editor/route'
import { indexRoute } from 'src/pages/index/route'
import { adminRoute } from 'src/pages/admin/route'

export const router = new Router<any>({
  history: createHashHistory(),
  routes: [
    indexRoute,
    adminRoute,
    editorRoute,
    {
      path: '*',
      element: '404',
    },
  ],
})
