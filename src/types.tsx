export type Idea = {
    id: number,
    title: string,
    description: string,
    voteCount: number,
    tags: Array<string>,
    createdAt: Date,
    employeeId: string
}

export type MainState = {
    ideaList: Idea[],
    loading: boolean,
    showModal: boolean,
    sortByValue: string
}

export enum ActionTypes {
    SetLoading = 'SETLOADING',
    SetData = 'SETDATA',
    Sort = 'SORT',
    ToggleModal = 'TOGGLEMODAL',
    AddData = 'ADDDATA',
    IncrementCount = 'IncrementCount',
    DeleteData = 'DeleteData'
}

export type Action = {
    type: ActionTypes,
    payload: any
}