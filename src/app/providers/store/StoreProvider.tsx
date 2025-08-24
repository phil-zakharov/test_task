import { Provider } from 'react-redux'
import { store } from './store'

export function StoreProvider({ children }: React.PropsWithChildren) {
  return (
    <Provider store={store}>{children}</Provider>
  )
}