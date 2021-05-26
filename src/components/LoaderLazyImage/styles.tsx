import styled from "styled-components/native";
import { ImageProps } from "react-native";

interface CustomImageProps extends ImageProps {
  aspectRatio: number

}

export const Small = styled.ImageBackground<CustomImageProps>`
width: 100%;
aspect-ratio: ${props => String(props.aspectRatio)};`; 


export const Original = styled.Image<CustomImageProps>`
width: 100%;
aspect-ratio: ${props => String(props.aspectRatio)};`; 

