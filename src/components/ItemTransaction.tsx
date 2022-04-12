import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import React from 'react';

interface ItemTransactionProps {
    label: string;
    date: string;
    amount: number;
}

const DivItem = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
});

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    margin: '10px 15% 10px 0px',
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

const ItemTransaction: React.FC<ItemTransactionProps> = ({
    label,
    date,
    amount,
}) => {
    return (
        <Item>
            <h1>{label}</h1>
            <DivItem>
                <span>{amount}</span>
                <span>{date}</span>
            </DivItem>
        </Item>
    );
};

export default ItemTransaction;
