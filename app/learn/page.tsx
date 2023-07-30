import LeftSide from '@/components/learn/LeftSide';
import Lessons from '@/components/learn/Lessons';

export default function Learn() {
  return (
   
        <div className="min-h-screen flex flex-row p-20 space-18">
            <div className="pr-6 border-r-2 border-blue-100 w-1/5">
                <LeftSide />
            </div>
            <div className="flex-grow pl-10">
                <Lessons />
            </div>
        </div>
  );
}
