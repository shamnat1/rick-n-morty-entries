import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation'
import {
    ApolloProvider,
    ApolloClient,
    createHttpLink,
    InMemoryCache
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://rickandmortyapi.com/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});


function App() {


  return (
      <ApolloProvider client={client}>
        <Navigation/>
      </ApolloProvider>
  );
}

export default App;
