import { makeStyles } from "@material-ui/core";
import styles from 'assets/jss/nextjs-material-kit/pages/components.js';
import Paperbase from 'components/Agora/Manager/Paperbase.js';
import { useEffect } from "react";


const Storage = ({ asPath }) => {
    const useStyles = makeStyles(styles);
    const classes = useStyles(); 

    useEffect(()=>{

    },[])
    
    return (
        <>
            <Paperbase asPath={asPath}/>
        </>
    )
}

Storage.getInitialProps = async (context) => {

    return {
        asPath : context.asPath
    };
}

export default Storage; 