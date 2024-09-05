import UserModel from './../model/user_model';
import handleSignIn from './handleSingIn_service';

const getUserData = async (username, password) => { // Agrega username y password como parámetros
    try {
        const signInResult = await handleSignIn(username, password);

        if (signInResult.success) {
            const userId = signInResult.data.userId;
            const url = `http://127.0.0.1:8000/users/staff/?staff=${userId}`;
            const response = await fetch(url);
            const userData = await response.json();
            return new UserModel(userData.username, userData.names, userData.lastnames);
        } else {
            // Manejar el caso de autenticación fallida si es necesario
            console.error('Error al iniciar sesión:', signInResult.message);
            return null;
        }
    } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        return null;
    }
};

export default getUserData;