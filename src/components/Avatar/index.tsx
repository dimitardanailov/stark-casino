"use client";

import { FC } from "react";

import Image from "next/image";

import styled from "styled-components";

export interface Props {
  source: string;
  title: string;
  size: number;
  border?: string;
  radius?: number;
}

interface CustomImageProps {
  border: string;
  radius: number;
}

const CustomImage = styled(Image)<CustomImageProps>`
  border-radius: ${(p) => p.radius}%;
  border: ${(p) => p.border};
`;

const Avatar: FC<Props> = ({
  size,
  title,
  source,
  border = "0.1rem solid #000",
  radius = 100,
}) => {
  return (
    <CustomImage
      border={border}
      radius={radius}
      src={source}
      alt={title}
      title={title}
      width={size}
      height={size}
    />
  );
};

export default Avatar;
