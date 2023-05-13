import * as wasm from "./replicators_bg.wasm";
import { __wbg_set_wasm } from "./replicators_bg.js";
__wbg_set_wasm(wasm);
export * from "./replicators_bg.js";
