import React from "react"
import { Router, Link } from "@reach/router"
import netlifyIdentity from 'netlify-identity-widget'
import {  Flex , NavLink } from 'theme-ui';

let Dash = () => {
    const user = netlifyIdentity.currentUser();
    return(
      <Flex as='nav'>
      <NavLink as={Link} to="/"  p={2}>
          Home
      </NavLink>
      { user && (
      <NavLink p={2}>
          {user.user_metadata.full_name}
      </NavLink>
      )}
     </Flex>
    );
}

export default props =>{
    return(
        <Router>
          <Dash path="/app" />
        </Router>
      );
}