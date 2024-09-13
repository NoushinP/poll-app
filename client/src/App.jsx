import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Welcome from './components/welcome';
//import poll from './components/poll.jsx'
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Welcome />
      </div>
    </ApolloProvider>
  )
}
export default App