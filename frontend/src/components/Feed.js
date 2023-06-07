import React, { useEffect, useState } from "react";
import QuoraBox from "./QuoraBox";
import Post from "./Post";
import "./css/Feed.css";
import Widget from "./Widget";

function Feed() {
    return (
        <div className="feed">
          <QuoraBox />
          <Post />
          <Post />
        </div>
      );
}

export default Feed