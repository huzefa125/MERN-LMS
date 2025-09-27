"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  console.log(searchParams.getAll('name'),searchParams.has('age'),"searchParams");
  const handleNavigate = () =>{
    router.push('/');
  }
  // console.log(pathName);

  
    return (
    <div>
      <h1>Profile Component-client</h1>
      <button onClick={handleNavigate}>Navigate to home page</button>
    </div>
  );
}