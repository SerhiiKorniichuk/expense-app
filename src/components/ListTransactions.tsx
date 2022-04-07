import ItemTransaction from 'components/ItemTransaction';
import { useAppSelector } from 'hooks/redux';
import { ITransaction } from 'models/ITransaction';
import React from 'react';
import { categorySelector } from 'store/reducers/CategorySlice';
import { transactionSelector } from 'store/reducers/TransactionSlice';

const ListTransactions = () => {
    const { actualCategory } = useAppSelector(categorySelector);
    const { transactions } = useAppSelector(transactionSelector);

    return (
        <div>
            {transactions.map((tran: ITransaction) => {
                if (tran.id_category === actualCategory)
                    return (
                        <ItemTransaction
                            label={tran.label}
                            date={tran.date}
                            amount={tran.amount}
                            key={tran.id}
                        ></ItemTransaction>
                    );
            })}
        </div>
    );
};

export default ListTransactions;
