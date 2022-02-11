# Next.js and React Snippets README

NextJS and React Snippets with TypeScript support as well!🚀

# Installation

- Install the VSCode extension
- Reload VSCode
- Snippets are ready 🎉

# Usage

## React

### JavaScript

1. `rim` (Import React)

  ```jsx
  import React from 'react';
  ```

2. `rird` (Import ReactDOM)

  ```jsx
  import ReactDOM from 'react-dom';
  ```

3. `rimrs` (Import React and useState)

  ```jsx
  import React, { useState } from 'react';
  ```

4. `rimrse` (Import React, useState and useEffect)

  ```jsx
  import React, { useState, useEffect} from 'react';
  ```

5. `rfce` (React functional component)

  ```jsx
  const Component = () => {
    return <div></div>;
  }
  export default Component;
  ```

6. `rue` (React useEffect)

  ```jsx
  useEffect(() => {
    
    }, []);
  ```

7. `rus` (React useState)

  ```jsx
  const [state, setState] = useState(initialValue);
  ```

8. `ruc` (React useContext)

  ```jsx
  const value = useContext(myContext);
  ```

9. `rur` (React useRef)

  ```jsx
  const refContainer = useRef(initialValue);
  ```

### TypeScript

1. `rfcet` (React functional component Typescript)

  ```tsx
  import React from "react";

  interface Props {}

  function Component({}: Props) {
    return <div></div>;
  }

  export default Component;
  ```

## NextJS

### JavaScript

1.  `nssr` (Next.js Get Server Side Props Typescript)

    ```jsx
    export const getServerSideProps = async (context) => {
      return {
        props: {},
      };
    };
    ```

2.  `nssg` (Next.js Get Static Props Typescript)

    ```jsx
    export const getStaticProps = async (context) => {
      return {
        props: {},
      };
    };
    ```

### TypeScript

1. `nssrt` (Next.js Get Server Side Props Typescript)

   ```tsx
   export const getServerSideProps: GetServerSideProps = async (context) => {
     return { props: {} };
   };
   ```

2. `nssgt` (Next.js Get Static Props Typescript)

   ```tsx
   export const getStaticProps: getStaticProps = async (context) => {
     return { props: {} };
   };
   ```

3. `ngip` (Get Initial Props in Next.js)

   ```tsx
   Page.getInitialProps = async (context) => {
     return { props: {} };
   };
   ```

4. `npt` (Next.js Page Typescript)

   ```tsx
   import type { NextPage } from "next";
   const Page: NextPage = () => {
     return <></>;
   };
   export default Page;
   ```

5. `nct` (Next.js Component Typescript)

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
