import { useNavigate } from 'react-router-dom'

const ModuleHome = () => {
  const navigate = useNavigate()
  const handleRedirectToModuleMBO = () => {
    navigate('/mbo-goal-cycle-setting')
  }
  return (
    <div>
      <div>home</div>
      <button onClick={handleRedirectToModuleMBO}>redirect to mbo-goal-cycle-setting</button>
    </div>
  )
}

export default ModuleHome
