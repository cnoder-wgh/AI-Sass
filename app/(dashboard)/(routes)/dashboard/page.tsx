import { UserButton } from "@clerk/nextjs"

const DashbordPage = ()=>{
    return (
        <div>
            <p>Dashboard page (Protected)</p>
            <UserButton afterSignOutUrl="/"/>
        </div>
        
    )
}

export default DashbordPage