"use client";

import {Box, FormControl, Button} from '@primer/react'
import {Flash} from '@primer/react'
import {TabNav} from '@primer/react/deprecated'
import {Textarea} from '@primer/react'


import {ThemeProvider, BaseStyles} from '@primer/react'

function Fuck() {
  return (
    <TabNav aria-label="Main">
    <TabNav.Link href="#" selected>
      Home
    </TabNav.Link>
    <TabNav.Link href="#">Documentation</TabNav.Link>
    <TabNav.Link href="#">Support</TabNav.Link>
  </TabNav>
  );
};

export default function IndexPage() {
  return (
    <ThemeProvider>
    <BaseStyles>
    <div>
    <Fuck/>
    <Button>Hello world</Button>
    <Flash>I hate JavaScript</Flash>
    <Box as="form">
    <FormControl>
      <FormControl.Label>Default label</FormControl.Label>
      <Textarea />
    </FormControl>
  </Box>
    </div>
    </BaseStyles>
  </ThemeProvider>
  );
}