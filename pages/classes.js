import React from "react";
import {SelectField, Text, View, withAuthenticator} from "@aws-amplify/ui-react";
import {SocialPostCollection} from "../src/ui-components";
import NavBar2 from "../src/ui-components/NavBar2";
export default function Classes({ signOut }) {
    return (
        <View
            width="1440px"
            height="1500px"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
        >
            <NavBar2
                width="291px"
                height="858px"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
            ></NavBar2>
            <View
                width="649px"
                height="103px"
                position="absolute"
                top="35px"
                left="318px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(217,217,217,1)"
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
                placeholder="Show all"
                size="large"
                isDisabled={false}
                labelHidden={false}
                variation="default"
            >
                <option>CSCE121</option>
                <option>CSCE312</option>
                <option>CSCE313</option>
            </SelectField>
            <View
                display="flex"
                position="relative"
                top="300px"
                left="318px"
                direction="column"
                width="100%"
                overflow="auto"
                justifyContent="center"
                padding="10px 10px 10px 10px"
                placeholder="Placeholder"
                size="large"
                isDisabled={false}
                labelHidden={false}
                variation="default"
            >
                <SocialPostCollection />
            </View>
        </View>
    );
}
