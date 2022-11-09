import React from 'react';

const Blog = () => {
    return (
        <div className='w-full md:w-3/6 mx-auto my-5'>
            <h2 className="text-3xl font-semibold text-center my-3">My Blog</h2>

            <div>
                <div className='border p-3'>
                    <h3 className='font-semibold mb-3'>Differnce between SQL and NoSQL?</h3>
                    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p> <br />
                    <p>There are five practical differences between SQL and NoSQL:</p>
                    <ol className="list-decimal p-5">
                        <li>Language</li>
                        <li>Scalability</li>
                        <li>Structure</li>
                        <li>Properties</li>
                        <li>Support and communities</li>
                    </ol>


                </div>

                <div className='border p-3'>
                    <h3 className='font-semibold mb-3'>What is JWT, and how does it work?</h3>
                    <p>
                        JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. <br /> <br />

                        It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved. <br />

                        The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. <br /> <br />

                        JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information
                    </p>
                </div>

                <div className='border p-3'>
                    <h3 className='font-semibold mb-3'>What is the difference between javascript and NodeJS?</h3>
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                </div>

                <div className='border p-3'>
                    <h3 className='font-semibold mb-3'>How does NodeJS handle multiple requests at the same time?</h3>
                    <p> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>


        </div>
    );
};

export default Blog;