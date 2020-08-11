import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import styles from 'assets/jss/nextjs-material-kit/pages/components.js';
import { makeStyles } from "@material-ui/core";
import Router from "next/router";
import classNames from "classnames";
import { useEffect } from "react";


const useStyles = makeStyles(styles);

const AppLayout = (props) => {
    const classes = useStyles();
    const {children, ...pageProps} = props;
    const {asPath} = pageProps;
     
    useEffect(()=>{ 
        console.log("AppLayout pageProps : ", pageProps);
    })

    return ( 
        <>
            <Header brand="NextJS Material Kit"
                    rightLinks={<HeaderLinks />}
                    fixed
                    color="transparent"
                    changeColorOnScroll={{ 
                        height: 400,
                        color: "white"
                    }}
            />
            <div className={classNames(classes.main, classes.mainRaised)}>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default AppLayout;