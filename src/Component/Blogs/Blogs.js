import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="pt-12">
        <h1 className="text-2xl text-center font-bold p-4">
          Difference between authorization and authentication?
        </h1>
        <p className="p-4">
          Simply put, authentication is the process of verifying who someone is,
          whereas authorization is the process of verifying what specific
          applications, files, and data a user has access to.What is difference
          between authentication and Authorization give two examples each? For
          example, the process of verifying and confirming employees ID and
          passwords in an organization is called authentication, but determining
          which employee has access to which floor is called authorization.
        </p>
      </div>
      <div>
        <h1 className="text-2xl text-center font-bold p-4">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <p className="p-4">
          The Firebase Realtime Database is the cloud-hosted NoSQL Database.
          Build serverless apps. Store and sync data between your users in
          realtime. Collaborate across devices with ease. Build Fast For Any
          Device.Usually, authentication by a server entails the use of a user
          name and password. Other ways to authenticate can be through cards,
          retina scans, voice recognition, and fingerprints.
        </p>
      </div>
      <div className="p-4">
        <h1 className="text-2xl text-center font-bold p-4">
          What other services does firebase provide other than authentication?
        </h1>
        <p className="p-4">
          Firebase is a Google-backed closed source platform with many excellent
          features that allow developers to create an MVP quickly. However,
          vendor lock-in one of its biggest concerns among developers and the
          main shortcoming of Firebase.If you are using Firebase, you should
          remember that server costs can increase significantly as your app
          begins to scale. Although Firebase offers a free plan, the free tier
          limitations make it suitable for small apps only.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
