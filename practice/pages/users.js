const Users = ({ users }) => {
    return (
        <>
            {
                users.map(user => {
                    return (<div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>)
                })}
        </>
    )
}

export default Users;


export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
        props: {
            users: data,
        }
    }
}