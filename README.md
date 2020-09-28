# tutorial_typescript_library

Example of a simple TypeScrtipt library, with 3rd party dependency, consumed from Javascript/Typescript.
Usess CommonJS module format.

# Compile and publish

```shell
tsc
npm publish
```

# Usage

See `client-ts` and `client-js`.


Add dependency

```shell
npm install --save cc-ts-lib-tutorial
```

use it like this:

```typescript
import { sayHello, sayFibo } from 'cc-ts-lib-tutorial';
sayHello();
sayFibo();
```

```javascript
const lib = require('cc-ts-lib-tutorial');
lib.sayHello();
lib.sayFibo();
```

Created using
https://www.tsmean.com/articles/how-to-write-a-typescript-library/

