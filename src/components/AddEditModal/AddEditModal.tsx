import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import Modal from '../Modal';
import MultiSelect from '../MultiSelect/MultiSelect';
import './_addEditModal.scss';

const PREDEFINEDTAGS = [
    'Innovation',
    'Creativity',
    'Cloud',
    'VR',
    'AR'
];

const AddEditModal = ({show, handleClose, addIdea, content}: any) => {
    const [title, setTitle] = useState<string>(content.title);
    const [description, setDescription] = useState<string>(content.description);
    const [selectedTags, setSelectedTags] = useState(content.tags);

    const handleChange = (event: any) => {
        const value = event.target.value;
        setSelectedTags(
          typeof value === 'string' ? value.split(',') : value,
        );
    };

    const createIdea = () => {
        addIdea({title: title, description: description, tags: selectedTags});
    }

    return (
        <Modal show={show}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Add Idea
            </Typography>

            <form className="hc__modal__form">
                <TextField
                    required 
                    label="Title"
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <TextField
                    required
                    label="Description"
                    multiline
                    rows={4}
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                />
                <MultiSelect
                    required 
                    options={PREDEFINEDTAGS} 
                    selected={selectedTags} 
                    handleChange={(e: any) => handleChange(e)} 
                />
            </form>

            <div className="hc__modal__footer">
                <Button variant="contained" onClick={() => handleClose()}>Close</Button>
                <Button 
                    variant="contained" 
                    onClick={() => createIdea()} disabled={!title || !description }>
                    Create
                </Button>
            </div>
        </Modal>
    )
}

export default AddEditModal;