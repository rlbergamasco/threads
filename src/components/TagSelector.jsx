import React, { useState } from 'react';
import { Box, Typography, TextField, Autocomplete } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectTags, addTag } from "appSlice";
import PropTypes from 'prop-types';

const TagSelector = ({ allowCreateTags }) => {
    const dispatch = useDispatch();
    const tagCategories = ['Clothing Type', 'Color', 'Occasion', 'Weather', 'Other'];
    const tagOptions = useSelector(selectTags);
    const [inputValue, setInputValue] = useState(null);

    return (
        <React.Fragment>
            {tagCategories.map((cat, i) =>
                <Box key={i} sx={{ py: 1 }}>
                    <Autocomplete
                        multiple
                        disablePortal
                        autoHighlight
                        id="combo-box"
                        options={[...new Set([inputValue, ...tagOptions.filter(op => op.category === cat).map(op => op.title)].filter(el => el !== null))]}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label={cat} />}
                        // renderOption={(props, option, i) => <Typography key={i} onClick={() => setValue([option])}>{option}</Typography>}
                        onChange={(e, newValue) => {
                            // console.log(newValue);
                        }}
                        onInputChange={(e, newInputValue) => {
                            if (newInputValue === '' || !allowCreateTags) {
                                setInputValue(null);
                            } else {
                                setInputValue(newInputValue);
                            }
                        }}
                    />
                </Box>
            )}
        </React.Fragment>
    );
};

TagSelector.propTypes = {
    allowCreateTags: PropTypes.bool
};

TagSelector.defaultProps = {
    allowCreateTags: false
};

export { TagSelector };