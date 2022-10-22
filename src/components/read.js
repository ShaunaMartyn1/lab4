import React from "react";
import {Books} from './books';
import axios from "axios";

export class Read extends React.Component{

    /* reads in data from URL and not from array  */
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
        .then((response)=> {
            this.setState({
                books:response.data
            })
        })
        .catch((error)=>{
            console.log(error);/*log errors to console*/
        });
    }
    /* Empty array of books  */
    state = {
        books:[]
            
    }

     /*Use Render function to display HTML code */
    render()
    {
        return(
            <div>
                <h3>Hello from Read Component</h3>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}
