import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Reviews from "./Reviews"
import { QueryClient, QueryClientProvider } from "react-query"
import Navigation from "../components/Navigation"
import Home from "./Home"
import Plays from "./Plays"

const queryClient = new QueryClient()

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route path='/home' component={Home} />
          <Route path='/plays' component={Plays} />
          <Route path='/reviews' component={Reviews} />
        </Switch>
      </Router>
    </QueryClientProvider>
  </ChakraProvider>
)
