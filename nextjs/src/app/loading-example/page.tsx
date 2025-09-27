import { resolve } from "path"

async function getData(){
    await new Promise((resolve)=>setTimeout(resolve,1000));
    return{
        stats : {
            users : 2000,
        }
    }
}
export default async function LoadingExample(){
    const data = await getData();
    return <div className="p-4">
        <h1>Loading Example</h1>
        <p className="font-bold text-sm">Users : {data.stats.users}</p>
    </div>
}