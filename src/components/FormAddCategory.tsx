import { yupResolver } from '@hookform/resolvers/yup';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface InterfaceAddCategory {
    label: string;
}

const validationSchema = yup.object({
    label: yup.string().required('Введіть назву категорії'),
});

const FormAddCategory: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<InterfaceAddCategory>({
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const clickAddCategory = (data: InterfaceAddCategory) => {
        reset();
        console.log('add category');
        setOpen(false);
    };

    return (
        <div>
            <Button variant="text" onClick={handleClickOpen}>
                <AddCircleOutlineIcon />
                Додати категорію
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <form>
                    <DialogTitle>Нова категорія</DialogTitle>
                    <DialogContent>
                        <TextField
                            fullWidth
                            label="Назва категорії"
                            variant="standard"
                            {...register('label')}
                            error={errors?.label ? true : false}
                            helperText={
                                errors?.label
                                    ? errors.label.message || 'Error!!!'
                                    : ''
                            }
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleSubmit(clickAddCategory)}>
                            Додати
                        </Button>
                        <Button onClick={handleClose}>Відмінити</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
};

export default FormAddCategory;
