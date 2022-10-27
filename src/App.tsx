import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const NotFound = React.lazy(() => import('./not-found'))
const ModuleMboGoalCycleSetting = React.lazy(() => import('./mbo-goal-cycle-setting'))
const ModuleHome = React.lazy(() => import('./home'))

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<ModuleHome />} index />
        <Route path="mbo-goal-cycle-setting/*" element={<ModuleMboGoalCycleSetting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
