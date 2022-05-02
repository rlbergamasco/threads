import { List, ListItem, ListItemButton, ListItemAvatar, ListItemText, Avatar, ListSubheader, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectItems, selectTags } from "appSlice";
import { styled } from '@mui/material/styles';

const TagList = ({ outfit }) => {
    let items = outfit.items;
    const allItems = useSelector(selectItems);
    const allTags = useSelector(selectTags);

    const outfitItems = allItems.filter((testItem) => items.some((i) => i.itemId == testItem.id));
    let tags = [];
    outfitItems.forEach((item) => tags.push(...item.tagIds));
    let uniqTags = [...new Set(tags)];
    
    return (
        <List 
            dense 
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
            subheader={<ListSubheader sx={{margin: "1em 0", color: 'text.primary'}} component="div" ><Typography variant="h2">Tags</Typography></ListSubheader>}
        >
        <div style={{display: "flex", flexWrap: "wrap", width: "100%", padding: "0 16px 0 16px"}}>

        {uniqTags.map((tag) => {
            let tagObj = allTags.filter((testTag) => testTag.id == tag)[0];
            
            return (
                <ListItem
                key={tag}
                disablePadding
                sx={{width: "auto"}}
                >
                    <StyledTag label={tagObj.title}  />
                </ListItem>
                );
        })}
        </div>
    </List>
    )
}

function Tag(props) {
    const { value, setValue, label, onDelete, ...other } = props;
    return (
        <div {...other} >
            <span>{label}</span>
        </div>
    );
}


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
  padding: 0 10px 0 10px;
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

export { TagList };