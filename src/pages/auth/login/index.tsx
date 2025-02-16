import formStyles from '@/styles/forms.module.css';
import s from './css/elements.module.css';
import { FormData } from '@/interfaces';
import { DASHBOARD, EMPLYEE_ROL, SALES, errorMessages } from '@/utils/const';
import Head from 'next/head';
import { validateUserData } from '@/utils/helpers';
import { loginUser } from '@/services';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context';
import { useForm } from '@/hooks';
import { Button } from '@/commons/button';
import { Text } from '@/commons/text';
import { Input } from '@/commons/input';

const INITIAL_STATE: FormData = {
  email: '',
  password: '',
};

const Login = () => {
  const { push } = useRouter();

  const { user } = useUser();

  const { onSubmit, onValueChange, watch, error, setError, loading, toggleLoader, reset } =
    useForm<FormData>(INITIAL_STATE);
  const { email, password } = watch();

  const handleSubmit = async (data: FormData) => {
    const infoValidated = validateUserData(data);

    if (infoValidated) return setError(infoValidated);

    toggleLoader();
    setError('');

    try {
      await loginUser(data);
    } catch (error) {
      setError(errorMessages.invalidCredentials);
    } finally {
      reset();
      push(DASHBOARD);
    }
  };

  if (user) {
    const route = user.role === EMPLYEE_ROL ? SALES : DASHBOARD;
    push(route);
    return null;
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <main className={s.main}>
        <header className={s.header}>
          <Text as='h1' fontSize={32}>
            Bienvenido
          </Text>

          <Text>Ingresa con tu usuario y contraseña</Text>
        </header>

        <form className={formStyles.form} onSubmit={onSubmit(handleSubmit)}>
          <Input label='Correo electrónico' name='email' value={email} onChange={onValueChange} />

          <Input
            label='Contraseña'
            name='password'
            value={password}
            onChange={onValueChange}
            type='password'
          />

          <Button type='submit'>{loading ? 'Ingresando...' : 'Ingresar'}</Button>

          <Text error textAlign='center'>
            {error}
          </Text>
        </form>
      </main>
    </>
  );
};

export default Login;
