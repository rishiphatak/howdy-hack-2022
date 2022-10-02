import React from "react";
import {Button, Flex, Text, withAuthenticator} from "@aws-amplify/ui-react";
import Link from "next/link";
function MainPage({ signOut }) {
    return (
        <Flex
            gap="31px"
            direction="column"
            alignItems="center"
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            padding="109px 235px 198px 228px"
            className="main-flexbox"
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
            >REViews</Text>
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
                style={{color: "white"}}
            >Professors
            </Button>
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
                style={{color: "white"}}
            ><Link href="/classes">Classes</Link>
            </Button>
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
                style={{color: "white"}}
            >Organizations
            </Button>
        </Flex>
    );
}

export default MainPage;
