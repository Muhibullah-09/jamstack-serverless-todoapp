import React from 'react';
import { Container, Heading, Button, Flex } from 'theme-ui';

export default props => (
    <Container>
        <Flex sx={{ flexDirection: "column", padding: 3, textAlign: "center" }}>
            <Heading as="h1">Todo List</Heading>
            <Button sx={{ marginTop: 2, color: 'black' ,fontFamily:'monospace' ,cursor: 'pointer' }} onClick={() => { alert("Login Successfully!") }}>
                LOGIN
            </Button>
        </Flex>
    </Container>
);