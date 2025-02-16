/**
 *
 * @format
 */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior='automatic'
      >
        <View
          style={{
            width: 375,
            height: 857,
            backgroundColor: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          <View
            style={{
              width: 375,
              height: 44,
              backgroundColor: '#ffffff',
              position: 'relative',
              zIndex: 8,
              marginTop: 7,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            }}
          >
            <ImageBackground
              style={{
                width: 15.333,
                height: 11,
                position: 'absolute',
                top: 17.331,
                right: 43.667,
                zIndex: 10,
              }}
              source={require('./assets/images/4f1d9de9-6fe4-49e5-bdf2-d2fce48ecc6a.png')}
              resizeMode='cover'
            />
            <ImageBackground
              style={{
                width: '6.49%',
                height: '25.76%',
                position: 'absolute',
                top: '39.39%',
                left: '89.69%',
                zIndex: 9,
              }}
              source={require('./assets/images/203d57d9-17cf-44f4-8b0a-8fe4d7c4f503.png')}
            />
            <ImageBackground
              style={{
                width: 17,
                height: 10.667,
                position: 'absolute',
                top: 17.667,
                right: 64,
                zIndex: 11,
              }}
              source={require('./assets/images/dd290fca-b204-40d6-b26e-4eb0bce1760d.png')}
              resizeMode='cover'
            />
            <Text
              style={{
                display: 'flex',
                width: '14.4%',
                height: '45.45%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'SF Pro Text',
                fontSize: 15,
                fontWeight: '600',
                lineHeight: 20,
                color: '#000000',
                letterSpacing: -0.24,
                position: 'absolute',
                top: '40.91%',
                left: '5.6%',
                textAlign: 'center',
                zIndex: 13,
              }}
              numberOfLines={1}
            >
              9:41
            </Text>
          </View>
          <View
            style={{
              width: 340,
              height: 50,
              backgroundColor: '#ffffff',
              position: 'relative',
              zIndex: 2,
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 18,
            }}
          >
            <Text
              style={{
                display: 'flex',
                width: 228,
                height: 38.333,
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Tilt Warp',
                fontSize: 44,
                fontWeight: '400',
                lineHeight: 28,
                color: '#3d8d7a',
                letterSpacing: -0.24,
                position: 'absolute',
                top: '50%',
                left: '50%',
                textAlign: 'center',
                zIndex: 3,
                transform: [{ translateY: -19 }, { translateX: -114 }],
              }}
              numberOfLines={1}
            >
              BiteByte
            </Text>
            <ImageBackground
              style={{
                width: 30,
                height: 30,
                position: 'absolute',
                top: '50%',
                right: 0,
                overflow: 'hidden',
                zIndex: 4,
                transform: [{ translateY: -15 }, { translateX: 0 }],
              }}
              source={require('./assets/images/8e9bfa5b-80f2-4c3a-b755-e1e9b8592f47.png')}
              resizeMode='cover'
            >
              <ImageBackground
                style={{
                  width: 12,
                  height: 12,
                  position: 'relative',
                  zIndex: 5,
                  marginTop: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 0,
                }}
                source={require('./assets/images/9d3d9330-a284-4e0a-b254-45917b10a852.png')}
                resizeMode='cover'
              />
            </ImageBackground>
            <ImageBackground
              style={{
                width: 30,
                height: 30,
                position: 'absolute',
                top: '50%',
                left: 0,
                overflow: 'hidden',
                zIndex: 6,
                transform: [{ translateY: -15 }, { translateX: 0 }],
              }}
              source={require('./assets/images/bfc02a57-6f1e-4b77-a5ac-8301a8aea9c0.png')}
              resizeMode='cover'
            />
          </View>
          <Text
            style={{
              display: 'flex',
              width: 249,
              height: 20,
              justifyContent: 'center',
              alignItems: 'flex-start',
              fontFamily: 'Inter',
              fontSize: 28,
              fontWeight: '700',
              lineHeight: 20,
              color: '#000000',
              letterSpacing: -0.24,
              position: 'relative',
              textAlign: 'center',
              marginTop: 24,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 26,
            }}
            numberOfLines={1}
          >
            Blood Sugar Trend
          </Text>
          <View
            style={{
              width: 318,
              height: 30,
              backgroundColor: 'rgba(196, 196, 196, 0.5)',
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              borderBottomRightRadius: 16,
              borderBottomLeftRadius: 16,
              position: 'relative',
              zIndex: 57,
              marginTop: 20,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 29,
              transform: [{ rotate: '-90deg' }],
            }}
          >
            <View
              style={{
                width: '18.24%',
                height: '100%',
                backgroundColor: '#3d8d7a',
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                borderBottomRightRadius: 16,
                borderBottomLeftRadius: 16,
                position: 'absolute',
                top: '0%',
                left: 0,
                zIndex: 60,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 33.745,
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontFamily: 'Inter',
                  fontSize: 18,
                  fontWeight: '400',
                  lineHeight: 20,
                  color: '#ffffff',
                  letterSpacing: -0.24,
                  position: 'absolute',
                  top: '-3.33%',
                  left: '20.69%',
                  textAlign: 'center',
                  zIndex: 61,
                  transform: [{ rotate: '90deg' }],
                }}
                numberOfLines={1}
              >
                day
              </Text>
            </View>
            <Text
              style={{
                display: 'flex',
                width: '16.98%',
                height: '60%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Inter',
                fontSize: 18,
                fontWeight: '400',
                lineHeight: 18,
                color: 'rgba(0, 0, 0, 0.75)',
                letterSpacing: -0.24,
                position: 'absolute',
                top: '16.67%',
                left: '44.65%',
                textAlign: 'center',
                zIndex: 63,
              }}
              numberOfLines={1}
            >
              month
            </Text>
            <Text
              style={{
                display: 'flex',
                width: '14.78%',
                height: '60%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Inter',
                fontSize: 18,
                fontWeight: '400',
                lineHeight: 18,
                color: 'rgba(0, 0, 0, 0.75)',
                letterSpacing: -0.24,
                position: 'absolute',
                top: '16.67%',
                left: '21.7%',
                textAlign: 'center',
                zIndex: 62,
              }}
              numberOfLines={1}
            >
              week
            </Text>
            <Text
              style={{
                display: 'flex',
                width: '25.16%',
                height: '60%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Inter',
                fontSize: 18,
                fontWeight: '400',
                lineHeight: 18,
                color: 'rgba(0, 0, 0, 0.75)',
                letterSpacing: -0.24,
                position: 'absolute',
                top: '20%',
                left: '69.81%',
                textAlign: 'center',
                zIndex: 64,
              }}
              numberOfLines={1}
            >
              6 months
            </Text>
          </View>
          <ImageBackground
            style={{
              width: 15.637,
              height: 12.665,
              position: 'relative',
              zIndex: 52,
              marginTop: 18.86,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 65,
            }}
            source={require('./assets/images/ee057aec-f4b2-4919-bc02-7af64406b0a2.png')}
          />
          <View
            style={{
              display: 'flex',
              width: 219,
              height: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              zIndex: 38,
              marginTop: 189.475,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 106,
            }}
          >
            <Text
              style={{
                display: 'flex',
                width: 22,
                height: 18,
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexShrink: 0,
                fontFamily: 'Signika',
                fontSize: 11,
                fontWeight: '400',
                lineHeight: 18,
                color: '#000000',
                letterSpacing: -0.24,
                position: 'relative',
                textAlign: 'center',
                zIndex: 38,
              }}
              numberOfLines={1}
            >
              6:00
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 22,
                height: 18,
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexShrink: 0,
                fontFamily: 'Signika',
                fontSize: 11,
                fontWeight: '400',
                lineHeight: 18,
                color: '#000000',
                letterSpacing: -0.24,
                position: 'relative',
                textAlign: 'center',
                zIndex: 35,
              }}
              numberOfLines={1}
            >
              9:00
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 26,
                height: 18,
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexShrink: 0,
                fontFamily: 'Signika',
                fontSize: 11,
                fontWeight: '400',
                lineHeight: 18,
                color: '#000000',
                letterSpacing: -0.24,
                position: 'relative',
                textAlign: 'center',
                zIndex: 36,
              }}
              numberOfLines={1}
            >
              12:00
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 26,
                height: 18,
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexShrink: 0,
                fontFamily: 'Signika',
                fontSize: 11,
                fontWeight: '400',
                lineHeight: 18,
                color: '#000000',
                letterSpacing: -0.24,
                position: 'relative',
                textAlign: 'center',
                zIndex: 37,
              }}
              numberOfLines={1}
            >
              15:00
            </Text>
          </View>
          <Text
            style={{
              height: 22,
              fontFamily: 'Inter',
              fontSize: 28,
              fontWeight: '700',
              lineHeight: 20,
              color: '#000000',
              letterSpacing: -0.24,
              position: 'relative',
              textAlign: 'left',
              overflow: 'hidden',
              zIndex: 1,
              marginTop: 34,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 28,
            }}
            numberOfLines={1}
          >
            Report{'\n'}
          </Text>
          <View
            style={{
              width: 318,
              height: 30,
              backgroundColor: 'rgba(196, 196, 196, 0.5)',
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              borderBottomRightRadius: 16,
              borderBottomLeftRadius: 16,
              position: 'relative',
              zIndex: 66,
              marginTop: 20,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 29,
              transform: [{ rotate: '-90deg' }],
            }}
          >
            <View
              style={{
                width: '18.24%',
                height: '100%',
                backgroundColor: '#3d8d7a',
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                borderBottomRightRadius: 16,
                borderBottomLeftRadius: 16,
                position: 'absolute',
                top: '0%',
                left: 0,
                zIndex: 69,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 33.745,
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontFamily: 'Inter',
                  fontSize: 18,
                  fontWeight: '400',
                  lineHeight: 20,
                  color: '#ffffff',
                  letterSpacing: -0.24,
                  position: 'absolute',
                  top: '-3.33%',
                  left: '20.69%',
                  textAlign: 'center',
                  zIndex: 70,
                  transform: [{ rotate: '90deg' }],
                }}
                numberOfLines={1}
              >
                day
              </Text>
            </View>
            <Text
              style={{
                display: 'flex',
                width: '16.98%',
                height: '60%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Inter',
                fontSize: 18,
                fontWeight: '400',
                lineHeight: 18,
                color: 'rgba(0, 0, 0, 0.75)',
                letterSpacing: -0.24,
                position: 'absolute',
                top: '16.67%',
                left: '44.65%',
                textAlign: 'center',
                zIndex: 72,
              }}
              numberOfLines={1}
            >
              month
            </Text>
            <Text
              style={{
                display: 'flex',
                width: '14.78%',
                height: '60%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Inter',
                fontSize: 18,
                fontWeight: '400',
                lineHeight: 18,
                color: 'rgba(0, 0, 0, 0.75)',
                letterSpacing: -0.24,
                position: 'absolute',
                top: '16.67%',
                left: '21.7%',
                textAlign: 'center',
                zIndex: 71,
              }}
              numberOfLines={1}
            >
              week
            </Text>
            <Text
              style={{
                display: 'flex',
                width: '25.16%',
                height: '60%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Inter',
                fontSize: 18,
                fontWeight: '400',
                lineHeight: 18,
                color: 'rgba(0, 0, 0, 0.75)',
                letterSpacing: -0.24,
                position: 'absolute',
                top: '20%',
                left: '69.81%',
                textAlign: 'center',
                zIndex: 73,
              }}
              numberOfLines={1}
            >
              6 months
            </Text>
          </View>
          <View
            style={{
              width: 321,
              height: 116,
              position: 'relative',
              zIndex: 22,
              marginTop: 21,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 27,
            }}
          >
            <View
              style={{
                width: 150,
                height: 116,
                fontSize: 0,
                backgroundColor: '#f85c7f',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 16,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 64.049,
                  height: 12,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  fontFamily: 'Inter',
                  fontSize: 18,
                  fontWeight: '400',
                  lineHeight: 12,
                  color: '#ffffff',
                  letterSpacing: -0.24,
                  position: 'relative',
                  textAlign: 'center',
                  zIndex: 17,
                  marginTop: 12,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 2.96,
                }}
                numberOfLines={1}
              >
                Max
              </Text>
              <View
                style={{
                  width: 128.28,
                  height: 23,
                  position: 'relative',
                  zIndex: 19,
                  marginTop: 30,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 9.869,
                }}
              >
                <Text
                  style={{
                    display: 'flex',
                    width: 77.961,
                    height: 23,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    fontFamily: 'Inter',
                    fontSize: 36,
                    fontWeight: '400',
                    lineHeight: 20,
                    color: '#ffffff',
                    letterSpacing: -0.24,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    textAlign: 'center',
                    zIndex: 18,
                  }}
                  numberOfLines={1}
                >
                  14.3
                </Text>
                <Text
                  style={{
                    display: 'flex',
                    width: 51.572,
                    height: 16,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    fontFamily: 'Inter',
                    fontSize: 18,
                    fontWeight: '500',
                    lineHeight: 16,
                    color: '#ffffff',
                    letterSpacing: -0.24,
                    position: 'absolute',
                    top: 7,
                    left: 76.708,
                    textAlign: 'center',
                    zIndex: 19,
                  }}
                  numberOfLines={1}
                >
                  mmol
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 150,
                height: 116,
                backgroundColor: '#3d8d7a',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
                position: 'absolute',
                top: 0,
                left: 171,
                zIndex: 21,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 72.234,
                  height: 23,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  fontFamily: 'Inter',
                  fontSize: 36,
                  fontWeight: '400',
                  lineHeight: 20,
                  color: '#ffffff',
                  letterSpacing: -0.24,
                  position: 'absolute',
                  top: 53,
                  left: 11.741,
                  textAlign: 'center',
                  zIndex: 23,
                }}
                numberOfLines={1}
              >
                2.3
              </Text>
              <Text
                style={{
                  display: 'flex',
                  width: 54.616,
                  height: 16,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  fontFamily: 'Inter',
                  fontSize: 18,
                  fontWeight: '500',
                  lineHeight: 16,
                  color: '#ffffff',
                  letterSpacing: -0.24,
                  position: 'absolute',
                  top: 60,
                  left: 76.555,
                  textAlign: 'center',
                  zIndex: 24,
                }}
                numberOfLines={1}
              >
                mmol
              </Text>
            </View>
            <Text
              style={{
                display: 'flex',
                width: 67.829,
                height: 12,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Inter',
                fontSize: 18,
                fontWeight: '400',
                lineHeight: 12,
                color: '#ffffff',
                letterSpacing: -0.24,
                position: 'absolute',
                top: 12,
                left: 167,
                textAlign: 'center',
                zIndex: 22,
              }}
              numberOfLines={1}
            >
              Min
            </Text>
          </View>
          <View
            style={{
              width: 322,
              height: 101,
              fontSize: 0,
              backgroundColor: '#f29353',
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
              position: 'relative',
              zIndex: 29,
              marginTop: 21,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 27,
            }}
          >
            <Text
              style={{
                display: 'flex',
                width: 91,
                height: 15.672,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Inter',
                fontSize: 18,
                fontWeight: '400',
                lineHeight: 15.672,
                color: '#ffffff',
                letterSpacing: -0.24,
                position: 'relative',
                textAlign: 'center',
                zIndex: 29,
                marginTop: 11.319,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 6,
              }}
              numberOfLines={1}
            >
              Average
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 173.273,
                height: 20.026,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Inter',
                fontSize: 36,
                fontWeight: '400',
                lineHeight: 20,
                color: '#ffffff',
                letterSpacing: -0.24,
                position: 'absolute',
                top: 50.5,
                left: 17,
                textAlign: 'center',
                zIndex: 27,
              }}
              numberOfLines={1}
            >
              7.4
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 131.011,
                height: 13.931,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Inter',
                fontSize: 18,
                fontWeight: '500',
                lineHeight: 13.931,
                color: '#ffffff',
                letterSpacing: -0.24,
                position: 'absolute',
                top: 53.983,
                left: 135,
                textAlign: 'center',
                zIndex: 28,
              }}
              numberOfLines={1}
            >
              mmol
            </Text>
          </View>
          <Text
            style={{
              display: 'flex',
              width: 30,
              height: 16,
              justifyContent: 'center',
              alignItems: 'flex-start',
              fontFamily: 'Signika',
              fontSize: 11,
              fontWeight: '400',
              lineHeight: 16,
              color: '#000000',
              letterSpacing: -0.24,
              position: 'absolute',
              top: 219,
              left: 37,
              textAlign: 'center',
              zIndex: 44,
            }}
            numberOfLines={1}
          >
            20.0+
          </Text>
          <View
            style={{
              width: '74.7%',
              height: '23.22%',
              position: 'absolute',
              top: '25.79%',
              left: '12%',
              zIndex: 51,
            }}
          >
            <View
              style={{
                width: 2,
                height: 192,
                backgroundColor: '#3d8d7a',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                position: 'absolute',
                top: 0,
                left: 27,
                zIndex: 51,
                transform: [{ rotate: '-90deg' }],
              }}
            />
            <ImageBackground
              style={{
                width: 238,
                height: 185,
                position: 'absolute',
                top: 6,
                left: 29,
                zIndex: 31,
              }}
              source={require('./assets/images/337770e5-34fc-456d-ba72-7f8b8ff0775e.png')}
              resizeMode='cover'
            >
              <ImageBackground
                style={{
                  width: 10,
                  height: 10,
                  position: 'relative',
                  zIndex: 53,
                  marginTop: 49,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 169,
                }}
                source={require('./assets/images/b70b7e01-9f83-449e-867f-df4865060466.png')}
                resizeMode='cover'
              />
              <ImageBackground
                style={{
                  width: 242.568,
                  height: 110.455,
                  position: 'relative',
                  zIndex: 32,
                  marginTop: -10.627,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 0.53,
                }}
                source={require('./assets/images/d1a34b0f-1e4c-4319-a95b-b04ec7d69669.png')}
                resizeMode='cover'
              >
                <ImageBackground
                  style={{
                    width: 10,
                    height: 10,
                    position: 'relative',
                    zIndex: 54,
                    marginTop: 53.627,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 102.475,
                  }}
                  source={require('./assets/images/3df35190-1846-4c90-a6c6-4d79afe97444.png')}
                  resizeMode='cover'
                />
                <ImageBackground
                  style={{
                    width: 10,
                    height: 10,
                    position: 'relative',
                    zIndex: 55,
                    marginTop: 15,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 39.475,
                  }}
                  source={require('./assets/images/d6363134-cb08-4bc7-9d58-01d982cc75b3.png')}
                  resizeMode='cover'
                />
              </ImageBackground>
            </ImageBackground>
            <Text
              style={{
                display: 'flex',
                width: 22,
                height: 18,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Signika',
                fontSize: 11,
                fontWeight: '400',
                lineHeight: 18,
                color: '#000000',
                letterSpacing: -0.24,
                position: 'absolute',
                top: 23,
                left: 0,
                textAlign: 'center',
                zIndex: 43,
              }}
              numberOfLines={1}
            >
              18.0
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 22,
                height: 18,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Signika',
                fontSize: 11,
                fontWeight: '400',
                lineHeight: 18,
                color: '#000000',
                letterSpacing: -0.24,
                position: 'absolute',
                top: 49,
                left: 0,
                textAlign: 'center',
                zIndex: 45,
              }}
              numberOfLines={1}
            >
              15.0
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 22,
                height: 18,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Signika',
                fontSize: 11,
                fontWeight: '400',
                lineHeight: 18,
                color: '#000000',
                letterSpacing: -0.24,
                position: 'absolute',
                top: 74,
                left: 0,
                textAlign: 'center',
                zIndex: 46,
              }}
              numberOfLines={1}
            >
              12.0
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 22,
                height: 18,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Signika',
                fontSize: 11,
                fontWeight: '400',
                lineHeight: 18,
                color: '#000000',
                letterSpacing: -0.24,
                position: 'absolute',
                top: 99,
                left: 0,
                textAlign: 'center',
                zIndex: 48,
              }}
              numberOfLines={1}
            >
              9.0
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 22,
                height: 18,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Signika',
                fontSize: 11,
                fontWeight: '400',
                lineHeight: 18,
                color: '#000000',
                letterSpacing: -0.24,
                position: 'absolute',
                top: 125,
                left: 0,
                textAlign: 'center',
                zIndex: 47,
              }}
              numberOfLines={1}
            >
              6.0
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 22,
                height: 18,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Signika',
                fontSize: 11,
                fontWeight: '400',
                lineHeight: 18,
                color: '#000000',
                letterSpacing: -0.24,
                position: 'absolute',
                top: 152,
                left: 0,
                textAlign: 'center',
                zIndex: 42,
              }}
              numberOfLines={1}
            >
              3.0
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 17,
                height: 18,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Signika',
                fontSize: 11,
                fontWeight: '400',
                lineHeight: 18,
                color: '#000000',
                letterSpacing: -0.24,
                position: 'absolute',
                top: 179,
                left: 5,
                textAlign: 'center',
                zIndex: 41,
              }}
              numberOfLines={1}
            >
              0
            </Text>
            <ImageBackground
              style={{
                width: '4.33%',
                height: '8.35%',
                position: 'absolute',
                top: '91.65%',
                left: '95.67%',
                zIndex: 49,
              }}
              source={require('./assets/images/a6cf9512-2cb1-458d-8ee2-3711ee18a9eb.png')}
            />
          </View>
          <View
            style={{
              width: 245,
              height: 2,
              backgroundColor: '#3d8d7a',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
              position: 'absolute',
              top: 411,
              left: 73,
              zIndex: 39,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
