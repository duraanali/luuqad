import Link from "next/link";
export default function Login() {
  return (
<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className='max-w-md w-full '>
            <div>
                <h1 className='mt-6 text-center text-3xl font-extrabold'>Log in</h1>
            </div>
            <div className="items-center flex flex-col justify-center">
                <input type="email" autoComplete="none"  required className="h-12 justify-center mt-8 items-center appearance-none rounded-xl relative block w-80 px-3 py-2 border border-black-299 bg-gray-200" placeholder="Email Or Username" />
                <input type="password" autoComplete="none"  required className="h-12 justify-center mt-3 items-center appearance-none rounded-xl relative block w-80 px-3  border border-black-299 bg-gray-200" placeholder="Password" />
            </div>
            <div className="flex justify-end mr-16 mt-1 font-bold">
              <Link href="/learn">Forget?</Link>
            </div>
            <div className=" flex flex-col items-center text-center justify-center mt-3 space-y-4">
            <Link href="/form" className="w-80 h-12 px-4 py-2 rounded-xl text-lg tracking-widest bg-blue-400 text-white font-bold hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-[0px_4px_0px_0px_#4299E1]">
                SIGN IN{" "}
              </Link>
            </div>
           <div>

           </div>
        </div>
    </div>
  );
}
