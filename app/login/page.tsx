import Link from "next/link";
import Image from 'next/image'
export default function Login() {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm">
        <div>
          <h1 className="mt-6 text-center text-3xl font-extrabold">Log in</h1>
        </div>
        <div className="items-center flex flex-col justify-center gap-3 mt-8">
          <input
            type="email"
            autoComplete="none"
            required
            className="px-4 py-3 justify-center items-center appearance-none rounded-xl relative block w-96 px-3 py-2 border border-black-299 bg-gray-100 focus:outline-none ring-2 ring-gray-300"
            placeholder="Email Or Username"
          />
          <div className="relative mt-2">
            <input
              type="password"
              autoComplete="none"
              required
              className="px-4 py-3 justify-center items-center appearance-none rounded-xl relative block w-96 px-3  border border-black-299 bg-gray-100 focus:outline-none ring-2 ring-gray-300"
              placeholder="Password"
            />
            {/* forget password link */}
            <span className="absolute top-2/4 right-2 -translate-y-2/4">
              <Link href="/learn" className="font-bold text-gray-400">
                FORGET?
              </Link>
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col items-center text-center justify-center mt-4 space-y-4">
          <Link
            href="/"
            className="w-96 h-12 px-4 p5-2 rounded-xl text-lg tracking-widest bg-blue-400 text-white font-bold hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-[0px_4px_0px_0px_#4299E1]"
          >
            SIGN IN
          </Link>
        </div>
        {/* or line */}

        <div className="w-full  flex items-center gap-2 mt-5">
          <hr className="border-t-2 border-t-gray-300 flex-1" />
          <p className="text-center text-gray-400 font-bold">OR</p>
          <hr className="border-t-2 border-t-gray-300 flex-1" />
        </div>

        {/* OAuth Login */}
        <div className="flex items-center gap-5 mt-5">
  <button className="flex gap-2 items-center w-48 h-12  px-5 py-2 rounded-xl text-lg bg-white shadow-[0px_2px_2px_2px_#d1d5db]" type="button">
    <div className="flex px-5  items-center ">
      <Image className="" src="https://d35aaqx5ub95lt.cloudfront.net/images/ded9ca9461387f30221b67f627227388.svg" alt="" width={10} height={10} />
      <span className="pl-3 text-center font-bold text-blue-800 ">FACEBOOK</span>
    </div>
  </button>
  <button className="flex gap-2 items-center w-48 h-12 px-5 py-2 rounded-xl text-lg bg-white shadow-[0px_2px_2px_2px_#d1d5db]" type="button">
    <div className="flex px-5  items-center">
      <Image className="" src="https://d35aaqx5ub95lt.cloudfront.net/images/7da752378a3b1b8bbcd94a4d4f10561e.svg" alt="" width={20} height={10} />
      <span className="pl-3 text-center font-bold text-blue-800">GOOGLE</span>
    </div>
  </button>
</div>
      </div>
    </div>
  );
}
