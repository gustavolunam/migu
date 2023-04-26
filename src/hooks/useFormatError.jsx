const useFormatError = () => {
    function FormatError(errorResponse) {
        switch (errorResponse) {
            case 'auth/invalid-email':
                return 'El correo electrónico es inválido.';
            case 'auth/wrong-password':
                return 'La contraseña es incorrecta.';
            case 'auth/missing-password':
                return 'El campo de contraseña es requerido.';
            case 'auth/user-not-found':
                return 'No existe una cuenta asociada con el correo electrónico.';
            case 'auth/email-already-in-use':
                return 'El correo electrónica ya se encuentra en uso.';
            case 'auth/weak-password':
                return 'La contraseña debe de tener una longitud mínima de 6 caracteres.'
            case 'auth/too-many-requests':
                return 'Superó el número máximo de intentos. Intente más tarde.';
            default:
                return '';
        }
    }
    return FormatError;
}

export default useFormatError
