import React from 'react'
import { Routes, Route } from 'react-router-dom'

const ListCyclePage = React.lazy(() => import('./pages/ListCyclePage'))
const DetailCyclePage = React.lazy(() => import('./pages/DetailCyclePage'))

const ModuleMboGoalCycleSetting = () => {
  return (
    <Routes>
      <Route path="" element={<ListCyclePage />} />
      <Route path=":cycle_id" element={<DetailCyclePage />} />
    </Routes>
  )
}

export default ModuleMboGoalCycleSetting
