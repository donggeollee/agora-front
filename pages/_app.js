import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Router from "next/router";
import AppLayout from  "components/Agora/AppLayout.js";
import axios from 'axios'; 
import PageChange from "components/PageChange/PageChange";
import "assets/scss/nextjs-material-kit.scss?v=1.1.0";
// 리덕스. 리덕스 사가 연동 라이브러리
import withReduxSaga from 'next-redux-saga';
import wrapper from '../store/configureStore.js';

 
Router.events.on("routeChangeStart", url => {
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

const Home = ({Component, pageProps})=>{
  return (
        <React.Fragment>
          {pageProps.asPath && pageProps.asPath.indexOf('manager') === -1
            ? <AppLayout {...pageProps}>
                <Component {...pageProps} />
              </AppLayout> 
              : <Component {...pageProps} />
          }
        </React.Fragment>
  )
} 
 
Home.getInitialProps = async (context) => {
  const { ctx, Component, router } = context;
  
  /*
  if ( ctx.isServer && cookie ){
      axios.defaults.headers.cookie = cookie; 
  }
  */
 // 로컬스토리지에 JWT_TOKEN이 있다면 
 // 서버사이드 렌더링으로 API 서버에서 유저정보를 가져오고 싶은데
 // 프론트서버에서는 로컬스토리지에 접근할 수 없는 문제 때문에 
 // 일단 위의 useEffect()에서 CSR로 가져오고 있음
 /*
  if( !state.user.user.username && ctx.isServer ){
      ctx.store.dispatch({
          type : LOAD_USER_REQUEST, 
      });
  }
  */

  // console.log("context : ", context);
  // console.log("ctx : ", ctx);
  // console.log("router : ", router);
  // console.log("Component : ", Component);

  let pageProps = {}; 
  const state = ctx.store.getState();
  const cookie = ctx.isServer ? ctx.req.headers.cookie : '';
  axios.defaults.headers.cookie = '';
  
  if( Component.getInitialProps ){
      pageProps = await Component.getInitialProps(ctx) || {};
  }
  return {pageProps}
}

export default wrapper.withRedux(withReduxSaga(Home));

// class Home extends App {
//   componentDidMount() {
//     let comment = document.createComment(`

// =========================================================
// * NextJS Material Kit v1.1.0 based on Material Kit Free - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit React v1.8.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/nextjs-material-kit
// * Copyright 2020 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// `);
//     document.insertBefore(comment, document.documentElement);
//   }
//   static async getInitialProps(context) {
//     let pageProps = {};
//     const { Component, router, ctx } = context;
//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx);
//     }

//     return { pageProps };
//   }
//   render() {
//     const { Component, pageProps, store } = this.props;

//     return (
//       <Provider store={store} >
//       <AppLayout>
//         <Component {...pageProps} />
//       </AppLayout>
//     </Provider>
//     );
//   }
// }




