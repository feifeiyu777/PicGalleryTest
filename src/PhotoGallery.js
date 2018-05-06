import React, { Component } from 'react';
import './App.css';

class PhotoGallery extends React.Component
{
    constructor(props)
    {
        super(props);
        this._handleImageFailedLoading = this._handleImageFailedLoading.bind(this);
        this._onclickHandler = this._onclickHandler.bind(this);
        this._showPopup = this._showPopupHandler.bind(this);

        this.state ={
            imageUrl: this.props.imageUrl,
            imgList: this.props.imgList,
            services: String,
        };
    }

    _handleImageFailedLoading()
    {
        this.setState({
            imageUrl: this.props.defaultImg
        });
    }

    componentDidMount()
    {
        //call google map API to retrieve data and render in below div
        const xhr = new XMLHttpRequest();
        xhr.open("Get", "http://maps.googleapis.com/maps/api/geocode/json?address=bellevue", true);
        xhr.send();

        xhr.onreadystatechange=()=>{
            if(xhr.readyState === XMLHttpRequest.DONE)
            {
                if(xhr.status === 200)
                {
                    let gotServices = JSON.parse(xhr.responseText);
                    this.setState({
                        services: JSON.stringify(gotServices.results[0].address_components[0])
                    })
                }
            }
            else
            {
                //alert("ajax request failure!");
            }
        }
    }
    
    _showPopupHandler()
    {
        var divElement = document.getElementById("testOverlay");
        if(divElement && divElement.style.display === "none")
        {
            divElement.style.display ="";
        }
        else if(divElement && divElement.style.display === "")
        {
            divElement.style.display ="none";
        }
    }
   
    //image in click handler
    _onclickHandler()
    {
        
        alert("Hello, I am been clicked! My url is " + this.props.imageUrl);
    }

    render(){
        const imgArr = this.props.imgList;
        const imgContainers = [];

        this.props.imgList.forEach(function(item, index, array) {
            imgContainers.push(
                    <div style={{backgroundColor: "lightblue", marginTop: "10px"}}>
                        <div>
                            <h1>{item.caption}</h1>
                        </div>
                        <img style={{width: "100%"}}
                         src={item.url}
                         onClick={this._onclickHandler}           
                         onError={this._handleImageFailedLoading}
                     />
                     </div>);
          },this);

        return(
           <div>               
               <a href="#" onClick={this._showPopup} >Click here to Open popup</a> 
               <div>
                   <h1>This message is from google map API</h1>
                    <div style={{backgroundColor: "yellow"}}>
                        <p>{this.state.services}</p>
                    </div>
                </div>
                <div>
                    {imgContainers}
                </div>
                <div id="testOverlay" style={{position: "absolute", height: "100%", width:"100%", opacity:"0.5", backgroundColor:"pink", top:"0", left:"100"
                , width:"300px", height: "200px", display:"none", alignItems:"center", justifyContent:"center" }}>
                    This is overlay Div</div>
            </div>
        )
    }
}

export default PhotoGallery;

