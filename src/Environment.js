export const Env = Object.freeze({
  Backend: "backend",
  Frontend: "frontend",
});
export function getRuntimeEnvironment() {
  return typeof window === "object" ? Env.Frontend : Env.Backend;
}
