import React, { useEffect } from 'react';
import { Container, Heading, Button, Flex } from 'theme-ui';
import netlifyIdentity from 'netlify-identity-widget';

export default props => {
    useEffect( () =>{
        netlifyIdentity.init({});
    });
    return(
        <Container>
            <Flex sx={{ flexDirection: "column", padding: 3, textAlign: "center" }}>
                <Heading as="h1">Todo List</Heading>
                <Button sx={{ marginTop: 2, color: 'black' ,fontFamily:'monospace' ,cursor: 'pointer' }} onClick={() => { netlifyIdentity.open() }}>
                    LOGIN
                </Button>
            </Flex>
        </Container>
    )
};