# Usage Guide

# Installation

- Install the VSCode extension
- Reload VSCode
- Snippets are ready 🎉

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

7. `rum` (useMemo hook)

   ```jsx
   useMemo(() => {}, []);
   ```

8. `rus` (useState hook)

   ```jsx
   const [state, setState] = useState(initialValue);
   ```

9. `ruc` (useContext hook)

   ```jsx
   const value = useContext(myContext);
   ```

10. `rucb` (useCallback hook)

```jsx
const handleCallback = useCallback(() => {}, []);
```

11. `rur` (useRef hook)

    ```jsx
    const refContainer = useRef(initialValue);
    ```

### TypeScript

1. `rfcet` (React functional component)

   ```tsx
   import type { FC } from "react";

   interface Props {}

   const Component: FC<Props> = () => {
     return <div></div>;
   };

   export default Component;
   ```

2. `ruet` (useEffect hook)

   ```tsx
   useEffect(() => {}, []);
   ```

3. `rumt` (useMemo hook)

   ```tsx
   useMemo<>(() => {}, []);
   ```

4. `rust` (useState hook)

   ```tsx
   const [state, setState] = useState(initialValue);
   ```

5. `ruct` (useContext hook)

   ```tsx
   const value = useContext(myContext);
   ```

6. `rucbt` (useCallback hook)

   ```jsx
   const handleCallback = useCallback(() => {}, []);
   ```

7. `rurt` (useRef hook)

   ```tsx
   const refContainer = useRef(initialValue);
   ```

## NextJS

### JavaScript

1.  `ngss` (Next.js get server side props)

    ```jsx
    export const getServerSideProps = async (context) => {
      return {
        props: {},
      };
    };
    ```

2.  `ngsp` (Next.js get static props)

    ```jsx
    export const getStaticProps = async (context) => {
      return {
        props: {},
      };
    };
    ```

3.  `ncapp` (Next.js custom app)

    ```jsx
    const MyApp = ({ Component, pageProps }) => {
      return <Component {...pageProps} />;
    };

    export default MyApp;
    ```

4.  `ncdoc` (Next.js custom document)

    ```jsx
    import Document, { Html, Main, NextScript } from "next/document";
    const Document: Document = () => {
      return (
        <Html lang="en">
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    };

    export default Document;
    ```

5.  `ngspa` (Next.js get static path)

    ```jsx
    export const getStaticPaths = async () => {
      return {
          paths:[${1}],
          fallback:false
        };
    };
    ```

6.  `ngapi` (Next.js API Route)

    ```jsx
    const handler = (req, res) => {
      res.status(200).json({ name: "John Doe" });
    };

    export default handler;
    ```

### TypeScript

1. `ngsst` (Next.js get server side props)

   ```tsx
   export const getServerSideProps: GetServerSideProps = async (context) => {
     return { props: {} };
   };
   ```

2. `ngspt` (Next.js get static props)

   ```tsx
   export const getStaticProps: getStaticProps = async (context) => {
     return { props: {} };
   };
   ```

3. `npt` (Next.js page)

   ```tsx
   import type { NextPage } from "next";
   const Page: NextPage = () => {
     return <></>;
   };
   export default Page;
   ```

4. `ngipt` (Next.js get initial props)

   ```tsx
   Page.getInitialProps = async (context) => {
     return { props: {} };
   };
   ```

5. `nct` (Next.js component)

   ```tsx
   import type { NextComponentType, NextPageContext } from "next";
   interface Props {}
   const Component: NextComponentType<NextPageContext, {}, Props> = (
     props: Props
   ) => {
     return <div></div>;
   };
   export default Component;
   ```

6. `ngspat` (Next.js Get Static Path Typescript)

   ```tsx
   export const getStaticPaths: GetStaticPaths = async () => {
     return {
       paths:[${1}],
       fallback:false
     };
   }
   ```

7. `ncappt` (Next.js custom app)

   ```tsx
   const MyApp = ({ Component, pageProps }) => {
     return <Component {...pageProps} />;
   };
   export default MyApp;
   ```

8. `ncdoct`(Next.js custom document)

   ```tsx
   import Document, { Html, Main, NextScript } from "next/document";
   const Document: Document = () => {
     return (
       <Html lang="en">
         <body>
           <Main />
           <NextScript />
         </body>
       </Html>
     );
   };

   export default Document;
   ```

9. `ngapit` (TypeScript: Next.js API Route)

   ```tsx
   import type { NextApiRequest, NextApiResponse } from "next";

   type Data = {
     name: string;
   };

   const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
     res.status(200).json({ name: "John Doe" });
   };

   export default handler;
   ```
