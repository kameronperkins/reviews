import * as React from "react"
import {
  ChakraProvider,
  theme,
  Box,
  Grid,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../components/ColorModeSwitcher"
import Reviews from "../components/Reviews"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Reviews />
        </Grid>
      </Box>
    </QueryClientProvider>
  </ChakraProvider>
)
