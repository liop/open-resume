import { router } from 'src/router'
import { IndexPage } from '.'

export const adminRoute = { path: '/admin', element: <IndexPage /> }

export function toAdmin() {
  router.navigate('/admin')
}
