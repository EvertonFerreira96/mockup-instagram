import styled from 'styled-components/native';
import {ActivityIndicatorProps, Image, ImageProps} from 'react-native';

interface PostImageProps extends ImageProps {
  aspectRatio: any
}

export const Post = styled.View`
margin-top: 10px;`; 

export const Header = styled.View`
padding:16px;
flex-direction: row;
align-items: center;
`; 

export const Avatar = styled.Image`
width: 32px;
height: 32px; 
border-radius: 16px;
margin-right: 10px;
`; 

export const Name = styled.Text`
color: #333;
font-weight: 700;`; 

export const Description = styled.Text`
padding:16px;
line-height: 18px;`; 

export const ActivityIndicator = styled.ActivityIndicator.attrs<ActivityIndicatorProps>(
  {
    size: 'small', 
    color: '#999'
  }
)`
margin: 30px 0; 
`; 


 