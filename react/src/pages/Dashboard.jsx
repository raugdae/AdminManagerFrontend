import {UserTile} from '../components/Dashboard/DashboardComponents'

function Dashboard({children}){
    return (
        <div className='flex h-3/4 flex-row basis-full justify-around bg-violet-200'>
            <div className='bg-purple-800 drop-shadow-amber-400'>Hello from the other siiiiiiddeee!</div>
            <UserTile />
            {children}
        </div>
    )
}
export default Dashboard