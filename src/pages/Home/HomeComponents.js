import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { ReactComponent as ImageIcon } from "../../assets/image_icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/close_icon.svg";
import { ReactComponent as DoneIcon } from "../../assets/done_icon.svg";
import { ReactComponent as EditIcon } from "../../assets/edit_icon.svg";
import { ReactComponent as DarkModeIcon } from "../../assets/dark_mode_icon.svg";
import { ReactComponent as LightModeIcon } from "../../assets/light_mode_icon.svg";
import { ReactComponent as UpvoteIcon } from "../../assets/downvote_icon.svg";
import { ReactComponent as DownvoteIcon } from "../../assets/upvote_icon.svg";
import { ReactComponent as CommentIcon } from "../../assets/comment_icon.svg";

export const HomeContainer = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
`;

export const HomeThemeChangeLightModeIcon = styled(LightModeIcon)`
    height: 24px;
    fill: ${(props) => props.theme.secondaryText};

    &:hover {
        cursor: pointer;
        fill: ${(props) => props.theme.text};
    }
`;

export const HomeThemeChangeDarkModeIcon = styled(DarkModeIcon)`
    height: 24px;
    fill: ${(props) => props.theme.secondaryText};

    &:hover {
        cursor: pointer;
        fill: ${(props) => props.theme.text};
    }
`;

export const HomeThemeChangerText = styled.text`
    font-weight: bold;
    margin-left: 5px;
    color: ${(props) => props.theme.secondaryText};
`;

export const HomeThemeChanger = styled.div`
    height: 30px;
    padding: 5px 15px 5px 12px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 20px;
    top: 20px;

    &:hover {
        cursor: pointer;
        background: ${(props) => props.theme.secondaryBackground};
    }
`;

export const HomeWelcomeContainer = styled.div`
    width: 500px;
    margin-top: 10px;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const HomeWelcomeText = styled.h1`
    margin-right: 5px;
`;

export const HomeUsernameEditIcon = styled(EditIcon)`
    height: 24px;
    fill: ${(props) => props.theme.secondaryText};

    &:hover {
        cursor: pointer;
        fill: ${(props) => props.theme.text};
    }
`;

export const HomeUsernameEditDoneIcon = styled(DoneIcon)`
    height: 24px;
    fill: ${(props) => props.theme.secondaryText};

    &:hover {
        cursor: pointer;
        fill: ${(props) => props.theme.text};
    }
`;

export const HomeUsernameContainer = styled.div`
    background: ${(props) => (props.usernameEditorIsShown ? props.theme.secondaryBackground : props.theme.background)};
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 12px;
    padding-right: 8px;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:hover {
        cursor: pointer;
        background: ${(props) => props.theme.secondaryBackground};
    }

    &:hover + ${HomeUsernameEditIcon} {
        fill: ${(props) => props.theme.text};
    }
`;

export const HomeUsernameText = styled.h1`
    margin: 3px 8px 3px 8px;
`;

export const HomeUsernameTextInput = styled.input`
    margin: 3px 8px 3px 8px;
    width: 100%;
    text-overflow: ellipsis;
    font-size: 32px;
    font-weight: bold;
    font-family: inherit;
    background: ${(props) => props.theme.secondaryBackground};
    outline: none;
    border: none;
    color: ${(props) => props.theme.text};

    input:focus {
        border: none;
        outline: none;
    }
`;

export const HomeCreatePostContainer = styled.div`
    width: 500px;
    padding: 25px;
    border-radius: 12px;
    background: ${(props) => props.theme.lightBackground};
    box-shadow: 0px 12px 32px -12px rgba(0, 0, 0, 0.5);
`;

export const HomeTitle = styled.text``;

export const HomeCreatePostTitle = styled.h2`
    margin: 0px;
`;

export const HomeCreatePostInputContainer = styled.div`
    margin-top: 20px;
`;

export const HomeThemeButton = styled.button``;

export const HomeCreatePostInput = styled.textarea`
    font-family: inherit;
    background: ${(props) => props.theme.lightBackground};
    border: none;
    outline: none;
    width: 100%;
    height: 150px;
    color: ${(props) => props.theme.text};
    font-size: 18px;

    ::-webkit-scrollbar {
        background: transparent;
        color: #333;
        overflow: visible;
        width: 17px;
    }

    input:focus {
        border: none;
    }
`;

export const HomeCreatePostTitleInput = styled.input`
    font-size: 20px;
    font-weight: bold;
    background: ${(props) => props.theme.lightBackground};
    border: none;
    outline: none;
    width: 100%;
    height: 30px;
    color: ${(props) => props.theme.text};

    ::-webkit-scrollbar {
        background: transparent;
        color: #333;
        overflow: visible;
        width: 17px;
    }

    input:focus {
        border: none;
    }
`;

export const HomeCreatePostMenuContainer = styled.div`
    width: 100%;
    height: auto;
    margin-top: 20px;
    align-items: center;
    display: flex;
`;

export const HomeCreatePostButton = styled.div`
    width: fit-content;
    height: auto;
    margin-left: auto;
    border-radius: 6px;
    background: #f48120;
    padding: 7px 10px;
    font-weight: bold;
    color: #fff;
    max-width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    :hover {
        cursor: pointer;
    }
`;

export const HomeCreatePostDisabled = styled.div`
    width: fit-content;
    height: auto;
    margin-left: auto;
    border-radius: 6px;
    background: #a1724c;
    padding: 7px 10px;
    font-weight: bold;
    color: #fff;
`;

export const HomeCreatePostAddImageButton = styled(ImageIcon)`
    height: 24px;
    fill: ${(props) => props.theme.text};

    :hover {
        cursor: pointer;
    }
`;

