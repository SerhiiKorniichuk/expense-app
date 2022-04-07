import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface InterfaceLogIn {
    username: string;
    password: string;
}

const validationSchema = yup.object({
    username: yup.string().required("Введіть ім'я користувача"),
    password: yup.string().min(4).max(16).required('Введіть пароль'),
});

const FormLogIn: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm<InterfaceLogIn>({
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
    });

    const submitForm = (data: InterfaceLogIn) => {
        console.log(data);
    };

    return (
        <form className="login_form">
            <div className="login_form_input">
                <TextField
                    label="Ім'я користувача"
                    variant="filled"
                    {...register('username')}
                    error={errors?.username ? true : false}
                    helperText={
                        errors?.username
                            ? errors.username.message || 'Error!!!'
                            : ''
                    }
                />
            </div>
            <div className="login_form_input">
                <TextField
                    label="Пароль"
                    type="password"
                    variant="filled"
                    {...register('password')}
                    error={errors?.password ? true : false}
                    helperText={
                        errors?.password
                            ? errors.password.message || 'Error!!!'
                            : ''
                    }
                />
            </div>
            <div className="login_form_input">
                <Button variant="text" onClick={handleSubmit(submitForm)}>
                    Ввійти
                </Button>
            </div>
        </form>
    );
};

export default FormLogIn;
