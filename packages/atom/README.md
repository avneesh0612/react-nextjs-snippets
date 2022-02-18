# Usage Guide

# Installation

- Install the Atom package
- Reload Atom
- The code snippets are ready to use 🎉

# Usage

## React

### JavaScript

1. `rimr` (Import React)

   ```jsx
   import React from "react";
   ```

2. `rimrd` (Import ReactDOM)

   ```jsx
   import ReactDOM from "react-dom";
   ```

3. `rimrs` (Import React and useState)

   ```jsx
   import React, { useState } from "react";
   ```

4. `rimrse` (Import React, useState and useEffect)

   ```jsx
   import React, { useState, useEffect } from "react";
   ```

5. `rfc` (React functional component)

   ```jsx
   const Component = () => {
     return <div></div>;
   };
   export default Component;
   ```

6. `rue` (useEffect hook)

   ```jsx
   useEffect(() => {}, []);
   ```

7. `rus` (useState hook)

   ```jsx
   const [state, setState] = useState(initialValue);
   ```

8. `ruc` (useContext hook)

   ```jsx
   const value = useContext(myContext);
   ```

9. `rur` (useRef hook)

   ```jsx
   const refContainer = useRef(initialValue);
   ```

### TypeScript

1. `rfcet` (React functional component)

   ```tsx
   import React from "react";

   interface Props {}

   function Component({}: Props) {
     return <div></div>;
   }

   export default Component;
   ```

2. `ruet` (useEffect hook)

   ```tsx
   useEffect(() => {}, []);
   ```

3. `rust` (useState hook)

   ```tsx
   const [state, setState] = useState(initialValue);
   ```

4. `ruct` (useContext hook)

   ```tsx
   const value = useContext(myContext);
   ```

5. `rurt` (useRef hook)

   ```tsx
   const refContainer = useRef(initialValue);
   ```
