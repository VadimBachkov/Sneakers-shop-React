import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Box, Button } from '@mui/material'
import * as Yup from 'yup'

import { FormInput } from 'shared/ui'
import { UserModel } from 'models'
import { ROUTES } from 'shared/consts'
import { emailValidation, passwordValidation } from 'shared/helpers'

import style from './style.module.css'


const SignInSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    email: emailValidation(),
    password: passwordValidation(),
})

function Profile() {
    const navigate = useNavigate()

    return (
        <div className={style.wrapper}>
            <Box
            sx={{
                textAlign: 'center',
                maxWidth: 500,
                borderRadius: 8,
                p: 5,
            }}
        >
            <Formik
                initialValues={{
                    name: UserModel.name,
                    email: UserModel.email,
                    password: UserModel.password,
                }}
                validationSchema={SignInSchema}
                onSubmit={(values) => {
                    UserModel.changeInfo(values)
                }}
            >
                {({ handleSubmit }) => (
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                        }}
                    >
                        <FormInput name="name" />
                        <FormInput name="email" />
                        <FormInput name="password" />
                        <Button type="submit" variant="contained" sx={{marginBottom:3}}>
                            Submit
                        </Button>
                    </form>
                )}
            </Formik>
            <Button
                variant="outlined"
                color="error"
                onClick={() => {
                    UserModel.logOut()
                    navigate(ROUTES.HOME)
                }}
            >
                Log out
            </Button>
        </Box>
        </div>
    )
}

export default observer(Profile)