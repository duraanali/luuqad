import Link from "next/link";
import Image from "next/image";
const Login = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center m-40 sm:flex-row">
          <div className="text-center sm:w-1/2">
            <h3 className="text-3xl font-bold">Welcome Back!</h3>
            <div className="flex flex-col items-center justify-center mt-8 space-y-4">
            <Link href="/learn" className="w-3/5 h-12 px-4 py-2 rounded-xl text-lg tracking-widest bg-blue-400 text-white font-bold hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-[0px_4px_0px_0px_#4299E1]">
                SIGN IN{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full mt-4 space-y-4 text-center">
          <Link
            href="/"
            className="w-96 h-12 px-4 pt-2 rounded-xl text-lg tracking-widest bg-blue-400 text-white font-bold hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-[0px_4px_0px_0px_#4299E1]"
          >
            SIGN IN
          </Link>
        </div>
        {/* or line */}

        <div className="flex items-center w-full gap-2 mt-5">
          <hr className="flex-1 border-t-2 border-t-gray-300" />
          <p className="font-bold text-center text-gray-400">OR</p>
          <hr className="flex-1 border-t-2 border-t-gray-300" />
        </div>

        {/* OAuth Login */}
        <div className="flex items-center gap-5 mt-5">
  <button className="flex gap-2 items-center w-48 h-12  px-5 py-2 rounded-xl text-lg bg-white shadow-[0px_2px_2px_2px_#d1d5db]" type="button">
    <div className="flex items-center px-5 ">
      <Image className="" src="https://d35aaqx5ub95lt.cloudfront.net/images/ded9ca9461387f30221b67f627227388.svg" alt="" width={10} height={10} />
      <span className="pl-3 font-bold text-center text-blue-800 ">FACEBOOK</span>
    </div>
  </button>
  <button className="flex gap-2 items-center w-48 h-12 px-5 py-2 rounded-xl text-lg bg-white shadow-[0px_2px_2px_2px_#d1d5db]" type="button">
    <div className="flex items-center px-5">
      <Image className="" src="https://d35aaqx5ub95lt.cloudfront.net/images/7da752378a3b1b8bbcd94a4d4f10561e.svg" alt="" width={20} height={10} />
      <span className="pl-3 font-bold text-center text-blue-800">GOOGLE</span>
    </div>
  </button>
</div>
<div className="mt-6 text-center text-gray-400">
  <p>By signing in to Duolingo, you agree to our <Link href="/terms" className="font-bold">Terms</Link> and <Link href="/privacy" className="font-bold">Privacy Policy</Link></p>
</div>
<div className="mt-5 text-center text-gray-400">
  <p>his site is protected by reCAPTCHA Enterprise and the Google <Link href="/privacy" className="font-bold">Privacy Policy</Link> and <Link href="Terms" className="font-bold"> Terms of Service apply.</Link></p>
</div>
      </div>
    </div>
  );
}

export default Login;