/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import SocialPost from "./SocialPost";
import MyIcon from "./MyIcon";
import { Flex, View } from "@aws-amplify/ui-react";
export default function SocialPostTemplate(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SocialPostTemplate")}
    >
      <SocialPost
        display="flex"
        gap="16px"
        direction="column"
        width="960px"
        shrink="0"
        position="relative"
        padding="24px 24px 24px 24px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "SocialPostTemplate34573957")}
      ></SocialPost>
      <MyIcon
        width="24px"
        height="24px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        type="bookmark_border"
        {...getOverrideProps(overrides, "MyIcon34574122")}
      ></MyIcon>
      <View
        width="24px"
        height="24px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "outline / heart")}
      ></View>
      <MyIcon
        width="24px"
        height="24px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        type="more_vert"
        {...getOverrideProps(overrides, "MyIcon34574120")}
      ></MyIcon>
    </Flex>
  );
}
