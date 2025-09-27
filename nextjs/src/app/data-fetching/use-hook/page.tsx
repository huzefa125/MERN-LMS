import { Suspense, use } from "react";

interface User {
    id:number,
    firstName:string,
    lastName:string,
}

interface UserResponse {
    users: User[];
}

function getUsers() : Promise<UserResponse>{
    return fetch('https://dummyjson.com/users').then(res=>res.json())
}

function UseHookExample() {
    const userPromise = getUsers()
    return (
        <div>
            Use Hook Example 
            <Suspense fallback={<div>
                Loading...
            </div>}>
                <UserList userPromise={userPromise} />
            </Suspense>
        </div>
    )
}

function UserList({userPromise} : {userPromise : Promise<UserResponse>}){
    const users = use(userPromise)
    return (
        <div>
            {users.users.map(user => (
                <div key={user.id}>
                    {user.firstName} {user.lastName}
                </div>
            ))}
        </div>
    )
}

export default UseHookExample;