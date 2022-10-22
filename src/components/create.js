import { render } from "@testing-library/react";
import React from "react";

export class Create extends React.Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this); /*Have to bind them or it wont work*/
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);

        this.state = {
            title:'',
            cover:'', 
            author:''
        }
        
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(`${this.state.title},
        ${this.state.cover}, 
        ${this.state.author}`)
    }
    onChangeBookTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    onChangeBookAuthor(e){
        this.setState({
            author:e.target.value
        })
    }
    onChangeBookCover(e){
        this.setState({
            cover:e.target.value
           
        })
    }

    render(){
        return(
            <div>
            /*Use forms to add structure*/
                <h3>Hello from Create Component</h3>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChangeBookTitle}
                    />
            </div>
            <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text"
                    className="form-control"
                    value={this.state.author}
                    onChange={this.onChangeBookAuthor}
                    />
            </div>

            <div className="form-group">
                    <label>Add Book Cover: </label>
                    <input type="text"
                    className="form-control"
                    value={this.state.cover}
                    onChange={this.onChangeBookCover}
                    />
            </div>

                
                <input type="submit" value="Add Book" /> 
                </form>
            </div>
        );
    }
}
