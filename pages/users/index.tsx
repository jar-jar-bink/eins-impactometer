import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useEffect } from "react";



export default function Users({ users }: any) {
  return (
    <div className="h-screen flex justify-center items-start mt-4">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-center">List Users</h1>
        <ul className="w-[300px] min-h-[200px] mx-auto shadow-xl rounded-xl p-4 text-center">
          {users && users?.map((user: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => <li className='block mb-3' key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const data = await fetch('http://localhost:3000/api/users')
  const users = await data.json()
  return {
    props: { users }
  }
}