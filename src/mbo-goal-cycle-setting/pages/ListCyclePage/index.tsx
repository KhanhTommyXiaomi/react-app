import { useNavigate } from 'react-router-dom'

const ListCyclePage = () => {
  const navigate = useNavigate()
  const handleRedirectToDetailCycle = () => {
    const cycleId = '1'
    navigate(cycleId)
  }
  return (
    <div>
      <div>List cycle</div>
      <button onClick={handleRedirectToDetailCycle}>redirect to detail</button>
    </div>
  )
}

export default ListCyclePage
