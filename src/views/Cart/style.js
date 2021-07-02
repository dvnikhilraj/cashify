import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    ProductsSection :{
      marginHorizontal : 12,
    },
    selectedFilter :{
      borderRadius: 3,
      backgroundColor: 'white',
      elevation: 2,
      shadowColor: '#000',
      shadowOpacity: 0.4,
      color: '#66cdaa',
      borderColor :'#66cdaa',
      borderWidth : 1,
      marginHorizontal :1,
    },
    productImageContainer:{
      marginLeft: 5, 
      marginTop: 5,
      alignItems :'center',
      justifyContent : 'center'
    },
    LineItemContainer:{
        marginHorizontal : 10,
        marginVertical : 5,
        justifyContent :'center',
        alignItems : 'center',
        borderRadius: 5,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: '#fff',     
    },    
    productsImage: {
      width: 90,
      height: 100,
      borderRadius: 5,
     
    },
    gradeText: {
      color: '#66cdaa',
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'left',
      borderWidth: 1,
      alignSelf: 'flex-start',
      paddingHorizontal: 6,
      borderRadius: 3,
      backgroundColor: '#f0f8ff',
      elevation: 2,
      shadowColor: '#000',
      shadowOpacity: 0.4,
      shadowRadius: 3,
      marginHorizontal : 5,
      marginVertical : 5,
      borderColor: 'lightgrey',
      backgroundColor : 'white'
    },
    RemoveSection :{
        flex :1,
        padding : 8,
    },
    LineItemSection:{
        flex : 1,
        padding :8,
        justifyContent :'center',
        alignItems : 'center',
        flexDirection : 'row',
        marginVertical : 3,
        borderBottomWidth: 1,
        borderColor : '#F4F4F4',
        borderRadius : 1,
    },
    RemoveText:{
        textAlign : 'center',
        textDecorationLine : 'underline',
        color : '#1877F2',
        fontSize : 16,
    },
    ApplyCouponText : {
        textAlign : 'right',
        marginRight : 10,
        // alignSelf: 'stretch',
        // textDecorationLine : 'underline',
        color : '#1877F2',
        fontSize : 16,
    },
    LineItemInformation:{
        flex : 4,
    },
    LineItemImage:{
        flex : 2,
        justifyContent :'center',
        alignItems : 'center'
    },
    productsTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'left',
      color: 'black',
      paddingBottom:4,
      marginHorizontal :5,
      fontFamily : 'OpenSans-Bold'
  },
  ProductListingContainer :{
    backgroundColor : "#F4F4F4",
    marginHorizontal : 5,
  },
  CouponSection:{
    flex : 3,
  },
  CartTotalContainer:{
    margin : 10,
    borderRadius: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: '#fff',
    padding : 10,
    flex : 1, 
    flexDirection : 'column',
  },
  totalBlock:{
    flex : 1,
    flexDirection : 'row'
  },
  totalTextBlock:{
    flex : 5,
    padding : 5,
    paddingVertical : 10,
  },
  totalPriceBlock:{
    flex : 1,
    padding : 5,
    textAlign : 'right',
    alignSelf : 'flex-end',
    paddingVertical : 10,
  },
  CartContainer:{
    margin : 10,
    justifyContent :'center',
    alignItems : 'center',
    borderRadius: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: '#fff',
    padding : 10,
    flex : 1, 
    flexDirection : 'row',
  },
  qtyInput: {
    borderWidth: 1,
    width:50,
    height: 25,
    paddingVertical: 0,
    color : 'black',
    marginHorizontal : 15,
    marginTop: 5,
    borderColor :'#D3D3D3',
    textAlign : 'center',
    fontWeight :'bold',
    fontSize : 14
  },
  boldText:{
    fontWeight : 'bold'
  },    
  InputContainer :{
    flex : 6, 
    flexDirection : 'row',
    alignItems:'center'
   },
   RefunPolicyContainer:{
    //    margin : 10,
       marginBottom : 10,
       marginHorizontal : 25,
   },
   RefundText : {
       fontSize : 12,
       color : 'darkgrey'
   },
   RefundLink : {
    textDecorationLine : 'underline',
    color : '#1877F2',
   },
   addToCartButton:{
    // height : 45,
    // borderColor : '#1877F2',
    // backgroundColor : '#ffff',
    // borderWidth : 1,
    fontWeight :'bold',
    textAlign : "left",
    paddingLeft : 20,
    // borderRadius : 5,
    // marginLeft : 5,
    fontSize : 18,
    borderTopRightRadius : 0,
    borderBottomRightRadius : 0,
  },
  buyButton :{
    // height : 45,
    marginRight :10,
    backgroundColor : '#1877F2',
    borderWidth : 1,
    textAlign : "center",
    borderRadius : 5,
    // borderTopLeftRadius : 0,
    // borderBottomLeftRadius : 0,
    // marginRight : 5,
    borderColor : '#1877F2',
  },
  StaticFooter:{
    flexDirection : 'row',
    backgroundColor : "white",
    // height : 40,
    marginVertical : 5,
    alignItems : 'center'
  },
  StaticFooterContainer : {
      backgroundColor : 'white',
    //   marginBottom : 10, 
      marginHorizontal : 15,
      borderRadius : 5,
      borderWidth : 1,
      borderColor : "white",
        marginBottom : 15,
    }
});  
export default styles;