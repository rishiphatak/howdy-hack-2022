/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function MainPageComponent(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="31px"
      direction="column"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="109px 235px 198px 228px"
      {...rest}
      {...getOverrideProps(overrides, "MainPageComponent")}
    >
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="900"
        color="rgba(0,0,0,1)"
        lineHeight="72px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="732px"
        height="171px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Rate My Professor: Texas A&M"
        {...getOverrideProps(overrides, "Rate My Professor: Texas A&M")}
      ></Text>
      <Button
        display="flex"
        gap="0"
        width="226px"
        height="74px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(102,0,0,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        backgroundColor="rgba(102,0,0,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Professors"
        {...getOverrideProps(overrides, "Professors Button")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        width="226px"
        height="74px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(102,0,0,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        backgroundColor="rgba(102,0,0,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Classes"
        {...getOverrideProps(overrides, "Classes Button")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        width="226px"
        height="74px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(102,0,0,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        backgroundColor="rgba(102,0,0,1)"
        size="default"
        isDisabled={false}
        variation="default"
        {...getOverrideProps(overrides, "Orgs Button")}
      ></Button>
    </Flex>
  );
}
