import {DELETE_RESULT, STORE_RESULT} from "./actionsTypes";

export const saveResult = (value) => {
    return {
        type: STORE_RESULT,
        result: value
    }
};

export const storeResult = (value) => {
    return function(dispatch){
        setTimeout(() => {
            dispatch(saveResult(value))
        }, 2000);
    };
};

export const deleteResult = (value) => {
    return {
        type: DELETE_RESULT,
        id: value
    }
};