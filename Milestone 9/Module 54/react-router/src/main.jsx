import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Friends from './Components/Friends/Friends';
import FriendDetail from './Components/FrieendDetail/FriendDetail';
import Posts from './Components/Posts/Posts';
import PostDetail from './Components/PostDetail/PostDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "friends",
        element: <Friends></Friends>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: "friend/:friendId",
        element: <FriendDetail></FriendDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: "posts",
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: "post/:postId",
        element: <PostDetail></PostDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: "*",
        element: <div>Sorry!! The page that you are searching for has gone for a walk.</div>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
