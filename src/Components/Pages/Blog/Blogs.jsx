const Blogs = () => {
  return (
    <div className="bg-slate-100">
      <h2 className="text-3xl font-bold text-center p-3"> Blogs </h2>
      <article className="p-3 mt-2">
        <p className=" font-bold text-xl p-2">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </p>
        <p className=" p-2 space-y-2">
          <p>
            {" "}
            An access token and a refresh token are commonly used in
            authentication and authorization systems to manage user sessions and
            ensure secure access to resources.<br></br>
          </p>

          <p>
            <span className="font-bold">Access Token: </span> An access token is
            a credential that represents the authorization granted to a user. It
            is usually issued by an authentication server or an identity
            provider after the user successfully authenticates. The access token
            is typically short-lived and contains information such as the user`s
            identity and the permissions they have.<br></br>
          </p>

          <p>
            <span className="font-bold">Refresh Token: </span>A refresh token is
            a long-lived credential that is also issued during the
            authentication process. Its purpose is to obtain a new access token
            once the current one expires. Refresh tokens are securely stored on
            the client-side and are not meant to be exposed to the server or
            included in API requests. When the access token expires, the client
            can use the refresh token to request a new access token from the
            authentication server.
          </p>

          <p>
            {" "}
            Access tokens should be stored securely on the client-side to
            prevent unauthorized access.<br></br>
            1. Web Applications: Access tokens are often stored in browser
            cookies with the httpOnly flag set. <br></br>
            2. Single-Page Applications (SPAs): Access tokens are commonly
            stored in browser memory (JavaScript variables) or in a specialized
            storage mechanism like the browser`s Web Storage API (localStorage
            or sessionStorage).
          </p>
        </p>
      </article>
      <article className="p-3 mt-2">
        <p className=" font-bold text-xl p-2">
          2. What is the Comparison between SQL and NoSQL databases?
        </p>
        <p className=" p-2 space-y-2">
          <p>
            {" "}
            SQL and NoSQL are two different types of databases that serve
            different purposes and have distinct characteristics.<br></br>
          </p>

          <p>
            <span className="font-bold">1.Model: </span> SQL databases follow a
            relational data model, organizing data into tables with predefined
            schemas. They use structured query language (SQL) for defining and
            manipulating the data.<br></br>
            NoSQL databases utilize various data models such as key-value pairs,
            documents, columnar, or graph structures. They provide flexible
            schemas and do not enforce rigid relationships between entities.
          </p>

          <p>
            <span className="font-bold">2. Scalability: </span>SQL databases
            typically scale vertically, meaning they handle increased workload
            by upgrading hardware resources.<br></br>
            NoSQL databases are designed to scale horizontally by distributing
            data across multiple servers.{" "}
          </p>
          <p>
            <span className="font-bold">3. ACID properties: </span>SQL databases
            are designed to provide ACID (Atomicity, Consistency, Isolation,
            Durability) transactions. ACID transactions ensure data integrity
            and guarantee that multiple database operations are either all
            executed or none of them are.<br></br>
            NoSQL databases often sacrifice strict ACID guarantees in favor of
            higher scalability and performance.{" "}
          </p>
        </p>
      </article>
      <article className="p-3 mt-2">
        <p className=" font-bold text-xl p-2">
          3. What is express js and What is Nest JS ?
        </p>
        <p className=" p-2 space-y-2">
          <p>
            Express.js and Nest.js are both web application frameworks for
            Node.js, but they differ in terms of design philosophy and features.
            <br></br>
          </p>

          <p>
            <span className="font-bold"> Express Js: </span> Express.js is a
            minimalist web framework for Node.js. It provides a simple and
            flexible approach to building web applications and APIs. Express.js
            focuses on providing core web server functionality and leaves much
            of the application structure and additional features to the
            developer or third-party middleware.<br></br>
          </p>

          <p>
            <span className="font-bold">Nest.js: </span>Nest.js is a
            full-featured, scalable, and opinionated web application framework
            for Node.js. It is built with a focus on developer productivity,
            maintainability, and the use of modern JavaScript/TypeScript
            features.
          </p>
        </p>
      </article>
      <article className="p-3 mt-2">
        <p className=" font-bold text-xl p-2">
          4. What is MongoDB aggregate and how does it work?
        </p>
        <p className=" p-2 space-y-2">
          <p>
            MongoDB`s aggregate function is a powerful tool for performing
            advanced data analysis and manipulation operations on data stored in
            a MongoDB database. It allows us to process data from multiple
            documents in a collection and apply various operations to transform
            and aggregate the results<br></br>
          </p>

          <p>
            The aggregate function takes an array of stages as its argument,
            where each stage represents a specific operation to be performed on
            the data. These stages are processed sequentially, with the output
            of each stage becoming the input for the next stage.The stages make
            up what is known as a pipeline. The stages in a pipeline can filter,
            sort, group, reshape and modify documents that pass through the
            pipeline<br></br>
          </p>
        </p>
      </article>
    </div>
  );
};

export default Blogs;
