import * as React from "react"
import {
  ChakraProvider, 
  theme,
  Box, 
  Grid,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../components/ColorModeSwitcher"

export const App = () => (
  <ChakraProvider theme={theme}>    
<Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />        
      </Grid>
      </Box>
  </ChakraProvider>
)