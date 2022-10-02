import {Button, Flex, Icon, SelectField, Text, TextField, View} from "@aws-amplify/ui-react";
import React from "react";
import { API } from "aws-amplify";
import {createSocialPostProf} from "../src/graphql/mutations";

async function createReview(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
        author: "John Doe",
        "class": form.get("className"),
        topic: form.get("title"),
        text: form.get("reviewText"),
        createdAt: "2021-09-08Z",
        likes: 405
    };
    alert(data);
    await API.graphql({
        query: createSocialPostProf,
        variables: { input: data },
    });
    alert("done");
    event.target.reset();
}

export default function submitReview() {
    return (
        <View
            gap="0"
            width="70%"
            height="100%"
            top="50px"
            left="200px"
            direction="column"
            justifyContent="center"
            alignItems="center"
            position="relative"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            as="form"
            onSubmit={createReview}
        >
            <Flex
                gap="24px"
                direction="column"
                position="relative"
                padding="0px 0px 0px 0px"
            >
                <Flex
                    gap="8px"
                    direction="column"
                    shrink="0"
                    alignSelf="stretch"
                    objectFit="cover"
                    position="relative"
                    padding="0px 0px 0px 0px"
                >
                    <Text
                        fontFamily="Inter"
                        fontSize="20px"
                        fontWeight="700"
                        color="rgba(13,26,38,1)"
                        lineHeight="25px"
                        textAlign="left"
                        display="flex"
                        direction="column"
                        justifyContent="flex-start"
                        shrink="0"
                        alignSelf="stretch"
                        objectFit="cover"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                    >Submit your review</Text>
                </Flex>
                <SelectField
                    display="flex"
                    direction="column"
                    justifyContent="center"
                    shrink="0"
                    alignSelf="stretch"
                    objectFit="cover"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    label="Class"
                    placeholder="Class"
                    size="large"
                    isDisabled={false}
                    labelHidden={false}
                    variation="default"
                    descriptiveText="Which class are you writing this review for?"
                    name="className"
                >
                    <option>CSCE121</option>
                    <option>CSCE221</option>
                    <option>CSCE312</option>
                    <option>CSCE313</option>
                </SelectField>
                <TextField
                    display="flex"
                    direction="column"
                    justifyContent="center"
                    shrink="0"
                    alignSelf="stretch"
                    objectFit="cover"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    label="Title"
                    descriptiveText="The title of your post"
                    placeholder="Title"
                    size="large"
                    isDisabled={false}
                    labelHidden={false}
                    variation="default"
                    name="title"
                ></TextField>
                <TextField
                    display="flex"
                    direction="column"
                    justifyContent="center"
                    shrink="0"
                    alignSelf="stretch"
                    objectFit="cover"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    label="Review"
                    placeholder="Your review"
                    size="large"
                    isDisabled={false}
                    labelHidden={false}
                    variation="default"
                    descriptiveText="Write your review here"
                    isMultiline={true}
                    name="reviewText"
                ></TextField>
                <Button
                    display="flex"
                    gap="0"
                    justifyContent="center"
                    alignItems="center"
                    shrink="0"
                    alignSelf="stretch"
                    objectFit="cover"
                    position="relative"
                    size="large"
                    isDisabled={false}
                    variation="primary"
                    type="submit"
                >Submit REView</Button>
            </Flex>
        </View>
    );
}