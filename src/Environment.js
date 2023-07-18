const Env = Object.freeze({
  Backend: "backend",
  Frontend: "frontend",
});
function getRuntimeEnvironment() {
  return window ? Env.Frontend : Env.Backend;
}

export function isEnvFrontend(){
  return getRuntimeEnvironment() == Env.Frontend;
}