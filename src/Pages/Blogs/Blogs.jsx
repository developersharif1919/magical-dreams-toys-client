import { useEffect } from "react";
import { motion } from 'framer-motion';

const Blogs = () => {
    const posts = [
        {
            id: 1,
            title: 'What is an access token and refresh token? How do they work and where should we store them on the client-side?',
            author: ' Refresh tokens allow you to balance your users access needs with your organization s security practices Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them  Access tokens are used in token based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API Store it in local browser storage. Store it in a cookie in client side it can be safer than local browser storage. Do not store the token but store username and password in the browser or client-side cookie and then retrieve a new token by sending credentials silently.'

        },
        {
            id: 2,
            title: 'Compare SQL and NoSQL databases?',
            author: 'SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.'
        },
        {
            id: 3,
            title: 'What is express js? What is Nest JS ?',
            author: 'Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.'
        },
        {
            id: 4,
            title: 'What is MongoDB aggregate and how does it work ',
            author: 'Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline. Mongoose s aggregate function returns an instance of Mongoose s Aggregate class. Aggregate instances are thenable, so you can use them with await and promise chaining. The Aggregate class also supports a chaining interface for building aggregation pipelines.'
        },
    ];

    useEffect(() => {
        document.title = "MDT | Blogs";
    }, []);
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <header className="text-3xl font-bold mb-8">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 1, repeat: Infinity, repeatType: 'reverse' },
                    }}
                >
                    Some Question With Answer
                </motion.div>
            </header>

            <main className="p-5">
                <ul>
                    {posts.map((post) => (
                        <motion.li
                            key={post.id}
                            className="bg-white p-4 mb-4 shadow rounded"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                            <p>
                                {post.author}
                            </p>
                        </motion.li>
                    ))}
                </ul>
            </main>

            <footer className="text-center mt-8">
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    &copy; {new Date().getFullYear()}  All rights reserved.
                </motion.p>
            </footer>
        </div>
    );
};

export default Blogs;
