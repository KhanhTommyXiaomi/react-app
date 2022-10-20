import { useSelector } from 'react-redux'

const ListUsers = () => {
  const { listUsersLoading, listUsers } = useSelector((store: any) => store.user)
  return (
    <div className="list-users">
      {listUsersLoading ? (
        <h2>Loading...</h2>
      ) : (
        listUsers.map((user: any) => (
          <div className="user-item" key={user.id}>
            {user.name}
          </div>
        ))
      )}
    </div>
  )
}

export default ListUsers
