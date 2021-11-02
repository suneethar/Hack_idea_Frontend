import { Action, ActionTypes, Idea, MainState } from "../types";

const mainReducer = (state: MainState, action: Action) => {
    switch(action.type) {
        case ActionTypes.SetLoading:
            return { ...state, loading: true };

        case ActionTypes.SetData:
            return { ...state, showModal: false, loading: false, ideaList: action.payload };

        case ActionTypes.AddData:
            let {newIdea, employeeId} = action.payload;
            const uniqueId = Math.floor(Math.random() * 100);
            // Convert date to string
            newIdea.createdAt = new Date().toString();
            newIdea.voteCount = 0;
            newIdea.employeeId = employeeId;
            newIdea.id = uniqueId;
            return { ...state, ideaList: [...state.ideaList, newIdea], loading: false, showModal: false };

        case ActionTypes.IncrementCount: 
            let { id, count } = action.payload;
            let ideas = [...state.ideaList];
            let index = ideas.findIndex((idea) => idea.id === id);
            ideas[index].voteCount = ++count;
            return { ...state, ideaList: ideas };

        case ActionTypes.Sort:
            const data = getSortedData(state.ideaList, action.payload);
            return { ...state, ideaList: data };

        case ActionTypes.ToggleModal:
            return { ...state, showModal: action.payload };
        
        default:
            return state;
    }
}

const getSortedData = (data:Idea[], value:string) => {
    let newData = [...data];
    const key = value === 'vote' ? 'voteCount' : 'createdAt';

    return newData.sort(function (a, b) {
        if (new Date(a[key]) > new Date(b[key])) return 1;
        if (new Date(a[key]) < new Date(b[key])) return -1;
        return 0;
    });
}

export default mainReducer;