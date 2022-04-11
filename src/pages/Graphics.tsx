import { Box } from '@mui/material';
import Chart from 'components/Chart';
import ListCategories from 'components/ListCategories';
import React from 'react';

const Graphics: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                padding: '3%',
                flexDirection: { xs: 'column', md: 'row' },
            }}
        >
            <Box sx={{ margin: '10px' }}>
                <ListCategories isDeleteCategory={false} />
            </Box>
            <Box
                sx={{
                    width: { sm: '100%', md: '80%', lg: '60%', xl: '50%' },
                    height: '100%',
                    margin: '10px',
                }}
            >
                <Chart />
            </Box>
        </Box>
    );
};

export default Graphics;
