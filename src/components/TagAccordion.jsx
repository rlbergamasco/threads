import React, { useState } from 'react';
import { Typography, Accordion as MuiAccordion, AccordionSummary as MuiAccordionSummary, AccordionDetails as MuiAccordionDetails } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Add } from '@mui/icons-material';

const TagAccordion = () => {
    const tagCategories = ['Clothing Type', 'Color', 'Occasion', 'Weather', 'Other'];

    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (_, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <React.Fragment>
            {tagCategories.map((cat, i) =>
                <Accordion key={i} elevation={0} sx={{ border: '0' }} expanded={expanded === cat} onChange={handleChange(cat)}>
                    <AccordionSummary>
                        <Typography>{cat}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Details here</Typography>
                    </AccordionDetails>
                </Accordion>
            )}
        </React.Fragment>
    );
};

export { TagAccordion };

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<Add sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(() => ({
    flexDirection: 'row',
    padding: 0,
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(45deg)',
    },
    '& .MuiAccordionSummary-content': {
        margin: 0,
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(0),
    marginTop: '-8px'
}));