import DeleteIcon from '@mui/icons-material/Delete';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { ICategory } from 'models/ICategory';
import React from 'react';
import {
    categorySelector,
    categorySlice,
} from '../store/reducers/CategorySlice';

const ListCategories = () => {
    const dispatch = useAppDispatch();
    const { categories, actualCategory } = useAppSelector(categorySelector);

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        nextView: number
    ) => {
        dispatch(categorySlice.actions.changeActualCategory(nextView));
    };

    const deleteCategory = (idCategory: number) => {
        console.log('delete');
    };

    return (
        <div>
            {categories.length > 0 && (
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
                                onClick={() => deleteCategory(category.id)}
                            />
                        </ToggleButton>
                    ))}
                    <ToggleButton value={0}>інше</ToggleButton>
                </ToggleButtonGroup>
            )}
        </div>
    );
};

export default ListCategories;