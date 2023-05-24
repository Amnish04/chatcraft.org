import { memo } from "react";
import { Avatar } from "@chakra-ui/react";

import MessageBase, { type MessageBaseProps } from "./MessageBase";

type HumanMessageProps = Omit<MessageBaseProps, "avatar"> & { avatarUrl?: string; name?: string };

function HumanMessage(props: HumanMessageProps) {
  const { avatarUrl, name, ...rest } = props;

  // If we have a user's name and GitHub avatar, use that.
  const avatar = avatarUrl ? (
    <Avatar size="sm" src={avatarUrl} title={name} />
  ) : (
    <Avatar size="sm" bg="gray.600" _dark={{ bg: "gray.500" }} />
  );

  return <MessageBase {...rest} avatar={avatar} />;
}

export default memo(HumanMessage);
