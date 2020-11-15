import React from 'react';

// This is a pretend way to get my blogs from
// an API or from the file system
const getBlogs = async () => {
  return [
    {
      id: 1,
      name: 'Post 1',
    },
    {
      id: 2,
      name: 'Post 2',
    },
  ];
};

// We get blogs as a prop thanks to
// the getStaticProps call
const BlogList = ({ blogs }) => {
  return blogs.map(b => (
    <div key={b.id}>
      {`Post ${b.id}: ${b.name}`}
    </div>
  ));
};

export const getStaticProps = async () => {
  // This runs on the server side, so no problem
  // to access your database, etc.
  const blogs = await getBlogs();

  // You must return wrapped in props object
  return {
    props: {
      blogs,
    },
  };
};

export default BlogList;