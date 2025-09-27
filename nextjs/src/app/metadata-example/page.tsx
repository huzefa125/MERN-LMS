import { Metadata } from "next"
import Link from "next/link"
export const metadata: Metadata = {
    title: "MetaData Example",
    description:"This is Static meta data"
}
export default function Metadata(){
    const example = [
        {
            id:1,
            title:"One"
        },
        {
            id:2,
            title:"Two"
        },
        {
            id:3,
            title:"Three"
        },
    ]
    return(
        <div>
            <h1>Metadata Example</h1>
            <ul>
                {
                    example.map(item=>(
                        <li key={item.id}>
                            <Link href={`/metadata-example/${item.id}`}>{item.title}</Link>
                        </li>
                    ))}
            </ul>
        </div>
    )
}