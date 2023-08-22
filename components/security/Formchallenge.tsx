import ReCAPTCHA from "react-google-recaptcha";

function Formchallenge({
    //@ts-ignore
  setCaptchasolved

    
}) {
  return (
    <div>
      <ReCAPTCHA
              onChange={(e)=>{
                // more validation required on the server side but for simplicity we will just check if the captcha is solved
                setCaptchasolved(true);
              }}
              onExpired={()=>{
                setCaptchasolved(false);
              }}
               sitekey={
                /* if you want to use your own recaptcha key you can set it in the .env file the default key is from imrannurhirey@gmail.com gcp that accepts
                 only localhost ,luuqad.vercel.app and luuqad.com
                    */
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY:"6LeNmJkmAAAAAA3PZ5pryapWHY5dY9iop2PA8EFw"
               } />
    </div>
  )
}

export default Formchallenge
