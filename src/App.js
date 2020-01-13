import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from './LandingPage.js'
import LoginForm from './LoginForm.js'
import SignUpForm from './SignUpForm.js'
import Dashboard from './Dashboard.js'
import { API_BASE_URL } from './config'


export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      resources: [],
      types: [],
      resourcesForTypes: [],
      typeResources: [],
      searchterm: '',
      searchArticles: [],
      currentUser: {},
      users: [],
      currentArticle:{}
    };
  }



clearUser = () => {
  this.setState({currentUser:{}});
  localStorage["user"]= 'null';
}


  handleFavoriteButton = (article) => {
    article.favorite = !article.favorite;
    this.setState({
      articles: this.state.articles
    });
  }

  handleArticleButton = (article_id) => {
    let articleId = article_id
    let articles = this.state.articles
    let article = (articles.find(a => (a.id == articleId)))
    console.log(article);
    this.setState({ currentArticle: article });
  }

  handleSearchForm = (event) => {
    event.preventDefault();
    const term = event.currentTarget.searchTerm.value;
    this.setState({
      searchterm: term
    });
  }

  onLoginSuccess = (username) => {
    console.log(username);
    fetch(`${API_BASE_URL}/users/${username}`)
      .then(response => response.json())
      .then((currentUser) => { 
        this.setState({ currentUser }); 
        localStorage["user"]= JSON.stringify(currentUser)
     });
  }

/*   getResourcesForTypes = () => {
    fetch(`${API_BASE_URL}/resourcesTypes/`)
      .then(response => response.json())
      .then((typeResources) => { this.setState({ typeResources }); });
  } */

  getResources() {
    fetch(`${API_BASE_URL}/resources`)
      .then(response => response.json())
      .then((resources) => { this.setState({ resources }); });
  }
    getTypes() {
       fetch(`${API_BASE_URL}/types`)
      .then(response => response.json())
      .then((types) => { this.setState({ types }); });
  }

  getUsers() {
    fetch(`${API_BASE_URL}/users`)
   .then(response => response.json())
   .then((users) => { this.setState({ users }); });
}

  componentDidMount() {
    this.getResources();
    this.getTypes();
    this.getUsers();
    if(localStorage["user"]){
      const user = JSON.parse(localStorage["user"]);
      this.setState({currentUser: user});
    }
  }

  render() {
    console.log(this.state.types);
    console.log(this.state.resources);
    console.log(this.state.types);
    return (
    <main className='App'>
      <BrowserRouter>
        <Route exact path={'/'} component={LandingPage} />
        <Route path={'/login'} component={LoginForm} />
        <Route path={'/sign-up'} component={SignUpForm} />
        <Route path={'/dashboard'} render={(props) => <Dashboard {...props} handleArticleButton={this.handleArticleButton} users={this.state.users} resources={this.state.resources} types={this.state.types} searchterm={this.state.searchterm} currentUser={this.state.currentUser} types={this.state.types} handleSearchForm={this.handleSearchForm} handleFavoriteButton={this.handleFavoriteButton} clearUser={this.clearUser} currentresource={this.state.currentArticle} />} />
      </BrowserRouter>
    </main>
  );
}
}
