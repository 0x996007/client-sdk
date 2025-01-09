/* eslint-disable @typescript-eslint/no-namespace */
import * as _260 from './abci/types.js';
import * as _261 from './crypto/keys.js';
import * as _262 from './crypto/proof.js';
import * as _263 from './libs/bits/types.js';
import * as _264 from './p2p/types.js';
import * as _265 from './types/block.js';
import * as _266 from './types/evidence.js';
import * as _267 from './types/params.js';
import * as _268 from './types/types.js';
import * as _269 from './types/validator.js';
import * as _270 from './version/types.js';
export var tendermint;
(function (tendermint) {
    tendermint.abci = { ..._260 };
    tendermint.crypto = { ..._261, ..._262 };
    let libs;
    (function (libs) {
        libs.bits = { ..._263 };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = { ..._264 };
    tendermint.types = { ..._265, ..._266, ..._267, ..._268, ..._269 };
    tendermint.version = { ..._270 };
})(tendermint || (tendermint = {}));
//# sourceMappingURL=bundle.js.map