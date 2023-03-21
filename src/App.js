import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from 'axios';
import HomePage from './Pages/HomePage';
import BlogPage from './Pages/BlogPage';
import NewBlogPage from './Pages/NewBlogPage';
import Layout from './Layouts/Layout';

const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;

function App() {

  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    axios.get(`${urlEndPoint}/all`)
    .then(function (response) {
      console.log(response);
      setBlogList(response.data.blogs);
    })
    .catch(function (error) {
      console.log(error);
    });
  },[])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage 
            blogList={blogList} 
            urlEndPoint={urlEndPoint} 

          />

        },
        { 
          path: "blog/:id",
          element: <BlogPage 
              urlEndPoint={urlEndPoint} 
              />
        },
        { 
          path: "new-blog",
          element: <NewBlogPage 
              urlEndPoint={urlEndPoint} 
              />
        }
      ]

    }
  ])


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
