const initialState = {
    tabList :  [
        { id : '1', menu : 'Authentication', textColor: 'inherit', label : 'Users', },
        { id : '2', menu : 'Authentication', textColor: 'inherit', label : 'Authority', },
        { id : '3', menu : 'System', textColor: 'inherit', label : 'Hosting Info', },
        { id : '4', menu : 'System', textColor: 'inherit', label : 'Database', },
        { id : '5', menu : 'Storage', textColor: 'inherit', label : 'Images', },
        { id : '6', menu : 'Storage', textColor: 'inherit', label : 'Files', },
        { id : '7', menu : 'Agora', textColor: 'inherit', label : '아고라 기획', },
        { id : '8', menu : 'Agora', textColor: 'inherit', label : '아고라 관리', },
        { id : '9', menu : 'Agora', textColor: 'inherit', label : '추가기능', },
    ]
}


export const READ_MENU_REQUEST = 'navigator/READ_MENU_REQUEST';
export const READ_MENU_SUCCESS = 'navigator/READ_MENU_SUCCESS';
export const READ_MENU_FAILURE = 'navigator/READ_MENU_FAILURE';

const toolbarReducer = (state=initialState, action) => {
    switch(action.type){
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
        default : {
            return {
                ...state,
            }
        }

    }
}   

export default toolbarReducer;