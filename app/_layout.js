import { Stack } from 'expo-router'
import { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as Splashscreen from 'expo-splash-screen'
Splashscreen.preventAutoHideAsync()
const Layout = () => {
  const [fontLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    
  })
  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await Splashscreen.hideAsync()
    }
    
  }, [fontLoaded])
  if (!fontLoaded) return null
  
  return (<Stack onLayout={onLayoutRootView} />)
  
}
export default Layout
