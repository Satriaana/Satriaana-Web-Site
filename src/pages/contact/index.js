import React from "react";

import { DefaultLayout } from "../../layouts/DefaultLayout";
import GetInTouch from "../../components/contact/getInTouch";
import ContactCover from "../../components/contact/contactcover";
import Form from "../../components/contact/form";
import Questions from "../../components/contact/questions";

export const Contact = () => {
  return (
    <DefaultLayout>
      <ContactCover />
      <GetInTouch />
      <Form />
      <Questions />
    </DefaultLayout>
  );
};
