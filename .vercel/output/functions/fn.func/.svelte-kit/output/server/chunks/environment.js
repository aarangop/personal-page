let base = "";
let assets = base;
const initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let private_env = {};
let public_env = {};
let safe_public_env = {};
function set_private_env(environment) {
  private_env = environment;
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
let building = false;
let prerendering = false;
function set_building() {
  building = true;
}
function set_prerendering() {
  prerendering = true;
}
export {
  assets as a,
  base as b,
  set_private_env as c,
  prerendering as d,
  set_public_env as e,
  set_safe_public_env as f,
  set_assets as g,
  set_building as h,
  set_prerendering as i,
  building as j,
  private_env as k,
  override as o,
  public_env as p,
  reset as r,
  safe_public_env as s
};
