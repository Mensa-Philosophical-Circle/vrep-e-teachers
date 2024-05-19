import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CustomFilter = ({ title, maxHeight, width, handleGetStudents }) => {
  const handleChange = (event) => {
    handleGetStudents(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(event) => handleChange(event)}
          sx={{
            borderRadius: 40,
            padding: '0 15px',
            maxHeight: { maxHeight },
            width: { width },
          }}
        >
          <MenuItem value="date">Newest</MenuItem>
          <MenuItem value="">Oldest</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomFilter;

