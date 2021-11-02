import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';

const Dropdown = ({menuItems, selected, handleChange}:any) => {
    
    return (
        <FormControl>
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selected}
            label="Age"
            onChange={(e) => handleChange(e.target.value)}
        >
            {menuItems.map((menu:any) => {
                return <MenuItem key={menu.id} value={menu.value}>{menu.label}</MenuItem>
            })}
        </Select>
        </FormControl>
    )
}

export default Dropdown;