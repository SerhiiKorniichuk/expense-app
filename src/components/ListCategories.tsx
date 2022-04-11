import DeleteIcon from '@mui/icons-material/Delete';
import {
    Box,
    Button,
    Container,
    Menu,
    ToggleButton,
    ToggleButtonGroup,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { CategoryAnother, ICategory } from 'models/ICategory';
import React, { useEffect, useState } from 'react';
import {
    changeActualCategory,
    changeCategoryForTransactions,
    deleteCategory,
} from 'store/reducers/ActionCreators';
import { authSelector } from 'store/reducers/AuthSlice';
import { categorySelector } from 'store/reducers/CategorySlice';

interface ListCategoriesProps {
    isDeleteCategory: boolean;
}

const ListCategories: React.FC<ListCategoriesProps> = ({
    isDeleteCategory,
}) => {
    const dispatch = useAppDispatch();
    const { idUser } = useAppSelector(authSelector);
    const { categories, actualCategory } = useAppSelector(categorySelector);
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        nextView: number
    ) => {
        let idActualCategory = nextView;
        if (!idActualCategory) idActualCategory = CategoryAnother.id;
        dispatch(changeActualCategory(idActualCategory));
        handleCloseNavMenu();
    };

    const clickDeleteCategory = (idCategory: number, idUser: number | null) => {
        if (idUser) {
            dispatch(deleteCategory({ idUser, idCategory }));
            dispatch(changeCategoryForTransactions({ idUser, idCategory }));
        }
    };

    useEffect(() => {
        if (
            categories.findIndex(
                (category: ICategory) => category.id == actualCategory
            ) == -1
        )
            dispatch(changeActualCategory(CategoryAnother.id));
    }, [actualCategory, categories, dispatch]);

    return (
        <Container sx={{ padding: { xs: '0 5px' } }}>
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: 'flex', md: 'none' },
                    padding: { xs: '0' },
                }}
            >
                <Button variant="outlined" onClick={handleOpenNavMenu}>
                    Категорії
                </Button>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    <ToggleButtonGroup
                        orientation="vertical"
                        value={actualCategory}
                        exclusive
                        onChange={handleChange}
                    >
                        {categories.map((category: ICategory) => (
                            <ToggleButton key={category.id} value={category.id}>
                                {category.label}
                                {isDeleteCategory && (
                                    <DeleteIcon
                                        onClick={() =>
                                            clickDeleteCategory(
                                                category.id,
                                                idUser
                                            )
                                        }
                                    />
                                )}
                            </ToggleButton>
                        ))}
                        <ToggleButton value={CategoryAnother.id}>
                            {CategoryAnother.label}
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Menu>
            </Box>
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: 'none', md: 'flex' },
                }}
            >
                <ToggleButtonGroup
                    orientation="vertical"
                    value={actualCategory}
                    exclusive
                    onChange={handleChange}
                >
                    {categories.map((category: ICategory) => (
                        <ToggleButton key={category.id} value={category.id}>
                            {category.label}
                            {isDeleteCategory && (
                                <DeleteIcon
                                    onClick={() =>
                                        clickDeleteCategory(category.id, idUser)
                                    }
                                />
                            )}
                        </ToggleButton>
                    ))}
                    <ToggleButton value={CategoryAnother.id}>
                        {CategoryAnother.label}
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>
        </Container>
    );
};

export default ListCategories;
