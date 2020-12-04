import React from "react";

import { DefaultLayout } from "../../layouts/DefaultLayout";
import GetInTouch from "../../components/contact/getInTouch";
import Form from "../../components/contact/form";
import Questions from "../../components/contact/questions";

export const Contact = () => {
  return (
    <DefaultLayout>
      <GetInTouch />
      <Form />
      <Questions />
    </DefaultLayout>
  );
};
