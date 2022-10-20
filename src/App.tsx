import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { getUsers } from './store.redux/userStore'
import { AppDispatch } from './store.redux/store'
import ListUsers from './components/ListUsers'

const App = () => {
  const { t: getLabel } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()
  const getListUsers = () => {
    dispatch(getUsers())
  }
  useEffect(() => {
    getListUsers()
  }, [])
  return (
    <div className="app">
      <h1>{getLabel('TXT_HELLO')}</h1>
      <ListUsers />
    </div>
  )
}

export default App
