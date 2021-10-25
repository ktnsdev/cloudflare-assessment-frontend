import React, { useState, useEffect, useContext, createRef } from "react";
import {
    HomeContainer,
    HomeCreatePostAddedImage,
    HomeCreatePostAddedImageContainer,
    HomeCreatePostAddImageButton,
    HomeCreatePostAddImageContainer,
    HomeCreatePostAddImageLinkInput,
    HomeCreatePostButton,
    HomeCreatePostConfirmImageButton,
    HomeCreatePostContainer,
    HomeCreatePostDisabled,
    HomeCreatePostErrorMessage,
    HomeCreatePostErrorMessageContainer,
    HomeCreatePostInput,
    HomeCreatePostInputContainer,
    HomeCreatePostMenuContainer,
    HomeCreatePostRemoveAddedImageTooltip,
    HomeCreatePostRemoveImageButton,
    HomeCreatePostTitle,
    HomeCreatePostTitleInput,
    HomeDownvoteIcon,
    HomePostCommensTitleContainer,
    HomePostCommentContent,
    HomePostCommentDoneButton,
    HomePostCommentIcon,
    HomePostCommentInput,
    HomePostCommentInputContainer,
    HomePostCommentsContainer,
    HomePostCommentsTitle,
    HomePostCommentTimestamp,
    HomePostCommentHeaderContainer,
    HomePostCommentUsername,
    HomePostContainer,
    HomePostContent,
    HomePostContentContainer,
    HomePostFooter,
    HomePostImage,
    HomePostImageContainer,
    HomePostSubtitleContainer,
    HomePostTimestamp,
    HomePostTitle,
    HomePostUpvoteIcon,
    HomePostUpvoteIndicator,
    HomePostUsername,
    HomeThemeChangeDarkModeIcon,
    HomeThemeChangeLightModeIcon,
    HomeThemeChanger,
    HomeThemeChangerText,
    HomeUsernameContainer,
    HomeUsernameEditDoneIcon,
    HomeUsernameEditIcon,
    HomeUsernameText,
    HomeUsernameTextInput,
    HomeWelcomeContainer,
    HomeWelcomeText,
    HomeCommentsIndicator,
    HomePostCommentsIndicatorContainer,
} from "./HomeComponents";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ThemeContext } from "styled-components";

