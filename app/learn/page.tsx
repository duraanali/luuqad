import {  SideBar, Lessons} from '@/components'

const Learn = () => {
  return (
   
        <div className="flex flex-row min-h-screen p-20 space-18">
            <div className="w-1/5 pr-6 border-r-2 border-blue-100">
                <SideBar />
            </div>
            <div className="flex-grow pl-10">
                <Lessons />
            </div>
        </div>
  );
}

export default Learn;