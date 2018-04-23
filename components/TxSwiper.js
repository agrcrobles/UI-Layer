import React, {Component} from 'react';
import Swiper from 'react-native-deck-swiper';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from 'react-native-button';
import originator from "../assets/origin.png";
import recipient from "../assets/recipient.png";

// import styles from '../assets/styles';
export default class TxSwiper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: this.props.transactions,
      swipedAllCards: false,
      swipeDirection: '',
      isSwipingBack: false,
      cardIndex: 0
    }
  }

  renderCard = card => {
    let data = card;
    let locationImage = data.tXLocation === 'recipient' ? recipient : originator;
    return (
      <View key={card.key} style={styles.card}>
                <Text style={styles.transRevTime}>{data.dTime}</Text>
                <Image style={{height: 30, width: 150, resizeMode: 'contain'}} />        
        {/* <View style={styles.container}>
                <Text style={styles.transReview}>Transaction Review</Text>

                <Image style={styles.assetLocationNoTopMargin} source={locationImage} />
                {/* {/* <Text style={styles.transRevName}>{transInfo.name}</Text> */}
                <Image style={styles.assetLocationNoTopMargin} source={locationImage} />
               
                <Text style={styles.editLabel}>EDI-T-SET:</Text>
                <Text style={styles.transRevTime}>{ediTName}</Text>
                <Text style={styles.transRevTime}>{ediTNum}</Text>
               
                <Image style={styles.thumb} source={{ uri: image }} />
                <Text style={styles.editLabel}>Document Name and Size</Text>
                <Text style={styles.transRevTime}>{doc}</Text>
                <Text style={styles.transRevTime}>{docSize} kb</Text>
                
                <View style={{ flex: 1 }}>
                    {list}
                </View>
                <TouchableHighlight onPress={() => this._sendTrans()}>
                    <Image source={submit} style={styles.assetLocationNoTopMargin} />
                </TouchableHighlight>
              */}
      </View>
    )
  };

  onSwipedAllCards = () => {
      console.log('Swiped all cards');
    this.setState({
      swipedAllCards: true
    })
  };

  swipeBack = () => {
    if (!this.state.isSwipingBack) {
      this.setIsSwipingBack(true, () => {
        this.swiper.swipeBack(() => {
          this.setIsSwipingBack(false)
        })
      })
    }
  };

  setIsSwipingBack = (isSwipingBack, cb) => {
    this.setState(
      {
        isSwipingBack: isSwipingBack
      },
      cb
    )
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

  render () {
    console.log(this.state.cards,'cards in swiper')
    return (
      <View style={styles.container}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwiped={this.onSwiped}
          onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={50}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          cardHorizontalMargin={0}
          stackSeparation={15}
          overlayLabels={{
            bottom: {
              title: 'BLEAH',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            },
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30
                }
              }
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30
                }
              }
            },
            top: {
              title: 'SUPER LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            }
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
        >
          <Button onPress={this.swipeLeft} title='Swipe Left' />
        </Swiper>
       </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'red',
    width: '90%',
    height: '90%',
    // justifyContent:'flex-end',
    // alignItems: 'center'
  },
  card: {
    // flex: 1,
    height: 400,
    width: 350,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    alignSelf: 'center',
    left: -20
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'transparent'
  },
  image: {
      resizeMode: 'contain',
      height: 50,
      width: 50,
      borderRadius: 25,
  },
  done: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    backgroundColor: 'transparent'
  },
  transReview: {
    color: '#f3c736',
    alignSelf: 'center',
    fontSize: 20.2,
    fontWeight: "600",
    fontFamily: 'dinPro',
},
transRevName: {
    fontFamily: 'dinPro',
    fontSize: 16,
    color: 'white',
    margin: 2,
    textAlign: 'left'

},
transRevTime: {
    color: '#f3c736',
    fontSize: 16,
    fontFamily: 'dinPro',
    textAlign: 'center'
},
})