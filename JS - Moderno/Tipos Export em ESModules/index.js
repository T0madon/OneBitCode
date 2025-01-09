import { inline } from "./inline.js";
import defaultInline from "./inline.js";
//Non inline
import exportDefault, { group } from "./non-inline.js";

inline();
defaultInline();
//Non-inline
group();
exportDefault();
