import React, { useEffect, useState } from 'react';
import { Animated  } from 'react-native';
import { ImageProps } from 'react-native-svg';

import { Small, Original } from './styles';

interface CustomImageProps extends ImageProps {
  aspectRatio: number

}


interface LoaderLazyImageProps extends ImageProps {
  smallSource: any,
  originalSource: any,
  aspectRatio: number,
  shouldLoad: boolean,
}


const OriginalAnimated  = Animated.createAnimatedComponent(Original);


const LoaderLazyImage: React.FC<LoaderLazyImageProps> = ({ smallSource, originalSource, shouldLoad = false, aspectRatio = 1 }: LoaderLazyImageProps) => {
  const opacity = new Animated.Value(0); 
  const [loaded, setLoaded] = useState(false); 

  useEffect(() => {
    if(shouldLoad){

    setTimeout(() => {
      setLoaded(true)
    }, 350);
  }
  }, [shouldLoad])

function handleAnimate(){
  Animated.timing(opacity, {
    toValue: 1,  
    duration: 350, 
    useNativeDriver: true,  
  }).start();
}


  return (
    <Small
      source={smallSource}
      aspectRatio={aspectRatio}
      resizeMode="contain"
      blurRadius={1.5}>
      {
        loaded
        &&
      <OriginalAnimated
        style={{opacity}}
        source={originalSource}
        aspectRatio={aspectRatio}
        resizeMode="contain"
        onLoadEnd={handleAnimate} />
      }
    </Small>
  )
}

export default LoaderLazyImage;