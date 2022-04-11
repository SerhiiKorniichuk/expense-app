import { Box } from '@mui/material';
import FormAddCategory from 'components/FormAddCategory';
import FormAddTransaction from 'components/FormAddTransaction';
import ListCategories from 'components/ListCategories';
import ListTransactions from 'components/ListTransactions';
import React from 'react';

const Main: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                padding: '3%',
                flexDirection: { xs: 'column', md: 'row' },
            }}
        >
            <Box
                sx={{
                    margin: '10px',
                }}
            >
                <ListCategories isDeleteCategory={true} />
                <FormAddCategory />
            </Box>
            <Box
                sx={{
                    width: { md: '100%', lg: '80%', xl: '60%' },
                    margin: '0px 10px',
                }}
            >
                <ListTransactions />
                <FormAddTransaction />
            </Box>
        </Box>
    );
};

export default Main;
