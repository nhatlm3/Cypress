import styles from './login.module.scss';
import userService from '../../service/login.service';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { alertService } from '../../service/alert.service';
import { Alert } from '../../components/Alert';

import { useRouter } from 'next/router';
function login() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  })
  const formOptions = { resolver: yupResolver(validationSchema) };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;
  const onSubmitForm = (data: any) => {
    return userService.login(data.username, data.password).then(() => {
      router.push('/');
    }).catch(alertService.error);
  }
  return (
    <>
      {/* <Layout> */}
      <div className={styles.fullPageLogin}>
        <div className={styles.container}>
          <div className={styles.child}>
            {/* <Button auto color="warning" shadow onClick={handler}>
              Open Login Modal
            </Button> */}
            <Alert />
            <div className='card mt-5'>
              <h4 className="card-header">Login</h4>
              <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmitForm)}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                              color="primary"
                              id="username"
                              placeholder="Username"
                              required type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                              id="password"
                              color="primary"
                              pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                              title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
                              type="password"
                              placeholder="Password"
                              required {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                              <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <button type='submit' className="btn btn-primary mt-3">
                            Login
                        </button>
                    </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default login;