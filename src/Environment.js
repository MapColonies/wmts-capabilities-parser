const Env = Object.freeze({
  Backend: "backend",
  Frontend: "frontend",
});
function getRuntimeEnvironment() {
  return typeof window !== 'undefined' ? Env.Frontend : Env.Backend;
}

export function isEnvFrontend(){
  return getRuntimeEnvironment() == Env.Frontend;
}