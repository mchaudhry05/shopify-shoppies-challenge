(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n(1),a=n.n(o),i=n(17),r=n.n(i),c=(n(24),n(8)),l=n(2),m=n(3),u=n(5),d=n(4),h=(n(25),n(26),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("div",{className:"logo-name-div",children:Object(s.jsx)("h1",{className:"logo-name",children:"THE SHOPPIES"})}),Object(s.jsxs)("div",{className:"nomination-view",children:[Object(s.jsx)("h2",{className:"nomination-text",onClick:this.props.showNominations,children:"NOMINATIONS"}),Object(s.jsx)("img",{className:"logo-image",src:"images/shopify-logo.png",onClick:this.props.showNominations,alt:"Offical Sponsor"}),Object(s.jsx)("div",{className:"circle",children:this.props.nominatedMovieslength})]})]})}}]),n}(o.Component)),v=(n(27),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"banner",children:Object(s.jsx)("h4",{className:"banner-message",children:"YOU HAVE NOMINATED THE MAXIMUM AMOUNT OF MOVIES!"})})}}]),n}(o.Component)),p=n(18),j=n.n(p),b=(n(46),"https://www.omdbapi.com/"),g="1999d2f8",O="type=movie",f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={userSearch:""},e.updateResults=function(e){e.preventDefault()},e.updateUserSearch=function(t){var n=t.target.value.trim();""!==n&&" "!==n&&(e.setState({userSearch:t.target.value.trim()}),e.props.resetCurrentPage(),e.getMovies())},e.getMovies=function(){j.a.get("".concat(b,"?apikey=").concat(g,"&").concat(O,"&s=").concat(e.state.userSearch,"&page=").concat(e.props.page)).then((function(t){var n=t.data;console.log(n),n.Error?(e.props.updateErrorMessage(n.Error),e.props.updateMovies([],e.state.userSearch)):(e.props.getTotalResults(n.totalResults),e.props.updateMovies(n.Search,e.state.userSearch))}))},e}return Object(m.a)(n,[{key:"componentDidUpdate",value:function(e){e.page!==this.props.page&&this.getMovies()}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"searchBar",children:Object(s.jsx)("form",{onSubmit:this.updateResults,children:Object(s.jsx)("input",{className:"search-bar",type:"text",name:"search",onChange:this.updateUserSearch,placeholder:"Search for a Movie"})})})}}]),n}(o.Component),N=(n(47),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).checkIfMovieNominated=function(t){for(var n=0;n<e.props.nominatedMovies.length;n++)if(e.props.nominatedMovies[n][0]===t)return!0;return!1},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.props.movies,n={backgroundColor:"#3C333C",borderColor:"#3C333C",color:"white"};return Object(s.jsx)("div",{className:"results",children:t.length>0?Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"movie-list",children:[Object(s.jsxs)("h1",{className:"results-message",children:['Results for "',this.props.userSearch,'"']}),Object(s.jsx)("br",{}),t.map((function(t){return Object(s.jsxs)("div",{className:"movie-item",children:[Object(s.jsx)("img",{className:"movie-poster",src:t.Poster,alt:t.Title},t.Poster),Object(s.jsxs)("h2",{className:"movie-name",children:[t.Title," (",t.Year,")"]},t.imdbID),Object(s.jsx)("button",{style:e.checkIfMovieNominated(t.imdbID)?n:null,id:t.imdbID,className:"movie-button",onClick:function(n){return e.props.nominateMovie(t.imdbID,t.Title,t.Year,t.Poster)},children:"Nominate"},t.Title)]})}))]}),Object(s.jsxs)("div",{className:"buttons",children:[Object(s.jsx)("button",{className:1===this.props.currentPage?"disable":"prev-next-button",onClick:function(t){return e.props.prevPage()},children:"Previous"}),Object(s.jsx)("button",{className:this.props.currentPage===this.props.totalPages?"disable":"prev-next-button",onClick:function(t){return e.props.nextPage()},children:"Next"})]})]}):Object(s.jsx)("h1",{className:"error-messages",children:this.props.errorMessage?this.props.errorMessage+" Please try again!":null})})}}]),n}(o.Component)),x=(n(48),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={movieRemoved:""},e.removeMovie=function(t,n,s){e.setState({movieRemoved:n}),e.props.removeMovie(t,n,s),setTimeout((function(){e.setState({movieRemoved:""})}),5e3)},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.props.nominatedMovies;return Object(s.jsx)("div",{className:"nominations",children:Object(s.jsxs)("div",{className:"nominations-container",children:[Object(s.jsx)("h1",{className:"nominated-section-heading",children:"YOUR NOMINATIONS"}),this.state.movieRemoved&&Object(s.jsxs)("h2",{className:"remove-notification",children:["You removed ",this.state.movieRemoved,"!"]}),Object(s.jsx)("div",{className:"nominated-movie-list",children:t.map((function(t){return Object(s.jsxs)("div",{className:"nominated-movie-item",children:[Object(s.jsx)("img",{src:t[3],alt:t[3]}),Object(s.jsxs)("h4",{className:"nominated-movies-details",children:[t[1]," (",t[2],")"]},t),Object(s.jsx)("button",{id:t[1],className:"remove-button",onClick:function(n){return e.removeMovie(t[0],t[1],t[2])},children:"Remove"},t[0])]})}))}),Object(s.jsx)("button",{className:"nominated-close-button",onClick:this.props.showNominationsComponent,children:"Close"})]})})}}]),n}(o.Component)),M=(n(49),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"addedNominations",children:Object(s.jsxs)("div",{className:"nominationsContainer",children:[Object(s.jsx)("div",{className:"sucessful-message",children:Object(s.jsx)("h1",{className:"successful",children:"SUCCESSFULLY NOMINATED!"})}),Object(s.jsxs)("div",{className:"movie-container",children:[Object(s.jsx)("div",{className:"image-contianer",children:Object(s.jsx)("img",{src:this.props.recentlyNominated[2],alt:this.props.movieName})}),Object(s.jsxs)("div",{className:"movie-details",children:[Object(s.jsx)("h2",{children:this.props.recentlyNominated[0]}),Object(s.jsx)("h3",{children:this.props.recentlyNominated[1]}),Object(s.jsx)("button",{className:"close-button",onClick:this.props.closeNominationConfirmation,children:"Close"})]})]})]})})}}]),n}(o.Component)),y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={movies:[],nominatedMovies:[],userSearch:"",errorMessage:"",showNominations:!1,maxmimumNominationsReached:!1,recentlyNominated:[],totalPages:0,currentPage:1},e.showNominationsComponent=function(){e.setState((function(e){return{showNominations:!e.showNominations}}))},e.nominationConfirmation=function(){document.getElementsByClassName("addedNominations")[0].style.display="block"},e.closeNominationConfirmation=function(){document.getElementsByClassName("addedNominations")[0].style.display="none"},e.nominateMovie=function(t,n,s,o){if(5===e.state.nominatedMovies.length)e.setState({maxmimumNominationsReached:!0}),setTimeout((function(){e.setState({maxmimumNominationsReached:!1})}),3e3);else{var a=Object(c.a)(e.state.nominatedMovies);a.push([t,n,s,o]),e.setState({nominatedMovies:a,recentlyNominated:[n,s,o]}),e.disableButton(t),localStorage.removeItem("nominatedMovies"),localStorage.setItem("nominatedMovies",JSON.stringify(a)),e.nominationConfirmation()}},e.removeMovie=function(t,n,s){for(var o=Object(c.a)(e.state.nominatedMovies),a=-1,i=0;i<o.length;i++)if(o[i][0]===t){a=i;break}o.splice(a,1),e.setState({nominatedMovies:o}),e.enableButton(t),localStorage.removeItem("nominatedMovies"),localStorage.setItem("nominatedMovies",JSON.stringify(o))},e.disableButton=function(e){document.getElementById(e)&&(document.getElementById(e).disabled=!0,document.getElementById(e).style.backgroundColor="#3C333C",document.getElementById(e).style.borderColor="#3C333C",document.getElementById(e).style.color="white")},e.enableButton=function(e){document.getElementById(e)&&(document.getElementById(e).disabled=!1,document.getElementById(e).style.backgroundColor="#C4994D",document.getElementById(e).style.borderColor="#C4994D",document.getElementById(e).style.color="#070605")},e.getTotalResults=function(t){var n=parseInt(t),s=n%10,o=n-s+(s+(10-s));e.setState({totalPages:o/10})},e.updateMovies=function(t,n){e.setState({movies:t,userSearch:n})},e.updateErrorMessage=function(t){e.setState({errorMessage:t})},e.nextPage=function(){e.state.currentPage+1<=e.state.totalPages&&e.setState((function(e){return{currentPage:e.currentPage+1}}))},e.prevPage=function(){e.state.currentPage-1>0&&e.setState((function(e){return{currentPage:e.currentPage-1}}))},e.resetCurrentPage=function(){e.setState({currentPage:1})},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){localStorage.getItem("nominatedMovies")?this.setState({nominatedMovies:JSON.parse(localStorage.getItem("nominatedMovies"))}):localStorage.setItem("nominatedMovies",JSON.stringify([]))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(h,{showNominations:this.showNominationsComponent,nominatedMovieslength:this.state.nominatedMovies.length}),this.state.maxmimumNominationsReached&&Object(s.jsx)(v,{}),Object(s.jsx)(f,{updateMovies:this.updateMovies,updateErrorMessage:this.updateErrorMessage,getTotalResults:this.getTotalResults,page:this.state.currentPage,resetCurrentPage:this.resetCurrentPage}),Object(s.jsx)(N,{movies:this.state.movies,userSearch:this.state.userSearch,nominateMovie:this.nominateMovie,errorMessage:this.state.errorMessage,nominatedMovies:this.state.nominatedMovies,currentPage:this.state.currentPage,totalPages:this.state.totalPages,prevPage:this.prevPage,nextPage:this.nextPage}),this.state.showNominations&&Object(s.jsx)(x,{nominatedMovies:this.state.nominatedMovies,removeMovie:this.removeMovie,showNominationsComponent:this.showNominationsComponent}),Object(s.jsx)(M,{recentlyNominated:this.state.recentlyNominated,closeNominationConfirmation:this.closeNominationConfirmation})]})}}]),n}(o.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,s=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),o(e),a(e),i(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root")),C()}},[[50,1,2]]]);
//# sourceMappingURL=main.ad621028.chunk.js.map