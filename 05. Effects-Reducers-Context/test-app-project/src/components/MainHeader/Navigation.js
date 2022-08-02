import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';

import classes from './Navigation.module.css';

const Navigation = (props) => {

  // OPTION 2 - Context API - useContext:
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );



  // OPTION 1 - Context API - "Provider" => "Consumer" components:
  // Example for Context API - consumer component
  // return (   
  //   <AuthContext.Consumer>
  //     {(ctx) => { /*ctx => Context API*/
  //       return (
  //         <nav className={classes.nav}>
  //           <ul>
  //             {ctx.isLoggedIn && (
  //               <li>
  //                 <a href="/">Users</a>
  //               </li>
  //             )}
  //             {ctx.isLoggedIn && (
  //               <li>
  //                 <a href="/">Admin</a>
  //               </li>
  //             )}
  //             {ctx.isLoggedIn && (
  //               <li>
  //                 <button onClick={props.onLogout}>Logout</button>
  //               </li>
  //             )}
  //           </ul>
  //         </nav>
  //       );
  //     }
  //     }
  //   </AuthContext.Consumer>)

};

export default Navigation;
