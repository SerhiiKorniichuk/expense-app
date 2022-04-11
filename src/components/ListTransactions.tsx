import ItemTransaction from 'components/ItemTransaction';
import { useAppSelector } from 'hooks/redux';
import { CategoryAnother, ICategory } from 'models/ICategory';
import { ITransaction } from 'models/ITransaction';
import React from 'react';
import { categorySelector } from 'store/reducers/CategorySlice';
import { transactionSelector } from 'store/reducers/TransactionSlice';

const ListTransactions: React.FC = () => {
    const { actualCategory, categories } = useAppSelector(categorySelector);
    const { transactions } = useAppSelector(transactionSelector);

    return (
        <div>
            <h1>
                {categories
                    .find(
                        (category: ICategory) => category.id == actualCategory
                    )
                    ?.label.toUpperCase() ||
                    CategoryAnother.label.toUpperCase()}
            </h1>
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
        </div>
    );
};

export default ListTransactions;
