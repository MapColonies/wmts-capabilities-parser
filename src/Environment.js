const Env = Object.freeze({
  Backend: "backend",
  Frontend: "frontend",
});
function getRuntimeEnvironment() {
  return typeof window === "object" ? Env.Frontend : Env.Backend;
}
module.exports = {Env, getRuntimeEnvironment};