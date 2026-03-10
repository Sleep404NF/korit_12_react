import {useQuery} from '@tanstack/react-query'
import './App.css'
import {fetchPosts} from './api'


function App() {

  const {isLoading, data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  });

  
  return (
    <>
      {
        isLoading ?
          '로딩중...'
          : posts.map((post, index) => <div>{`${index} : ${post.title}` }</div>)
      }
    </>
  )
}

export default App
