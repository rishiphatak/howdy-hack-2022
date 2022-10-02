/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, SelectField, Text, View } from "@aws-amplify/ui-react";
// import SearchBar from "./SearchBar";
export default function ClassesPage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="858px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ClassesPage")}
    >
      <View
        width="291px"
        height="858px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "My Nav Bar")}
      ></View>
      <View
        width="649px"
        height="103px"
        position="absolute"
        top="35px"
        left="318px"
        border="3px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 1164")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="0px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="382px"
        height="66px"
        position="absolute"
        top="52px"
        left="376px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Classes"
        {...getOverrideProps(overrides, "Classes")}
      ></Text>
      <SelectField
        display="flex"
        position="absolute"
        top="212px"
        left="318px"
        direction="column"
        width="333px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="Select your class."
        placeholder="Placeholder"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField")}
      ></SelectField>
      {/*<SearchBar*/}
      {/*  display="flex"*/}
      {/*  gap="23.922330856323242px"*/}
      {/*  position="absolute"*/}
      {/*  top="40px"*/}
      {/*  left="1017px"*/}
      {/*  justifyContent="flex-end"*/}
      {/*  alignItems="center"*/}
      {/*  borderRadius="226.5145721435547px"*/}
      {/*  padding="0px 0px 0px 0px"*/}
      {/*  backgroundColor="rgba(218,218,218,1)"*/}
      {/*  {...getOverrideProps(overrides, "Search Bar")}*/}
      {/*></SearchBar>*/}
      <Icon
        width="656.01px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1, height: 656.0068359375 }}
        paths={[
          {
            d: "M0 0L656.007 0L656.007 -1L0 -1L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="72px"
        left="289.5px"
        transformOrigin="top left"
        transform="rotate(90deg)"
        {...getOverrideProps(overrides, "Line 3")}
      ></Icon>
    </View>
  );
}
