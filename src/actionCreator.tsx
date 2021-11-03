import { ActionTypes } from "./types"

/** Action creator */
export const setLoading = (payload:any) => {
    return {
        type: ActionTypes.SetLoading,
        payload: payload
    }
}

export const setData = (payload: any) => {
    return {
        type: ActionTypes.SetData,
        payload: payload
    }
}

export const addData = (payload: any) => {
    return {
        type: ActionTypes.AddData,
        payload: payload
    }
}

export const deleteData = (payload: number) => {
    return {
        type: ActionTypes.DeleteData,
        payload: payload
    }
}

export const sortData = (payload: any) => {
    return {
        type: ActionTypes.Sort,
        payload: payload
    }
}

export const toggleModal = (payload: Boolean) => {
    return {
        type: ActionTypes.ToggleModal,
        payload: payload
    }
}

export const increamentCount = (payload: any) => {
    return {
        type: ActionTypes.IncrementCount,
        payload: payload
    }
}