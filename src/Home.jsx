import React, {useState, useEffect} from 'react';
import BlogList from './BlogLists';
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:'New Website', body:'Lolem ipsum ...sjs', author: 'Thierry', id: 1},
        {title:'Cooking', body:'Lolem ipsum ...sjs', author: 'Divin', id: 2},
        {title:'Take Divine to school', body:'Lolem ipsum ...sjs', author: 'Sonia', id: 3},
        {title:'Pay bils', body:'Lolem ipsum ...sjs', author: 'Mama', id: 4}
    ])

    const handleDelete = (id) => {
      const newBlogs = blogs.filter((blog) => blog.id !== id);
      setBlogs(newBlogs);
    }

    useEffect(() => {
      
    })

  return (
    <div className="home">
      <BlogList blogs={blogs} title='All dojomate' handleDelete={handleDelete}/>
    </div>
  );
};

export default Home;
