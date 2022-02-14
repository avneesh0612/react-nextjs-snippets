# React and Next.js Snippets README

React and Next.js Snippets with TypeScript support as well!🚀

![Logo Showcase](https://user-images.githubusercontent.com/76690419/153743536-15a5218f-12fc-4f20-9557-9f79863ef5b8.png)

<a href="https://www.producthunt.com/posts/react-and-next-js-snippets?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-react-and-next-js-snippets" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=331596&theme=dark" alt="React and Next.js Snippets - React and Next.js snippets with TypeScript | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>


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

6. `rue` (React useEffect)

   ```jsx
   useEffect(() => {}, []);
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

1.  `nssr` (Next.js Get Server Side Props)

    ```jsx
    export const getServerSideProps = async context => {
      return {
        props: {},
      };
    };
    ```

2.  `nssg` (Next.js Get Static Props)

    ```jsx
    export const getStaticProps = async context => {
      return {
        props: {},
      };
    };
    ```

3.  `ncapp` (Next Custom App)

    ```jsx
    const MyApp = ({ Component, pageProps }) => {
      return <Component {...pageProps} />;
    };

    export default MyApp;
    ```

4.  `ncdoc` (Next Custom Document)

    ```jsx
    import Document, { Html, Main, NextScript } from "next/_document";
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
    
5. `ngsp` (Next.js Get Static Path Javascript)

    ```jsx
    export const getStaticPaths = async () => {
      return {
          paths:[${1}],
          fallback:false
        };
    }; 
 

### TypeScript

1. `nssrt` (Next.js Get Server Side Props Typescript)

   ```tsx
   export const getServerSideProps: GetServerSideProps = async context => {
     return { props: {} };
   };
   ```

2. `nssgt` (Next.js Get Static Props Typescript)

   ```tsx
   export const getStaticProps: getStaticProps = async context => {
     return { props: {} };
   };
   ```

3. `ngip` (Get Initial Props in Next.js)

   ```tsx
   Page.getInitialProps = async context => {
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

6. `ncappt` (Next Custom App Typescript)

   ```tsx
   const MyApp = ({ Component, pageProps }) => {
     return <Component {...pageProps} />;
   };
   export default MyApp;
   ```

7. `ncdoct`(Next Custom Document Typescript)

   ```tsx
   import Document, { Html, Main, NextScript } from "next/_document";
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

8. `ngspt` (Next.js Get Static Path Typescript)

    ```tsx
    export const getStaticPaths: GetStaticPaths = async () => {
      return {
        paths:[${1}],
        fallback:false
      };
    }
    ```  
