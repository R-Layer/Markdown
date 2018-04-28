import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import './index.css';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            counter:0
        }
        this.handleChange = this.handleChange.bind(this);

        this.buttons =[];
    }

    createMarkup(text) {
        let rawMarkup = marked(text, { sanitize: true });
        return { __html: rawMarkup || "Watch your text being formatted!" };
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }


    render() {
        return (
            <div>           
                <EmbeddedArticle  htmlValue={this.createMarkup(this.state.value)} />
                <EmbeddedTextarea handler={this.handleChange} value={this.state.value} />
                <Contacts />
            </div>
        )
    }
}


class EmbeddedArticle extends React.Component {

    render() {
        return (
            <article dangerouslySetInnerHTML={this.props.htmlValue} /> 
    )
    }
};

class EmbeddedTextarea extends React.Component {

    render() {
        return (            
            <textarea onChange={this.props.handler} value={this.props.value} placeholder={'Type some text with markdown...'}/>    
    )
    }
    
};

class Contacts extends React.Component {
    render() {
        return (
        <span> <a href={"https://daringfireball.net/projects/markdown/syntax"}>Daring Fireball - Documentation</a></span>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));



// THREE CLASS USED TO RENDER A SIDEBAR LEGEND - BAD APPEARENCE -

/* class OpenButton extends React.Component {

   render () 
    {
        return (<label onClick={this.props.clicked}>{this.props.open?">":"<"}
                </label>)
    }

} */

/* class SidePane extends React.Component {

    constructor(props) 
    {
        super(props);
        this.state = 
        {
            open: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        })
    }

    render () {
        
        return (<aside className={this.state.open?"open":"closed"}>
                <OpenButton clicked={this.handleClick} open={this.state.open}/>
                    {this.state.open?"close":"legend"} 
                    <section>
                        {this.state.open && <LegendTable />}
                    </section>
                </aside>)
    }
} */


/* class LegendTable extends React.Component {
    render() {
        return  (
            <table>
            <tr>
            <th>MarkDown Syntax</th>
            <th>HTML Translation</th>
            </tr>
            <tr>
                <td>"  " (two spaces) + Enter </td>
                <td> {"<br />"} </td>
            </tr>
            <tr>
                <td> # Header </td>
                <td> {"<h1> Header </h1>"} </td>
            </tr>
            <tr>
                <td> ###### Header </td>
                <td> {"<h6> Header </h6>"} </td>
            </tr>
            <tr>
                <td> > quote</td>
                <td> {"<blockquote>quote</blockquote>"} </td>
            </tr>
            <tr>
                <td> * Element x <br/>
                     - Element y <br/>
                     + Element z <br/>
                </td>
                <td>
                     {"<ul>"}<br/><pre>&nbsp;{" <li>Element x </li>"} </pre><pre>&nbsp;{" <li>Element y </li>"} </pre><pre>&nbsp;{" <li>Element z </li>"} </pre>  {"</ul>"}
                </td>
            </tr>
            <tr>
                <td> 1. Element x <br/>
                     2. Element y <br/>
                     3. Element z <br/>
                </td>
                <td> 
                {"<ol>"}<br/><pre>&nbsp;{" <li>Element x </li>"} </pre><pre>&nbsp;{" <li>Element y </li>"} </pre><pre>&nbsp;{" <li>Element z </li>"} </pre>  {"</ol>"}
                </td>
            </tr>
            <tr>
                <td> [link](www.test.com) </td>
                <td> {"<p><a href='www.test.com'> Link </a><p>"} </td>
            </tr>
            <tr>
                <td> ![failure-text](www.image.jpg) </td>
                <td> {"<img src=www.image.jpg alt=failure-text />"} </td>
            </tr>
            <tr>
                <td> *bold text* </td>
                <td> {"<em> bold text <em>"} </td>
            </tr>
                <tr>
                <td> **bold text** </td>
            <td> {"<strong> bold text </strong>"} </td>
            </tr>
            <tr>
                <td> ``const test = 35`` </td>
                <td> {"<code> const test = 35 </code>"} </td>
            </tr>
        </table>)
    }
} */