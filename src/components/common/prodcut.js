import React from 'react'
import {Link} from 'react-router-dom'

export default class Product extends React.Component{
	constructor(props){
		super(props);
		this.state = {
            Items: [{
              img :'images/s1.jpg',
              name :'Product Name',
              price : '$500'
            },
            {
              img :'images/s2.jpg',
              name :'Product Name',
              price : '$500'
            },
            {
              img :'images/s3.jpg',
              name :'Product Name',
              price : '$500'
            },
            {
              img :'images/s4.jpg',
              name :'Product Name',
              price : '$500'
            },
            {
              img :'images/s5.jpg',
              name :'Product Name',
              price : '$500'
            },
            {
              img :'images/s6.jpg',
              name :'Product Name',
              price : '$500'
            },
            {
              img :'images/s7.jpg',
              name :'Product Name',
              price : '$500'
            },
            {
              img :'images/s8.jpg',
              name :'Product Name',
              price : '$500'
            },
             {
              img :'images/s5.jpg',
              name :'Product Name',
              price : '$500'
            },
            {
              img :'images/s6.jpg',
              name :'Product Name',
              price : '$500'
            },
            {
              img :'images/s7.jpg',
              name :'Product Name',
              price : '$500'
            },
            {
              img :'images/s8.jpg',
              name :'Product Name',
              price : '$500'
            }
          ]
        }
	}
	render(){
		return(
				<div className="product-box">
					<div className="row">
						{
							this.state.Items.map(function(Items,index){
								return <NewItems key={index} item={Items} />
							})
						}
					</div>
				</div>
			)
	}
}

class NewItems extends React.Component{
	render(){
		return(
			<div className="col-md-3 mb-4">
				<div className="inner-product border">
					<img src={this.props.item.img} className="img-fluid"/>
			<p>{this.props.item.name}</p>
			<Link to="/" className="price">{this.props.item.price}</Link>
      <Link to="/" className="quick-view">quick view </Link>
				</div>
			</div>
			)
	}
}

   
        

