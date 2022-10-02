/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import ContactUs from "./ContactUs";
import { Flex } from "@aws-amplify/ui-react";
export default function PostSubmissionForm(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "PostSubmissionForm")}
    >
      <ContactUs
        display="flex"
        gap="24px"
        direction="column"
        width="898px"
        height="579px"
        shrink="0"
        position="relative"
        padding="40px 24px 40px 24px"
        {...getOverrideProps(overrides, "Post Submission Form")}
      ></ContactUs>
    </Flex>
  );
}
