import React from 'react';
import styled from 'styled-components';
// import CartItem from './CartItem';
// import { getStoreItemArray } from "../../reducers";



const Cart = () => {
    // const storeItems  = useSelector(getStoreItemArray);
    

    // let total = 0;

    // storeItems.forEach((item) =>{ 
    //     total+=item.price;
    // });

    // total = (total/100).toFixed(2);

  return (
    <Wrapper>
        <div className="subtitle">Main/ Shopping Cart</div>

        <div className="cartTitle">Your Cart</div>

        <div className="table">

            <div className="tableHead"> 
            </div>
            <div className="tableMiddle">
                <div className="itemRow">
                        <div>
                            <div className="itemHead" style={{paddingLeft: 40}}>Product</div>
                            <div class="itemContainer">
                                <img className="itemImg" src="https://d2fn6rbs5rhk8j.cloudfront.net/wp-content/uploads/2018/12/fashion-unisex-watch-rose-gold-black-dial-timepiece-direct-watch-manufacturer-by-3watches.com-3w-ct01-13.jpg" />
                                <div className="itemDetails">
                                    <span>Garmin Vivofita,, Fitness Band</span>
                                    <span>For: wrist</span>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="itemHead">Size</div>
                            <select>
                                <option>XL</option>
                                <option>XXL</option>
                                <option>XS</option>
                                <option>S</option>
                            </select>
                        </div>
                        <div>
                            <div className="itemHead">Price</div>
                            <div className="itemPrice">
                            $<span>50.00</span>
                            </div>
                        </div>
                        <div>
                        <div className="itemHead">Quantity</div>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>  
                        </div>
                        <div>
                            <div className="itemHead">Total Item Price</div>
                            <div className="totalItemPrice">
                            $<span>100.00</span>
                            </div>    
                            
                        </div>
                        <button className="buttonPrice">X</button>   
                </div>
                {/* divideer */}
                    <div className="itemRow" >
                        <div>
                            <div className="itemHead itemAdded" style={{paddingLeft: 40}}>Product</div>
                            <div class="itemContainer">
                                <img className="itemImg" src="https://d2fn6rbs5rhk8j.cloudfront.net/wp-content/uploads/2018/12/fashion-unisex-watch-rose-gold-black-dial-timepiece-direct-watch-manufacturer-by-3watches.com-3w-ct01-13.jpg" />
                                <div className="itemDetails">
                                    <span>Garmin Vivofita,, Fitness Band</span>
                                    <span>For: wrist</span>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="itemHead itemAdded">Size</div>
                            <select>
                                <option>XL</option>
                                <option>XXL</option>
                                <option>XS</option>
                                <option>S</option>
                            </select>
                        </div>
                        <div>
                            <div className="itemHead itemAdded">Price</div>
                            <div className="itemPrice">
                            $<span>50.00</span>
                            </div>
                        </div>
                        <div>
                        <div className="itemHead itemAdded">Quantity</div>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>  
                        </div>
                        <div>
                            <div className="itemHead itemAdded">Total Item Price</div>
                            <div className="totalItemPrice">
                            $<span>100.00</span>
                            </div>    
                            
                        </div>
                        <button className="buttonPrice">X</button>   
                </div>

                   
            </div>
        </div>
        

        <div className="totalPurchase">
            <div className="total">Total: <span>$99</span></div>               
            <button>Purchase</button> 
        </div>    
        
    </Wrapper>
  );
};

const Wrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    

    .subtitle{
        margin: 10px 0 10px 0px;
        padding-left: 30px;
        color: gray;
        
    }

    .cartTitle{
        font-size: 40px;
        margin: 40px 0 40px 40px;
    }



    .tableHead{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        color: gray;
        border-bottom: 1px solid gray;
        margin: 0 55px 0 55px;
        margin-bottom: -23px;
    }

    .itemRow{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: -25px;
    }
    .tableMiddle{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 0 55px 0 55px;
    }
    .itemContainer{
        display: flex;
        flex-direction: row;
        padding: 20px;
        margin-top: -30px;

        img{
            width: 90px;
        }
    }

    .itemHead{
        margin-bottom: 40px;
        color: gray;
    }

    .itemAdded{
        visibility: hidden;
    }
    .itemDetails{
        display: flex;
        flex-direction: column;
        width: 35%;
        font-size: 14px;
        justify-content: center;
    }

    select{
        height: 30px;
        align-self: center;
        border-radius: 0;
        padding: 3px;
    }
    .totalItemPrice, .itemPrice {
        align-self: center;
        padding-top: 4px;
    }
    .buttonPrice{
        height: 30px;
        align-self: center;
    }

    .totalPurchase{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-top: 110px;
        margin-right: 55px;


        .total{
            margin-right: 20px;
            font-weight: bold;
        }
        button{
            border: none;
            color: #fff;
            background-color: #000;
            border: 1px solid #000;
            padding: 15px;
            font-size: 15px;
            cursor: pointer;
            margin-top: -10px;
        }

        button:hover {
            color: #000 ;
            background-color:#fff ;
            border: 1px solid #000;
        }

    }

    .buttonPrice{
        border: none;
        font-weight: bold;
        font-size: 20px;
        background: none;
        cursor: pointer;
    }
    
`;


export default Cart;