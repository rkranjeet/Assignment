/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, { Path, SvgUri } from "react-native-svg"
import Video from "react-native-video"


const { height, width } = Dimensions.get("window");

function App(): JSX.Element {

  const [hamBurgerExpended, setHamBurgerExpended] = useState(false);

  const star = () => {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        fill="none"
        className="mx-[8px] mb-[2px] inline leading-5"
      >
        <Path
          fill="#000"
          d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z"
          style={{
            mixBlendMode: "darken",
          }}
        />
      </Svg>
    )
  }

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'https://www.uni.cards/videos/nxt_wave_bg.mp4' }}
        style={styles.backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode={"cover"}
        rate={1.0}
        ignoreSilentSwitch={"obey"}
      />
      <View style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexGrow: 1 }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="Logo_logo_white__zowGB"
            viewBox="0 0 85 60"
            width={100}
            height={80}
          >
            <Path
              fill="#000"
              fillRule="evenodd"
              d="M54.894 39.504h-6.23V19.77h6.23v19.734ZM30.402 26v13.504h-6.23v-17.14a2.594 2.594 0 0 1 2.595-2.594H42.33a2.594 2.594 0 0 1 2.595 2.595v17.139h-6.23V26h-8.294Zm-16.168 7.274V19.77h6.23v17.14a2.594 2.594 0 0 1-2.594 2.594H2.305A2.594 2.594 0 0 1-.289 36.91V19.77h6.23v13.504h8.294ZM65.289 19.77c0 2.099-1.703 3.802-3.8 3.802a3.803 3.803 0 0 1-3.801-3.801c0-2.098 1.703-3.8 3.8-3.8 2.098 0 3.801 1.702 3.801 3.8Z"
              clipRule="evenodd"
            />
          </Svg>

        </View>
        <View style={{ flexGrow: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity style={{}} onPress={() => { setHamBurgerExpended((state) => !state) }}>
            {hamBurgerExpended
              ? <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
              >
                <Path fill="#fff" d="m1.414.333 21.92 21.92-1.414 1.414L0 1.747z" />
                <Path fill="#fff" d="m1.414.333 21.92 21.92-1.414 1.414L0 1.747z" />
                <Path fill="#fff" d="m1.414.333 21.92 21.92-1.414 1.414L0 1.747z" />
                <Path fill="#fff" d="m23.334 1.747-21.92 21.92-1.415-1.414L21.92.333z" />
                <Path fill="#fff" d="m23.334 1.747-21.92 21.92-1.415-1.414L21.92.333z" />
                <Path fill="#fff" d="m23.334 1.747-21.92 21.92-1.415-1.414L21.92.333z" />
              </Svg>
              : <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={31}
                height={20}
                fill="none"
              >
                <Path fill="#fff" d="M0 0h31v2H0z" />
                <Path fill="#fff" d="M0 0h31v2H0z" />
                <Path fill="#fff" d="M0 0h31v2H0zM0 9h31v2H0z" />
                <Path fill="#fff" d="M0 9h31v2H0z" />
                <Path fill="#fff" d="M0 9h31v2H0zM0 18h31v2H0z" />
                <Path fill="#fff" d="M0 18h31v2H0z" />
                <Path fill="#fff" d="M0 18h31v2H0z" />
              </Svg>}
          </TouchableOpacity>
        </View>
      </View>
      {hamBurgerExpended
        ? <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 60, backgroundColor: 'black', opacity: 0.5 }}>
          <View style={{ flexGrow: 1, width: width, paddingHorizontal: 30 }}>
            <Text style={{ color: 'white' }}>Uni Paycheck</Text>
          </View>
          <View style={{ flexGrow: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <SvgUri
              width={18}
              height={14}
              uri="https://www.uni.cards/images/right_arrow.svg"
            />
          </View>
        </View>
        : null
      }
      <View style={{ alignSelf: 'flex-start', marginTop: 60 }}>
        <Image source={{ uri: 'https://www.uni.cards/images/nx-wave/nx_wave_hero.png' }} width={225} height={225} />
      </View >
      <View style={{ paddingRight: 50 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{'NX Wave.'}
          <Text style={{ fontWeight: 'normal' }}>{' The next-gen credit card for those who love rewards.'}</Text>
        </Text>
      </View>
      <View style={{ marginTop: 30, paddingRight: 50 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>1% Cashback
          <View width={10}></View>{star()}<View width={10}></View>
          <Text>5x Reward</Text>
          <View width={10}></View>{star()}<View width={10}></View>
          <Text>Zero Forex Markup</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Apply Now press')}>
        <Text style={{ fontSize: 18, fontWeight: '500' }}>Apply Now</Text>
        <SvgUri
          width={21}
          height={16}
          uri="https://www.uni.cards/images/right_arrow.svg"
        />
      </TouchableOpacity>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0
  },
  button: {
    marginTop: 60,
    borderWidth: 0.5,
    borderRadius: 10,
    width: width - 60,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between'
  }
});

export default App;
