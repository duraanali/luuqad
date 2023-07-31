import LeftSide from '@/components/learn/LeftSide';
import Lessons from '@/components/learn/Lessons';

export default function Learn() {
  return (
   
        <div className=" flex flex-row p-20 c-xl:p-5 space-18">
            <div className="pr-1 border-r-2 border-blue-100">
                <LeftSide />
            </div>
            <div className="flex-grow pl-5">
                <Lessons />
            </div>
        </div>
  );
}
