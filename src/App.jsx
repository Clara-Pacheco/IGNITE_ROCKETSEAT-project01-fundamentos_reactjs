import { Post } from './Post'
import { Header } from './components/Header'

import './styles.css'

function App() {


  return (
    <div>
      <Header />
      <h1>Hello World</h1>
      <Post 
        author='Clara Pacheco' 
        content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, nam sit. Blanditiis neque nesciunt enim, quod at praesentium. Cupiditate, laudantium facilis voluptatem porro beatae iure. Nisi repudiandae provident quidem debitis?'
      />

      <Post
        author='Emma' 
        content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, nam sit. Blanditiis neque nesciunt enim, quod at praesentium. Cupiditate, laudantium facilis voluptatem porro beatae iure. Nisi repudiandae provident quidem debitis?'
      />

      <Post
        author='Paulo' 
        content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, nam sit. Blanditiis neque nesciunt enim, quod at praesentium. Cupiditate, laudantium facilis voluptatem porro beatae iure. Nisi repudiandae provident quidem debitis?'
      />
    </div>
  )
}

export default App

