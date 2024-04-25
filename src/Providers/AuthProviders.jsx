import PropTypes from 'prop-types';
import { createContext } from 'react';


export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {

    const authInfo = {};
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProviders.propTypes = {
    children: PropTypes.node
}

export default AuthProviders;