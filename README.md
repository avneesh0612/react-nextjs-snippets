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

1.  `nextssr` (Get Server Side Props Next.js)

    ```jsx
    export const getServerSideProps = async (context) => {
      return {
        props: {},
      };
    };
    ```

2.  `nextssg` (Get Static Props Next.js)

    ```jsx
    export const getStaticProps = async (context) => {
      return {
        props: {},
      };
    };
    ```

### TypeScript

1. `nextssrt` (Get Server Side Props Next.js)

   ```tsx
   export const getServerSideProps: GetServerSideProps = async (context) => {
     return { props: {} };
   };
   ```

2. `nextssgt` (Get Static Props Next.js)

   ```tsx
   export const getStaticProps: getStaticProps = async (context) => {
     return { props: {} };
   };
   ```

3. `taytay` (NextPage component with NextPage type)

   ```tsx
   import type { NextPage } from "next";
   const Page: NextPage = () => {
     return <></>;
   };
   export default Page;
   ```

4. `nextct` (Next JS Component with NextComponentType and Props)

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
