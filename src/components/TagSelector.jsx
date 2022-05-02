import React, { useState, useEffect } from 'react';
import { Box, Dialog, Typography, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectTags, addTag } from "appSlice";
import PropTypes from 'prop-types';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import { MoreHoriz, Close } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const TagSelector = ({ allowEditTags, setSelectedTags, selectedTags }) => {
    const tagCategories = ['Clothing Type', 'Color', 'Occasion', 'Weather', 'Other'];
    const tagOptions = useSelector(selectTags);
    const [newTagValue, setNewTagValue] = useState(null);

    return (
        <React.Fragment>
            {tagCategories.map((cat, i) =>
                <Box key={i} sx={{ py: 1 }}>
                    <CustomSelector
                        allowEditTags={allowEditTags}
                        category={cat}
                        options={[...new Set([newTagValue, ...tagOptions.filter(op => op.category === cat).map(op => op.label)].filter(el => el !== null))]}
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags}
                        setNewTagValue={setNewTagValue}
                    />
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

const CustomSelector = ({ options, category, allowEditTags, selectedTags, setSelectedTags, setNewTagValue }) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(selectedTags[category] ? selectedTags[category] : []);
    const [open, setOpen] = useState(false);
    const [tagName, setTagName] = useState(false);

    const handleClick = (label) => {
        setTagName(label);
        setOpen(true);
    }

    const handleDeleteTag = () => {
        console.log("delete " + tagName + " from " + category);
        setOpen(false);
    }

    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getTagProps,
        getListboxProps,
        groupedOptions,
        focused,
        inputValue,
        setAnchorEl,
    } = useAutocomplete({
        id: 'tag-selector',
        multiple: true,
        options: options,
        value: value,
        getOptionLabel: (option) => option,
    });

    useEffect(() => {
        setSelectedTags({ [category]: value });
    }, [value]);

    useEffect(() => {
        if (inputValue === '' || !allowEditTags) {
            setNewTagValue(null);
        } else {
            setNewTagValue(inputValue);
        }
    }, [inputValue]);

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
                                <MoreHoriz onClick={() => handleClick(option)} fontSize="small" />
                            </li>
                    ))}
                </Listbox>
            ) : null}
            <Dialog open={open} onClose={() => setOpen(false)}>
                <Box sx={{ p: 1 }}>
                    <Typography align='center'>Delete "{tagName}" tag?</Typography>
                    <Box sx={{ display: 'flex', p: 1 }}>
                        <Button variant='contained' sx={{ textTransform: 'capitalize', mr: 1 }} onClick={() => setOpen(false)}>Cancel</Button>
                        <Button variant='contained' sx={{ textTransform: 'capitalize' }} onClick={handleDeleteTag}>Confirm</Button>
                    </Box>
                </Box>
            </Dialog>
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
  width: 100%;
  border: 1px solid ${theme.palette.text.disabled};
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