import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from './LandingPage.js'
import LoginForm from './LoginForm.js'
import SignUpForm from './SignUpForm.js'
import Dashboard from './Dashboard.js'


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

  getResourcesForTypes = (type) => {
    let selectedType = this.state.types.find(c => (c.name=== type))
    let typeID = selectedType.id
    fetch(`${API_BASE_URL}/resources/types/${typeID}`)
      .then(response => response.json())
      .then((typeResources) => { this.setState({ typeResources }); });
  }

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
    this.getArticles();
    this.getResourcesForTypes();
    this.getUsers();
    if(localStorage["user"]){
      const user = JSON.parse(localStorage["user"]);
      this.setState({currentUser: user});
    }
  }

  render() {
    return (
    <main className='App'>
      <BrowserRouter>
        <Route exact path={'/'} component={LandingPage} />
        <Route path={'/login'} component={LoginForm} />
        <Route path={'/sign-up'} component={SignUpForm} />
        <Route path={'/dashboard'} render={(props) => <Dashboard {...props} handleArticleButton={this.handleArticleButton} users={this.state.users} resources={this.state.resources} searchterm={this.state.searchterm} currentUser={this.state.currentUser} types={this.state.types} handleSearchForm={this.handleSearchForm} handleFavoriteButton={this.handleFavoriteButton} clearUser={this.clearUser} currentresource={this.state.currentArticle} />} />
      </BrowserRouter>
    </main>
  );
}
}

export default App;