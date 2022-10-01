/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import HeroLayout2 from "./HeroLayout2";
import { Button, Flex, View } from "@aws-amplify/ui-react";
export default function Homepage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1454px"
      height="858px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Homepage")}
    >
      <HeroLayout2
        display="flex"
        gap="-1081px"
        position="absolute"
        top="0px"
        left="7px"
        direction="column"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Custom component")}
      ></HeroLayout2>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="564px"
        left="665px"
        justifyContent="center"
        alignItems="center"
        border="1px SOLID rgba(102,0,0,1)"
        backgroundColor="rgba(102,0,0,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Professors"
        {...getOverrideProps(overrides, "Professors")}
      ></Button>
      <Flex
        gap="0"
        position="absolute"
        top="90.76%"
        bottom="4.62%"
        left="45.17%"
        right="45.17%"
        alignItems="flex-start"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Classes")}
      ></Flex>
      <Flex
        gap="0"
        position="absolute"
        top="556px"
        left="910px"
        alignItems="flex-start"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Orgs")}
      ></Flex>
    </View>
  );
}