export const HomeCreatePostRemoveImageButton = styled(CloseIcon)`
    height: 24px;
    fill: ${(props) => props.theme.text};
    margin-left: 10px;

    :hover {
        cursor: pointer;
    }
`;

export const HomeCreatePostConfirmImageButton = styled(DoneIcon)`
    height: 24px;
    fill: ${(props) => props.theme.text};
    margin-left: 10px;

    :hover {
        cursor: pointer;
    }
`;

export const HomeCreatePostAddImageContainer = styled.div`
    width: auto;
    height: auto;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const HomeCreatePostAddImageLinkInput = styled.input`
    width: 88%;
    height: 18px;
    background: ${(props) => props.theme.lightBackground};
    padding: 10px 2% 10px 2%;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.background};
    outline: none;
    color: ${(props) => props.theme.text};
    font-size: 16px;

    input:focus {
        border: none;
    }
`;

export const HomeCreatePostAddedImageContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HomeCreatePostRemoveAddedImageTooltip = styled.div`
    visibility: hidden;
    padding: 10px;
    width: auto;
    font-weight: bold;
    border-radius: 6px;
    position: absolute;
    background-color: ${(props) => props.theme.background};
    box-shadow: 0px 12px 32px -12px rgba(0, 0, 0, 0.5);

    &:hover {
        visibility: visible;
        cursor: pointer;
    }
`;

export const HomeCreatePostAddedImage = styled.img`
    width: 100%;
    height: auto;

    &:hover + ${HomeCreatePostRemoveAddedImageTooltip} {
        visibility: visible;
    }

    &${HomeCreatePostRemoveAddedImageTooltip}:hover {
        filter: blur(5px);
    }

    &:hover {
        filter: blur(5px);
    }
`;

export const HomeCreatePostErrorMessageContainer = styled.div`
    margin-top: 20px;
`;

export const HomeCreatePostErrorMessage = styled.text`
    font-size: 16px;
    font-weight: bold;
    color: #c74646;
`;

export const HomePostContainer = styled.div`
    width: 500px;
    margin-top: 20px;
    padding: 25px;
    border-radius: 12px;
    background: ${(props) => props.theme.lightBackground};
    box-shadow: 0px 12px 32px -12px rgba(0, 0, 0, 0.5);
`;

export const HomePostTitle = styled.h2`
    margin: 0px;
`;

export const HomePostSubtitleContainer = styled.div`
    margin-top: 5px;
    color: ${(props) => props.theme.secondaryText};
`;

export const HomePostUsername = styled.text`
    font-weight: bold;
`;

export const HomePostContentContainer = styled.div`
    margin-top: 15px;
    font-size: 18px;
`;

export const HomePostContent = styled(ReactMarkdown)``;

export const HomePostTimestamp = styled.text``;

export const HomePostImageContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HomePostImage = styled.img`
    width: 100%;
    height: auto;
`;

export const HomePostFooter = styled.div`
    width: 100%;
    height: auto;
    margin-top: 20px;
    align-items: center;
    display: flex;
`;

export const HomePostUpvoteIcon = styled(UpvoteIcon)`
    height: 24px;
    fill: ${(props) => props.theme.text};

    :hover {
        cursor: pointer;
        fill: ${(props) => props.theme.secondaryText};
    }
`;

export const HomeDownvoteIcon = styled(DownvoteIcon)`
    height: 24px;
    fill: ${(props) => props.theme.text};

    :hover {
        cursor: pointer;
        fill: ${(props) => props.theme.secondaryText};
    }
`;

export const HomePostUpvoteIndicator = styled.text`
    margin-left: 8px;
    font-size: 16px;
`;

export const HomePostCommentsIndicatorContainer = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
`;

export const HomePostCommentIcon = styled(CommentIcon)`
    height: 24px;
    fill: ${(props) => props.theme.text};

    :hover {
        cursor: pointer;
        fill: ${(props) => props.theme.secondaryText};
    }
`;

export const HomeCommentsIndicator = styled.text`
    margin-left: 8px;
    font-size: 16px;
`;

export const HomePostCommensTitleContainer = styled.div`
    margin-top: 20px;
`;

export const HomePostCommentsTitle = styled.text`
    font-size: 18px;
    font-weight: bold;
`;

export const HomePostCommentsContainer = styled.div`
    width: 100%;
    height: auto;
    margin-top: 10px;
    padding: 10px;
    border-left: 3px solid ${(props) => props.theme.secondaryText};
`;

export const HomePostCommentHeaderContainer = styled.div`
    color: ${(props) => props.theme.secondaryText};
`;

export const HomePostCommentUsername = styled.text`
    font-weight: bold;
`;

export const HomePostCommentTimestamp = styled.text``;

export const HomePostCommentContent = styled(ReactMarkdown)`
    margin-top: -10px;
    margin-bottom: -10px;
`;

export const HomePostCommentInputContainer = styled.div`
    width: 100%;
    height: auto;
    margin-top: 20px;
    align-items: center;
    display: flex;
    flex-direction: row;
`;

export const HomePostCommentInput = styled.textarea`
    font-family: inherit;
    background: ${(props) => props.theme.lightBackground};
    border: none;
    outline: none;
    width: 100%;
    height: 50px;
    color: ${(props) => props.theme.text};
    font-size: 18px;

    ::-webkit-scrollbar {
        background: transparent;
        color: #333;
        overflow: visible;
        width: 17px;
    }

    input:focus {
        border: none;
    }
`;

export const HomePostCommentDoneButton = styled(DoneIcon)`
    height: 24px;
    fill: ${(props) => props.theme.text};
    margin-left: auto;

    :hover {
        cursor: pointer;
        fill: ${(props) => props.theme.secondaryText};
    }
`;
