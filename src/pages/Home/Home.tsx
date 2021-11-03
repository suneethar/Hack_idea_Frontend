import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect, useReducer } from "react";
import AddEditModal from "../../components/AddEditModal/AddEditModal";
import DetailCard from "../../components/DetailCard";
import Dropdown from "../../components/Dropdown/Dropdown";
import Header from "../../components/Header";
import { fetchAPI, getUserDetails } from "../../utils/helper";
import './_home.scss';
import {Ideas} from '../../fakeData/dummyIdeasData';
import mainReducer from "../../reducer/reducer";
import { setLoading, setData, addData, sortData, toggleModal, increamentCount, deleteData } from "../../actionCreator";
import { Idea } from "../../types";
import Typography from "@mui/material/Typography";

const IDEAS = Ideas;

const initialState = {
    showModal: false,
    loading: false,
    ideaList: [],
    sortByValue: 'none'
}

const Home: React.FC<{}> = () => {
    // Get userdetails stored in localstorage
    const user = getUserDetails();

    const [{showModal, loading, ideaList, sortByValue}, dispatch] = useReducer(mainReducer, initialState);
    const ddMenuItems = [
        { label: 'None', id: 'none', value: 'none' },
        { label: 'Vote', id: 'vote', value: 'vote' },
        { label: 'Date', id: 'date', value: 'date' }
    ]

    // Called after the fetch callback to update data
    const callbackHandler = (response: any) => {
        dispatch(setData(response.data));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        // fetchAPI('ideas' ,'GET', {} ,callbackHandler);

        // Without backend
        dispatch(setLoading(true));
        const response = { data: IDEAS };
        callbackHandler(response);
    }

    const createNewIdea = (newIdea: any) => {
        // fetchAPI('add-idea ,'POST', newIdea, callbackHandler);
        dispatch(addData({newIdea, employeeId: user.employeeId}));
    }

    const updateVoteCount = (id:number, count:number) => {
        dispatch(increamentCount({id: id, count: count}));
    }

    const handleSortByValueChange = (value:string) => {
        dispatch(sortData(value));
    }

    return (
        <>
            <Header />

            <main className="hc__container">
                <div className="hc__container__actions">
                    <Button variant="contained" onClick={() => dispatch(toggleModal(true))}>Add Idea</Button>
                    <Dropdown 
                        menuItems={ddMenuItems} 
                        selected={sortByValue} 
                        handleChange={(value:string) => handleSortByValueChange(value)}
                    />
                </div>

                <div className="hc__container__items" data-testid="ideasList">
                    { loading && <CircularProgress /> }
                    { !loading && ideaList.length === 0 ? 
                        <Typography variant="h5" component="h5">
                            No Ideas found
                        </Typography>:
                        ideaList.map((idea: Idea) => {
                            return <DetailCard data={idea} key={idea.id}
                                    updateVoteCount={(id:number, count:number) => updateVoteCount(id, count)} 
                                    deleteIdea={(id: number) => dispatch(deleteData(id))} />
                        })
                    }
                </div>
                
                {showModal ? <AddEditModal 
                    show={showModal} 
                    handleClose={() => dispatch(toggleModal(false))}
                    addIdea={(newIdea: any) => createNewIdea(newIdea)}
                    content={{title: '', description: '', tags: []}}
                /> : null}
                
            </main>
        </>
    )
}

export default Home;
