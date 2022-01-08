  //Reanimated shared value
  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue(COLORS.white);
  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue(COLORS.white);
  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue(COLORS.white);
  const favouriteTabFlex = useSharedValue(1);
  const favouriteTabColor = useSharedValue(COLORS.white);
  const notifsTabFlex = useSharedValue(1);
  const notifsTabColor = useSharedValue(COLORS.white);
  //Reanimated animated style
  const homeFlexStyle = useAnimatedStyle(() => {
      return {
          flex: homeTabFlex.value
      }
  })

  const homeColorStyle = useAnimatedStyle(() => {
      return {
          backgroundColor: homeTabColor.value
      }
  })

  const searchFlexStyle = useAnimatedStyle(() => {
      return {
          flex: searchTabFlex.value
      }
  })

  const searchColorStyle = useAnimatedStyle(() => {
      return {
          backgroundColor: searchTabColor.value
      }
  })

  const cartFlexStyle = useAnimatedStyle(() => {
      return {
          flex: cartTabFlex.value
      }
  })

  const cartColorStyle = useAnimatedStyle(() => {
      return {
          backgroundColor: cartTabColor.value
      };
  });
  

  const favouriteFlexStyle = useAnimatedStyle(() => {
      return {
          flex: favouriteTabFlex.value
      }
  })

  const favouriteColorStyle = useAnimatedStyle(() => {
      return {
          backgroundColor: favouriteTabColor.value
      }
  })

  const notifsFlexStyle = useAnimatedStyle(() => {
      return {
          flex: notifsTabFlex.value
      }
  })

  const notifsColorStyle = useAnimatedStyle(() => {
      return {
          backgroundColor: notifsTabColor.value
      }
  })



  if (selectedTab == screens.home) {
                
    homeTabFlex.value = withTiming(4, {duration: 0})
    homeTabColor.value = withTiming(COLORS.primary, {duration: 0})
    
    
}else{
    
    homeTabFlex.value = withTiming(1, {duration: 500})
    homeTabColor.value = withTiming(COLORS.white, {duration: 500})

}

if (selectedTab == screens.search) {
    searchTabFlex.value = withTiming(4, {duration: 0})
    searchTabColor.value = withTiming(COLORS.primary, {duration: 500})


}else{
    searchTabFlex.value = withTiming(1, {duration: 500})
    searchTabColor.value = withTiming(COLORS.white, {duration: 500})
}

if (selectedTab == screens.cart) {
    cartTabFlex.value = withTiming(4, {duration: 500})
    cartTabColor.value = withTiming(COLORS.primary, {duration: 500})
}else{
    cartTabFlex.value = withTiming(1, {duration: 500})
    cartTabColor.value = withTiming(COLORS.white, {duration: 500})
}

if (selectedTab == screens.favourite) {
    favouriteTabFlex.value = withTiming(4, {duration: 500})
    favouriteTabColor.value = withTiming(COLORS.primary, {duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1),})
}else{
    favouriteTabFlex.value = withTiming(1, {duration: 500})
    favouriteTabColor.value = withTiming(COLORS.white, {duration: 500})
}

if (selectedTab == screens.notification) {
    notifsTabFlex.value = withTiming(4, {duration: 500})
    notifsTabColor.value = withTiming(COLORS.primary, {duration: 500})
}else{
    notifsTabFlex.value = withTiming(1, {duration: 500})
    notifsTabColor.value = withTiming(COLORS.white, {duration: 500})
}