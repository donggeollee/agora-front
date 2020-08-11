import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PeopleIcon from '@material-ui/icons/People';
import Inbox from '@material-ui/icons/Inbox';
import SettingsIcon from '@material-ui/icons/Settings';
import TimerIcon from '@material-ui/icons/Timer';

const initialState = {
    navigator :  [
        { 
        id: 'Develop',
        children: [ 
          { id: 'System', icon: <DnsRoundedIcon />, link:'/manager', }, // (백엔드, 프론트엔드) 호스팅서버 시스템 정보, 데이터베이스 관리
          { id: 'Authentication', icon: <PeopleIcon />, link:'/manager/user', },
          { id: 'Storage', icon: <PermMediaOutlinedIcon /> ,link:'/manager/storage',  },
          { id: 'Agora', icon: <Inbox /> ,link:'/manager/agora', },  
        ],
      },
      {
        id: 'Quality',
        children: [
          { id: 'Analytics', icon: <SettingsIcon /> , link:'/' },
          { id: 'Performance', icon: <TimerIcon />  , link:'/'},
        ],
      },
    ]
}

export const CREATE_MENU_REQUEST = 'navigator/CREATE_MENU_REQUEST';
export const CREATE_MENU_SUCCESS = 'navigator/CREATE_MENU_SUCCESS';
export const CREATE_MENU_FAILURE = 'navigator/CREATE_MENU_FAILURE';

export const READ_MENU_REQUEST = 'navigator/READ_MENU_REQUEST';
export const READ_MENU_SUCCESS = 'navigator/READ_MENU_SUCCESS';
export const READ_MENU_FAILURE = 'navigator/READ_MENU_FAILURE';

export const DELETE_MENU_REQUEST = 'navigator/DELETE_MENU_REQUEST';
export const DELETE_MENU_SUCCESS = 'navigator/DELETE_MENU_SUCCESS';
export const DELETE_MENU_FAILURE = 'navigator/DELETE_MENU_FAILURE';

export const CHANGE_MANAGER_NAVIGATOR_MENU_SELETED_EFFECT = 'navigator/CHANGE_MANAGER_NAVIGATOR_MENU_SELETED_EFFECT';

const navigatorReducer = (state=initialState, action) => {
    switch(action.type){
        case CREATE_MENU_REQUEST : {
            return {
                ...state   
            }
        }
        case CREATE_MENU_SUCCESS : {
            return {
                
            }
        }
        case CREATE_MENU_FAILURE : {
            return {
                
            }
        }
        case READ_MENU_REQUEST : {
            return {
                ...state
            }
        }
        case READ_MENU_SUCCESS : {
            return {
                
            }
        }
        case READ_MENU_FAILURE : {
            return {
                
            }
        }
        case DELETE_MENU_REQUEST : {
            return {
                
            }
        }
        case DELETE_MENU_SUCCESS : {
            return {
                
            }
        }
        case DELETE_MENU_FAILURE : {
            return {
                
            }
        }
        case CHANGE_MANAGER_NAVIGATOR_MENU_SELETED_EFFECT: {
            console.log("action.data : ", action.data);
            return {
                ...state,
                navigator : state.navigator.map(menu=>{
                    return {
                        ...menu,
                        children : menu.children.map(child => {
                            return {
                                ...child,
                                active : child.link == action.data,
                            }                    
                        })
                    }
                })
            }
        }
        default : {
            return {
                ...state,
            }
        }

    }
}   

export default navigatorReducer;