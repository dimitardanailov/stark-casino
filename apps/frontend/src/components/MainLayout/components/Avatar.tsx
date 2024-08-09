"use client";

import dynamic from "next/dynamic";

import styled from "styled-components";

import { HFlexBox, VFlexbox } from "@/styled-components/Grid";
import { Center as AvatarContainer } from "@/styled-components/Images/Container";

import source from "@/data/casino";

const Container = styled(HFlexBox)`
  width: 100%;
  justify-content: center;
`;

const Text = styled.span`
  position: relative;
  width: 100%;

  margin-top: 1rem;
  text-align: center;
  font-size: 1.2rem;
`;

const Avatar = dynamic(() => import("@/components/Avatar"), { ssr: false });

const LayoutAvatar = () => {
  const size = 120;
  const title = "Casino";
  const border = "0.2rem solid #000";
  const borderRadius = 100;

  return (
    <Container>
      <VFlexbox>
        <AvatarContainer size={size}>
          <Avatar
            size={size}
            title={title}
            source={source}
            border={border}
            radius={borderRadius}
          />
        </AvatarContainer>
        <Text>{title}</Text>
      </VFlexbox>
    </Container>
  );
};

export default LayoutAvatar;
