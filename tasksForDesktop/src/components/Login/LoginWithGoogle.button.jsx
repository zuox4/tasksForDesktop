export const LoginWithGoogle = ({handleLogin}) =>{
    return(
        <button
        style={{ width: '180px', backgroundColor: '#670000', color: 'white' }}
        onClick={handleLogin}
    >
        Login with Google
    </button>
    )
}