import { BiLogoGithub, BiLogoGoogle, BiLogoFacebook } from 'react-icons/bi';

export default function GithubLogin() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 py-16 bg-bgl w-full h-full">
        <h2 className="text-3xl font-semibold text-center">
          <span className="text-pt">Market-</span>Place
        </h2>
        <p className="text-center text-2xl">Inicia sesión</p>
        <div className="flex flex-col gap-1">
          <button
            className="btn bg-pt/10 border-0"
            onClick={() =>
              signIn('github', {
                callbackUrl: '/marketplace',
                redirect: false,
              })
            }
          >
            <p className="flex justify-center items-center gap-1">
              Iniciar sesión con <BiLogoGithub className="text-xl" />
            </p>
          </button>
          <button
            className="btn bg-pt/10 border-0 mt-4"
            onClick={() =>
              signIn('google', {
                callbackUrl: '/marketplace',
                redirect: false,
              })
            }
          >
            <p className="flex justify-center items-center gap-1">
              Iniciar sesión con <BiLogoGoogle className="text-xl" />
            </p>
          </button>
        </div>
      </div>
    </>
  );
}
