import React, { useEffect } from "react";
import Router from "next/router";

const Index = ({ }) => {

  useEffect(()=>{

  },[])

    return ( 
      <div>
          welcome;
      </div>
    ) 
}

Index.getInitialProps = (context) => {

  return {
      asPath : context.asPath
  }
}

export default Index;
