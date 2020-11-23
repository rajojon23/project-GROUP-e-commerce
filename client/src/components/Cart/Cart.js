import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getStoreItemArray } from "../../reducers";


// import CartItem from './CartItem';
// import { getStoreItemArray } from "../../reducers";



const Cart = () => {

    const storeItems  = useSelector(getStoreItemArray);
    // const storeItems  = useSelector(getStoreItemArray);
    

    // let total = 0;

    // storeItems.forEach((item) =>{ 
    //     total+=item.price;
    // });

    // total = (total/100).toFixed(2);

  return (
    <Wrapper>
        
        <div className="homeLink"><NavLink to="/">Main</NavLink>/ Shopping Cart</div>

        <div className="cartTitle">Your Cart</div>

        <div className="table">

            <div className="tableHead"> 
            </div>
            <div className="tableMiddle">
                <div className="itemRow">
                        <div>
                            <div className="tableItemHead" style={{paddingLeft: 40}}>Product</div>
                        </div>
                        <div>
                            <div className="tableItemHead">Price</div>
                            <div className="itemPrice">
                        
                            </div>
                        </div>
                        <div>
                            <div className="tableItemHead">Quantity</div> 
                        </div>    
                        <div>
                            <div className="tableItemHead">Total Item Price</div>
                        </div>
                        <button className="buttonPrice" style={{visibility: 'hidden'}}>X</button>   
                </div>
                {/* divideer */}


                    {
                        
                        storeItems.map((item) => (
                            <div className="itemRow" >
                                    <div>
                                        <div className="itemHead itemAdded" style={{paddingLeft: 40}}>Product</div>
                                        <div className="itemContainer">
                                            <img className="itemImg" src={item.image} />
                                            <div className="itemDetails">
                                                <span>{item.name}</span>
                                                <span>For: wrist</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className="itemHead itemAdded">Price</div>
                                        <div className="itemPrice">
                                        <span>{item.price}</span>
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
                        ))


                    }

                   
            </div>
        </div>
        

        <div className="totalPurchase">
            <div className="total">Total: <span>$99</span></div>               
            <button>Purchase</button> 
        </div>    
        
    </Wrapper>
  );
};

const CartItem = () => {

   


};

const Wrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    
    .homeLink{
        color: gray;
    }
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

    .tableItemHead{
        padding-left: 40px;
        margin-top: 25px;
        color: gray;
    }
    .itemContainer{
        display: flex;
        flex-direction: row;
        padding: 20px;
        margin-top: -30px;
        width: 300px;
        // padding-left: 200px;

        img{
            width: 90px;
        }
    }

    .itemHead{
        margin-bottom: 40px;
        color: gray;
        margin-top: 25px;
        margin-left: 200px;
    }

    .itemAdded{
        visibility: hidden;
    }
    .itemDetails{
        display: flex;
        flex-direction: column;
        width: 55%;
        margin-left: 15px;
        font-size: 14px;
        justify-content: center;

    }

    select{
        height: 30px;
        align-self: center;
        border-radius: 0;
        padding: 3px;
        margin-left: 20px;
    }
    .totalItemPrice, .itemPrice {
        align-self: center;
        padding-top: 4px;
        margin-left: 20px;
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