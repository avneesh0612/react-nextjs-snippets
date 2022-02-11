# Next.js and React Snippets README

NextJS and React Snippets with TypeScript support as well!🚀

# Installation

- Install the VSCode extension
- Reload VSCode
- Snippets are ready 🎉

# Usage

## React

### JavaScript

1.  `rafce` (React Functional Component)

    ```jsx
    const Component = () => {
      return <div></div>;
    };
    export default Component;
    ```

### TypeScript

2. `rafect` (React Functional Component with Types)

   ```tsx
   import { FC } from "react";
   interface Props {}
   const Component: FC<Props> = () => {
     return <div></div>;
   };
   export default Component;
   ```

## NextJS

### JavaScript

<<<<<<< HEAD
1.  `nssr` (Get Server Side Props Next.js)
=======
1.  `nssr` (Next.js Get Server Side Props Typescript)
>>>>>>> 5f7082e97c62b0d190ff1375a6a840db993a53c2

    ```jsx
    export const getServerSideProps = async (context) => {
      return {
        props: {},
      };
    };
    ```

<<<<<<< HEAD
2.  `nssg` (Get Static Props Next.js)
=======
2.  `nssg` (Next.js Get Static Props Typescript)
>>>>>>> 5f7082e97c62b0d190ff1375a6a840db993a53c2

    ```jsx
    export const getStaticProps = async (context) => {
      return {
        props: {},
      };
    };
    ```

### TypeScript

<<<<<<< HEAD
1. `nssrt` (Get Server Side Props Next.js)
=======
1. `nssrt` (Next.js Get Server Side Props Typescript)
>>>>>>> 5f7082e97c62b0d190ff1375a6a840db993a53c2

   ```tsx
   export const getServerSideProps: GetServerSideProps = async (context) => {
     return { props: {} };
   };
   ```

<<<<<<< HEAD
2. `nssgt` (Get Static Props Next.js)
=======
2. `nssgt` (Next.js Get Static Props Typescript)
>>>>>>> 5f7082e97c62b0d190ff1375a6a840db993a53c2

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

<<<<<<< HEAD
3) `npaget` (NextPage component with NextPage type)
=======
3) `npt` (Next.js Page Typescript)
>>>>>>> 5f7082e97c62b0d190ff1375a6a840db993a53c2

   ```tsx
   import type { NextPage } from "next";
   const Page: NextPage = () => {
     return <></>;
   };
   export default Page;
   ```

<<<<<<< HEAD
4) `nct` (Next JS Component with NextComponentType and Props)
=======
4) `nct` (Next.js Component Typescript)
>>>>>>> 5f7082e97c62b0d190ff1375a6a840db993a53c2

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
