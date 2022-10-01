/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, SearchField } from "@aws-amplify/ui-react";
export default function Frame321(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="32px"
      width="633.5px"
      justifyContent="flex-end"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Frame321")}
    >
      <SearchField
        display="flex"
        gap="8px"
        direction="column"
        shrink="0"
        height="40px"
        position="relative"
        padding="0px 0px 0px 0px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "SearchField")}
      ></SearchField>
    </Flex>
  );
}
