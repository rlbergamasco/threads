import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectTags, addTag } from "appSlice";
import PropTypes from 'prop-types';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import { MoreHoriz, Close } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const TagSelector = ({ allowEditTags, setSelectedTags, selectSelectedTags }) => {
    const tagCategories = ['Clothing Type', 'Color', 'Occasion', 'Weather', 'Other'];
    const tagOptions = useSelector(selectTags);
    const selectedTags = useSelector(selectSelectedTags);

    return (
        <React.Fragment>
            {tagCategories.map((cat, i) =>
                <Box key={i} sx={{ py: 1 }}>
                    <CustomSelector
                        allowEditTags={allowEditTags}
                        category={cat}
                        options={tagOptions.filter(op => op.category === cat).map(op => op.title)}
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags} />
                    {/* <Autocomplete
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
                            if (newInputValue === '' || !allowEditTags) {
                                setInputValue(null);
                            } else {
                                setInputValue(newInputValue);
                            }
                        }}
                    /> */}
                </Box>
            )}
        </React.Fragment>
    );
};

TagSelector.propTypes = {
    allowEditTags: PropTypes.bool
};

TagSelector.defaultProps = {
    allowEditTags: false
};

export { TagSelector };


// CUSTOM SELECTOR 

const CustomSelector = ({ options, category, allowEditTags, selectedTags, setSelectedTags }) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(selectedTags[category] ? selectedTags[category] : []);

    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getTagProps,
        getListboxProps,
        groupedOptions,
        focused,
        setAnchorEl,
    } = useAutocomplete({
        id: 'tag-selector',
        multiple: true,
        options: options,
        value: value,
        getOptionLabel: (option) => option,
    });

    useEffect(() => {
        const temp = category === 'Clothing Type' ? 'Type' : category;
        dispatch(setSelectedTags({ [category]: value }));
    }, [value]);

    return (
        <Root>
            <div {...getRootProps()}>
                <Label {...getInputLabelProps()}>{category}</Label>
                <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
                    {value.map((option, index) => (
                        <StyledTag label={option} value={value} setValue={setValue} {...getTagProps({ index })} />
                    ))}

                    <input {...getInputProps()} />
                </InputWrapper>
            </div>
            {groupedOptions.length > 0 ? (
                <Listbox {...getListboxProps()}>
                    {groupedOptions.map((option, i) => (
                        value.includes(option) ?
                            null :
                            <li key={i} className={allowEditTags ? '' : 'hide-menu'}>
                                <span onClick={() => setValue(new Array(...new Set([...value, option])))}>{option}</span>
                                <MoreHoriz onClick={() => console.log("clicked")} fontSize="small" />
                            </li>
                    ))}
                </Listbox>
            ) : null}
        </Root>
    );
}

const Root = styled('div')(
    ({ theme }) => `
  color: ${theme.palette.text.primary};
  font-size: 14px;
`,
);

const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled('div')(
    ({ theme }) => `
  width: 300px;
  border: 1px solid ${theme.palette.text.primary};
  background-color: ${theme.palette.background.paper};
  border-radius: 4px;
  padding: 2px;
  display: flex;
  flex-wrap: wrap;

  &.focused {
    border-color: ${theme.palette.primary.main};
  }

  & input {
    background-color: ${theme.palette.background.paper};
    color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'};
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`,
);

function Tag(props) {
    const { value, setValue, label, onDelete, ...other } = props;
    return (
        <div {...other} onClick={() => setValue(value.filter(val => val !== label))} >
            <span>{label}</span>
            <Close />
        </div>
    );
}

Tag.propTypes = {
    label: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

const StyledTag = styled(Tag)(
    ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  color: #fff;
  background-color: ${theme.palette.primary.main};
  border: 0;
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: ${theme.palette.primary.main};
    background-color: ${theme.palette.background.default};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`,
);

const Listbox = styled('ul')(
    ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.background.paper};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 100;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: ${theme.palette.primary.main};
    }
  }

  & li.hide-menu {
    & svg {
      color: transparent;
    }
  }

  & li[data-focus='true'] {
    background-color: ${theme.palette.background.default};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`,
);