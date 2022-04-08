import DeleteIcon from '@mui/icons-material/Delete';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { ICategory } from 'models/ICategory';
import React from 'react';
import {
    changeActualCategory,
    changeCategoryForTransactions,
    deleteCategory,
} from 'store/reducers/ActionCreators';
import { authSelector } from 'store/reducers/AuthSlice';
import { categorySelector } from '../store/reducers/CategorySlice';

const ListCategories = () => {
    const dispatch = useAppDispatch();
    const { idUser } = useAppSelector(authSelector);
    const { categories, actualCategory } = useAppSelector(categorySelector);

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        nextView: number
    ) => {
        let idActualCategory = nextView;
        if (!idActualCategory) idActualCategory = 0;
        dispatch(changeActualCategory(idActualCategory));
    };

    const clickDeleteCategory = (idCategory: number, idUser: number | null) => {
        if (idUser) {
            dispatch(deleteCategory({ idUser, idCategory }));
            dispatch(changeCategoryForTransactions({ idUser, idCategory }));
        }
    };

    return (
        <div>
            <ToggleButtonGroup
                orientation="vertical"
                value={actualCategory}
                exclusive
                onChange={handleChange}
            >
                {categories.map((category: ICategory) => (
                    <ToggleButton key={category.id} value={category.id}>
                        {category.label}
                        <DeleteIcon
                            onClick={() =>
                                clickDeleteCategory(category.id, idUser)
                            }
                        />
                    </ToggleButton>
                ))}
                <ToggleButton value={0}>інше</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
};

export default ListCategories;
