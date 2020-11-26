import React from "react";
import auth from "./auth-service"; // Importamos funciones para llamadas axios a la API
const { Consumer, Provider } = React.createContext();

// HOC para crear Consumer
// el componente withAuth recibe un componente como argumento y nos devuelve un componente con el mismo componente dentro de un <Consumer /> con las propiedades user e isLoggedin (state), y los métodos login, signup y logout (this)
const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {/* El componente <Consumer> provee un callback que recibe el "value" con el objeto Providers */}
          {({ login, signup, user, logout, isLoggedin, newCanvas, message, }) => {
            return (
              <WrappedComponent
                login={login}
                signup={signup}
                user={user}
                logout={logout}
                isLoggedin={isLoggedin}
                newCanvas={newCanvas}
                message={message}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

// Provider
class AuthProvider extends React.Component {
  state = { isLoggedin: false, user: null, isLoading: true , message: ''};

  componentDidMount() {
    // luego de que se monte el componente, llama a auth.me() que nos devuelve el usuario y setea los valores para loguearlo
    auth
      .me()
      .then((user) =>
        this.setState({ isLoggedin: true, user: user, isLoading: false })
      )
      .catch((err) =>
        this.setState({ isLoggedin: false, user: null, isLoading: false })
      );
  }

  newCanvas = (data) => {
    const { author, name, gridSize, canvasData } = data
    console.log(data)
    auth
      .newCanvas({ author, name, gridSize, canvasData })
      .then((data) => this.setState({}))
      .catch((err) => console.log(err));
  };

  // userUpdate = (user) => {
  //   console.log("patatas"+user)
  // }



  signup = (user) => {
    const { username, password } = user;

    auth
      .signup({ username, password })
      .then((user) => this.setState({ isLoggedin: true, user }))
      .catch(({ response }) =>{
        this.setState({ message: 'hola' })

        
      })
      ;
  };

  login = (user) => {
    const { username, password } = user;

    auth
      .login({ username, password })
      .then((user) => this.setState({ isLoggedin: true, user }))
      .catch(({response}) =>{
        console.log(response.data)
        this.setState({message: response.data})})
  };

  logout = () => {
    auth
      .logout()
      .then(() => this.setState({ isLoggedin: false, user: null }))
      .catch((err) => console.log(err));
  };

 

  

  render() {
    // destructuramos isLoading, isLoggedin y user de this.state y login, logout y signup de this
    const { isLoading, isLoggedin, user, message} = this.state;
    const { login, logout, signup, newCanvas} = this;

    return isLoading ? (
      // si está loading, devuelve un <div> y sino devuelve un componente <Provider> con un objeto con los valores: { isLoggedin, user, login, logout, signup}
      // el objeto pasado en la prop value estará disponible para todos los componentes <Consumer>
      <div>Loading</div>
    ) : (
        <Provider value={{ isLoggedin, user, message, login, logout, signup, newCanvas}}>
          {this.props.children}
        </Provider>
      ); /*<Provider> "value={}" datos que estarán disponibles para todos los componentes <Consumer> */
  }
}

export { Consumer, withAuth }; //  <--	RECUERDA EXPORTAR  ! ! !

export default AuthProvider; //	<--	RECUERDA EXPORTAR  ! ! !
