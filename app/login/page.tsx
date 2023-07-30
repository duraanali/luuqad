import Link from "next/link";
export default function Login() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <div className="m-40 flex flex-col items-center justify-center sm:flex-row">
          <div className="text-center sm:w-1/2">
            <h3 className="text-3xl font-bold">Welcome Back!</h3>
            <div className="flex flex-col items-center justify-center mt-8 space-y-4">
            <Link href="/learn" className="w-3/5 h-12 px-4 py-2 rounded-xl text-lg tracking-widest bg-blue-400 text-white font-bold hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-[0px_4px_0px_0px_#4299E1]">
                SIGN IN{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
