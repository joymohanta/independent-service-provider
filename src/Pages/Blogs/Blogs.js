import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <h2 className="text-center mt-5">Blogs page</h2>
      <p className="text-center">
        Frequently ask questions answer are given below
      </p>
      <div className="blog-container">
        <div>
          <h5>Differences between authorization and authentication.</h5>
          <p>
            Authorization means the fact of being authorized or give power to
            someone or something. And Authentication means the process of
            someone/something checking weather he/it is valid/genuine or not. If
            any user want to access any management process, authentication is
            first to be identified as a valid user but authorization is next
            after authenticated. Sometimes it takes information from the user
            like email, password etc to be identified but authorization
            generally implemented and conducted by a certain organization. After
            get identified a user can access some information as their level and
            after authorized an employee can access various kinds of data
            according their permissions which is set by an organization.
          </p>
        </div>
        <div>
          <h5>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h5>
          <p>
            Well, I am using firebase to authenticate my website's signIn or
            signUp form and it also help me to hosting. It is kind of simple to
            me than any other else. But this is not the only website to complete
            this process, there are others too such as Oauth, parse, Back4App,
            AWS Amplify, Kuzzle etc. Besides, github-firebase-hooks is also a
            good website to implement authenticaion. But I think gathering many
            knowledge is much better than catching one. As a begginer I think
            any one of them should learn as good as possible to make the
            basement better.
          </p>
        </div>
        <div>
          <h5>
            What other services do firebase provide other than authentication?
          </h5>
          <p>
            Firebase provides something more than authentication. It provides
            firebase database, realtime database, storage, hosting, machine
            learning etc for Android, iOS+, game and web development. To store
            data in database it helps the user managable. Cloud Firestore is
            another provider that provides user's data synchronously and sync it
            clients app in offline support. Firebase also provides Security
            Rules which helps user to set simple or complex rules that protect
            app's data. So, basically we can say Firebase provides so many
            things other than authentication.
          </p>
        </div>
      </div>
      <p className="text-center mt-5 mb-3">
        Blogs content collections are processing...
      </p>
    </div>
  );
};

export default Blogs;
