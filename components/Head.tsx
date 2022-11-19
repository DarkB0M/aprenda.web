import { Html, Head } from "next/document";
import React from "react";
type HeadProps = {
  title: string;
  meta: true | boolean;
  
};

const HeadComponent: React.FC<HeadProps> = (props) => {
  return (
    <Html>
      <Head>
        <title>{props.title}</title>
        {props.meta ? (
          <>
          <meta charSet="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </>
        ) : null }
      </Head>
    </Html>
  );
};

export default HeadComponent;
