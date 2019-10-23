import React , {Component} from 'react'
import {ReactiveBase, CategorySearch, SingleRange, ResultCard, ReactiveList } from '@appbaseio/reactivesearch'

export default class search extends Component{
    render(){
        return(
            <div>
            <ReactiveBase
            app="myevents"
            credentials="4HWI27QmA:58c731f7-79ab-4f55-a590-7e15c7e36721"
            >
        <CategorySearch
            componentId="searchbox"
            dataField="model"
            categoryField="brand.keyword"
            placeholder="Search MyEvents"
        />
        <SingleRange
            componentId="ratingsfilter"
            title="Filter by ratings"
            dataField="rating"
            data={[
                {"start": "4", "end": "5", "label": "4 stars and up"},
                {"start": "3", "end": "5", "label": "3 stars and up"},
                {"start": "2", "end": "5", "label": "2 stars and up"},
                {"start": "1", "end": "5", "label": "see all ratings"},
            ]}
            defaultValue="4 stars and up"
        />
        <ReactiveList
            componentId="result"
            title="Results"
            dataField="model"
            from={0}
            size={5}
            pagination={true}
            react={{
                and: ["searchbox", "ratingsfilter"]
            }}
            renderItem={({ data }) => (
                <ReactiveList.ResultCardWrapper>
                    {
                        data.map(item => (
                            <ResultCard key={item._id}>
                                <ResultCard.Image 
                                    src='https://bit.do/demoimg'
                                />
                                <ResultCard.Title 
                                    dangerouslySetInnerHTML={{ 
                                        __html: item.model 
                                    }} 
                                />
                                <ResultCard.Description>
                                    {item.brand + " " + "*".repeat(item.rating)}
                                </ResultCard.Description>
                            </ResultCard>
                        ))
                    }
                </ReactiveList.ResultCardWrapper>
            )}
        />
    </ReactiveBase>
    </div>
        )
    }
}