function Home(props) {
    const [imageAdderIsShown, setImageAdderIsShown] = useState(false);
    const [addedPostImages, setAddedPostImages] = useState([]);
    const [currentImageUrl, setCurrentImageUrl] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [postContent, setPostContent] = useState("");
    const [usernameEditorIsShown, setUsernameEditorIsShown] = useState(false);
    const [username, setUsername] = useState("Cloudflare");
    const [title, setTitle] = useState("");
    const [isPosting, setIsPosting] = useState(false);
    const [allPosts, setAllPosts] = useState([]);

    const theme = useContext(ThemeContext);
    const [commentInputRefs, setCommentInputRefs] = useState([]);

    dayjs.extend(relativeTime);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/posts`).then((result) => {
            let jsonResult = result.data;
            let tempAllPosts = [];
            let tempCommentInputRefs = [];

            for (let i = jsonResult.length - 1; i >= 0; i--) {
                tempAllPosts.push(JSON.parse(jsonResult[i]));
                tempCommentInputRefs.push(createRef());
            }

            console.log(tempAllPosts);
            setAllPosts(tempAllPosts);
            setCommentInputRefs(tempCommentInputRefs);
        });

        if (addedPostImages.length >= 4) {
            if (!imageAdderIsShown) setErrorMessage("");
            setErrorMessage("You can only add up to 4 images per post");
        } else {
            setErrorMessage("");
        }
    }, [addedPostImages, imageAdderIsShown]);

    function showImageAdder() {
        if (addedPostImages.length >= 4) {
            setImageAdderIsShown(false);
            return;
        }

        if (!imageAdderIsShown) setErrorMessage("");
        setImageAdderIsShown(!imageAdderIsShown);
    }

    function addImage(url) {
        if (url === "" || url === null || url === undefined) {
            return;
        }

        let tempAddedPostImages = addedPostImages;
        tempAddedPostImages.push(url);
        setAddedPostImages([...tempAddedPostImages]);
        setCurrentImageUrl("");
        if (imageAdderIsShown) showImageAdder();
    }

    function removeImage(url) {
        if (url === "" || url === null || url === undefined) {
            return;
        }

        let tempAddedPostImages = addedPostImages;
        const index = tempAddedPostImages.indexOf(url);
        if (index > -1) {
            tempAddedPostImages.splice(index, 1);
        }

        setAddedPostImages([...tempAddedPostImages]);
        setCurrentImageUrl("");
        if (imageAdderIsShown) showImageAdder();
    }

    function showUsernameEditor() {
        setUsernameEditorIsShown(!usernameEditorIsShown);
    }

    function post() {
        setIsPosting(true);
        if (!process.env.REACT_APP_API_URL) {
            return;
        }

        let postBody = {
            title: title,
            username: username,
            content: postContent,
        };

        if (addedPostImages.length !== 0) postBody.images = addedPostImages;

        axios
            .post(`${process.env.REACT_APP_API_URL}/posts`, postBody)
            .then((result) => {
                setPostContent("");
                setTitle("");
                setAddedPostImages([]);
                setErrorMessage("");
                setImageAdderIsShown(false);
            })
            .catch((error) => {
                setErrorMessage("Posting failed, please try again in a moment");
            })
            .then(() => {
                setIsPosting(false);
            });
    }

    function onUpvote(postUUID, index) {
        if (!postUUID) return;

        let postBody = {
            uuid: postUUID,
        };

        axios.post(`${process.env.REACT_APP_API_URL}/posts/upvote`, postBody).then((result) => {
            if (result.status === 200) {
                console.log("Upvoted!");
                let tempAllPosts = allPosts;
                tempAllPosts[index].upvote = tempAllPosts[index].upvote + 1;
                setAllPosts([...tempAllPosts]);
            }
        });
    }

    function onDownvote(postUUID, index) {
        if (!postUUID) return;

        let postBody = {
            uuid: postUUID,
        };

        axios.post(`${process.env.REACT_APP_API_URL}/posts/downvote`, postBody).then((result) => {
            if (result.status === 200) {
                console.log("Downvoted!");
                let tempAllPosts = allPosts;
                tempAllPosts[index].upvote = tempAllPosts[index].upvote - 1;
                setAllPosts([...tempAllPosts]);
            }
        });
    }

    function onComment(postUUID, index, content) {
        if (!postUUID || !content || content === "") return;
        let postBody = {
            uuid: postUUID,
            comment: {
                content: content,
                username: username,
            },
        };

        axios.post(`${process.env.REACT_APP_API_URL}/posts/comment`, postBody).then((result) => {
            if (result.status === 200) {
                console.log("Commented!");
                let tempAllPosts = allPosts;
                let tempPostComments = tempAllPosts[index].comments || [];
                tempPostComments.push({
                    content: content,
                    username: username,
                    timestamp: dayjs().toISOString(),
                });

                tempAllPosts[index].comments = tempPostComments;

                let tempCommentInputRefs = commentInputRefs;
                tempCommentInputRefs[index].current.value = "";
                setCommentInputRefs(commentInputRefs);
                setAllPosts([...tempAllPosts]);
            }
        });
    }

    return (
        <>
            <HomeContainer>
                <HomeThemeChanger onClick={() => props.setTheme()}>
                    {theme.name === "light" && <HomeThemeChangeDarkModeIcon />}
                    {theme.name === "dark" && <HomeThemeChangeLightModeIcon />}
                    <HomeThemeChangerText>Change Theme</HomeThemeChangerText>
                </HomeThemeChanger>
                <HomeWelcomeContainer>
                    <HomeWelcomeText>Welcome, </HomeWelcomeText>
                    <HomeUsernameContainer usernameEditorIsShown={usernameEditorIsShown} onClick={() => showUsernameEditor()}>
                        {!usernameEditorIsShown && (
                            <>
                                <HomeUsernameText>{username}</HomeUsernameText>
                                <HomeUsernameEditIcon />
                            </>
                        )}
                        {usernameEditorIsShown && (
                            <>
                                <HomeUsernameTextInput autoFocus value={username} onChange={(event) => setUsername(event.target.value)}></HomeUsernameTextInput>
                                <HomeUsernameEditDoneIcon />
                            </>
                        )}
                    </HomeUsernameContainer>
                </HomeWelcomeContainer>
                <HomeCreatePostContainer>
                    <HomeCreatePostTitle>Create a post</HomeCreatePostTitle>
                    <HomeCreatePostInputContainer>
                        <HomeCreatePostTitleInput placeholder="Write your title here..." value={title} onChange={(event) => setTitle(event.target.value)} />
                    </HomeCreatePostInputContainer>
                    <HomeCreatePostInputContainer>
                        <HomeCreatePostInput placeholder="Write your post here..." value={postContent} onChange={(event) => setPostContent(event.target.value)} />
                    </HomeCreatePostInputContainer>

                    {Object.keys(addedPostImages).map((iteration) => {
                        return (
                            <HomeCreatePostAddedImageContainer>
                                <HomeCreatePostAddedImage src={addedPostImages[iteration]} />
                                <HomeCreatePostRemoveAddedImageTooltip onClick={() => removeImage(addedPostImages[iteration])}>Remove Image</HomeCreatePostRemoveAddedImageTooltip>
                            </HomeCreatePostAddedImageContainer>
                        );
                    })}

                    {imageAdderIsShown && (
                        <HomeCreatePostAddImageContainer>
                            <HomeCreatePostAddImageLinkInput placeholder="Enter image url" onChange={(event) => setCurrentImageUrl(event.target.value)} value={currentImageUrl} />
                            <HomeCreatePostConfirmImageButton onClick={() => addImage(currentImageUrl)} />
                            <HomeCreatePostRemoveImageButton onClick={() => showImageAdder()} />
                        </HomeCreatePostAddImageContainer>
                    )}

                    {errorMessage && (
                        <HomeCreatePostErrorMessageContainer>
                            <HomeCreatePostErrorMessage>{errorMessage}</HomeCreatePostErrorMessage>
                        </HomeCreatePostErrorMessageContainer>
                    )}

                    <HomeCreatePostMenuContainer>
                        <HomeCreatePostAddImageButton onClick={() => showImageAdder()} />
                        {!isPosting && <HomeCreatePostButton onClick={() => post()}>Post as {username}</HomeCreatePostButton>}
                        {isPosting && <HomeCreatePostDisabled>Posting...</HomeCreatePostDisabled>}
                    </HomeCreatePostMenuContainer>
                </HomeCreatePostContainer>

                {Object.keys(allPosts).map((iteration) => (
                    <>
                        <HomePostContainer>
                            <HomePostTitle>{allPosts[iteration].title}</HomePostTitle>
                            <HomePostSubtitleContainer>
                                <HomePostUsername>{allPosts[iteration].username} · </HomePostUsername>
                                <HomePostTimestamp>{dayjs(allPosts[iteration].timestamp).fromNow()}</HomePostTimestamp>
                            </HomePostSubtitleContainer>
                            <HomePostContentContainer>
                                <HomePostContent>{allPosts[iteration].content}</HomePostContent>
                            </HomePostContentContainer>
                            {allPosts[iteration].images && (
                                <>
                                    {Object.keys(allPosts[iteration].images).map((imageIteration) => (
                                        <HomePostImageContainer>
                                            <HomePostImage src={allPosts[iteration].images[imageIteration]} />
                                        </HomePostImageContainer>
                                    ))}
                                </>
                            )}
                            <HomePostFooter>
                                <HomeDownvoteIcon onClick={() => onDownvote(allPosts[iteration].uuid, iteration)} />
                                <HomePostUpvoteIcon onClick={() => onUpvote(allPosts[iteration].uuid, iteration)} />
                                <HomePostUpvoteIndicator>{allPosts[iteration].upvote ? allPosts[iteration].upvote : "0"}</HomePostUpvoteIndicator>
                                <HomePostCommentsIndicatorContainer>
                                    <HomePostCommentIcon />
                                    <HomeCommentsIndicator>{allPosts[iteration].comments ? allPosts[iteration].comments.length : "0"}</HomeCommentsIndicator>
                                </HomePostCommentsIndicatorContainer>
                            </HomePostFooter>

                            {allPosts[iteration].comments && (
                                <>
                                    <HomePostCommensTitleContainer>
                                        <HomePostCommentsTitle>{allPosts[iteration].comments.length === 1 ? "Comment" : "Comments"}</HomePostCommentsTitle>
                                    </HomePostCommensTitleContainer>
                                    {Object.keys(allPosts[iteration].comments).map((commentIteration) => (
                                        <HomePostCommentsContainer>
                                            <HomePostCommentHeaderContainer>
                                                <HomePostCommentUsername>{allPosts[iteration].comments[commentIteration].username} · </HomePostCommentUsername>
                                                <HomePostCommentTimestamp>{dayjs(allPosts[iteration].comments[commentIteration].timestamp).fromNow()}</HomePostCommentTimestamp>
                                            </HomePostCommentHeaderContainer>
                                            <HomePostCommentContent>{allPosts[iteration].comments[commentIteration].content}</HomePostCommentContent>
                                        </HomePostCommentsContainer>
                                    ))}
                                </>
                            )}
                            <HomePostCommentInputContainer>
                                <HomePostCommentInput placeholder={`You're commenting as ${username}`} ref={commentInputRefs[iteration]} />
                                <HomePostCommentDoneButton onClick={() => onComment(allPosts[iteration].uuid, iteration, commentInputRefs[iteration].current.value)} />
                            </HomePostCommentInputContainer>
                        </HomePostContainer>
                    </>
                ))}
            </HomeContainer>
        </>
    );
}

export default Home;
