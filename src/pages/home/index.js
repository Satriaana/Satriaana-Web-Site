import React from "react";

import { DefaultLayout } from "../../layouts/DefaultLayout";
import Cover from "../../components/cover/cover";
import { Carousel } from "../../components/Carousel";
import Titleintroduction from "../../components/titleintroduction/titleintroduction";
import Blog from "../../components/BlogCard/blog";
// import Forum from "../../components/ForumCard/forum";
import Twitter from "../../components/twitterfeed/twitter";

export const Home = () => {
  return (
    <DefaultLayout>
      <Cover />
      <Carousel />
      <Titleintroduction />
      <Blog />
      {/* <Forum /> */}
      <Twitter />
    </DefaultLayout>
  );
};
