import React, { Component } from 'react'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import ShopData from './shop.data.js';

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: ShopData
        }
    }
    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherSectionProps}) => <CollectionPreview key={id} {...otherSectionProps} />
                    )  
                }
            </div>
        )
    }
}

export default ShopPage;