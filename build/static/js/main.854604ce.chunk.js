(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{22:function(e,t,n){e.exports=n(35)},23:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),o=n(19),i=n.n(o),c=n(5),l=n(12);function s(){return r.a.createElement("div",null,"Homepage here",r.a.createElement(l.b,{to:"/adoption"},"Adopt a pet"))}var u=n(7),p=n(8),h=n(10),d=n(9),f=n(11),m=(n(33),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"pet"},r.a.createElement("img",{src:this.props.pet.imageURL,alt:this.props.pet.description}),r.a.createElement("h3",null,this.props.pet.name),r.a.createElement("div",{className:"pet-details"},r.a.createElement("p",null,"Age: ",this.props.pet.age),r.a.createElement("p",null,"Breed: ",this.props.pet.breed),r.a.createElement("p",null,"Gender: ",this.props.pet.gender),r.a.createElement("p",null,"Description: ",this.props.pet.description),r.a.createElement("p",null,"Story: ",this.props.pet.story)),!0===this.props.atFront&&r.a.createElement("button",{onClick:function(){return e.props.handleAdopt(e.props.type)}},"Adopt"))}}]),t}(r.a.Component));m.defaultProps={pet:{name:"",age:"",breed:"",description:"",gender:"",imageURL:"",story:""}};var g="https://jake-petful-server.herokuapp.com/api",S=void 0,v={getAllPets:function(){return fetch("".concat(g,"/pets")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).catch((function(e){return console.error(e)}))},getAllPeople:function(){return fetch("".concat(g,"/people")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).catch((function(e){return console.error(e)}))},queuePerson:function(e){return fetch("".concat(g,"/people"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({person:e})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).catch((function(e){return console.error(e)}))},dequeuePerson:function(){return fetch("".concat(g,"/people"),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).catch((function(e){return console.error(e)}))},dequeuePet:function(e){return fetch("".concat(g,"/pets"),{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify({type:e})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).catch((function(e){return console.error(e)}))},queue4:function(){S.queuePerson("Dave"),S.queuePerson("Tyler"),S.queuePerson("Doug"),S.queuePerson("Matt")}},y=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Current Adoption Queue:",r.a.createElement("div",null,this.props.people.map((function(e,t){return r.a.createElement("p",{key:t},t+1," : ",e)}))))}}]),t}(r.a.Component);y.defaultProps={people:[]};n(34);var E=["Adam","Alex","Aaron","Ben","Carl","Dan","David","Edward","Fred","Frank","George","Hal","Hank","Ike","John","Jack","Joe","Larry","Monte","Matthew","Mark","Nathan","Otto","Paul","Peter","Roger","Roger","Steve","Thomas","Tim","Ty","Victor","Walter"],P=["Anderson","Ashwoon","Aikin","Bateman","Bongard","Bowers","Boyd","Cannon","Cast","Deitz","Dewalt","Ebner","Frick","Hancock","Haworth","Hesch","Hoffman","Kassing","Knutson","Lawless","Lawicki","Mccord","McCormack","Miller","Myers","Nugent","Ortiz","Orwig","Ory","Paiser","Pak","Pettigrew","Quinn","Quizoz","Ramachandran","Resnick","Sagar","Schickowski","Schiebel","Sellon","Severson","Shaffer","Solberg","Soloman","Sonderling","Soukup","Soulis","Stahl","Sweeney","Tandy","Trebil","Trusela","Trussel","Turco","Uddin","Uflan","Ulrich","Upson","Vader","Vail","Valente","Van Zandt","Vanderpoel","Ventotla","Vogal","Wagle","Wagner","Wakefield","Weinstein","Weiss","Woo","Yang","Yates","Yocum","Zeaser","Zeller","Ziegler","Bauer","Baxster","Casal","Cataldi","Caswell","Celedon","Chambers","Chapman","Christensen","Darnell","Davidson","Davis","DeLorenzo","Dinkins","Doran","Dugelman","Dugan","Duffman","Eastman","Ferro","Ferry","Fletcher","Fietzer","Hylan","Hydinger","Illingsworth","Ingram","Irwin","Jagtap","Jenson","Johnson","Johnsen","Jones","Jurgenson","Kalleg","Kaskel","Keller","Leisinger","LePage","Lewis","Linde","Lulloff","Maki","Martin","McGinnis","Mills","Moody","Moore","Napier","Nelson","Norquist","Nuttle","Olson","Ostrander","Reamer","Reardon","Reyes","Rice","Ripka","Roberts","Rogers","Root","Sandstrom","Sawyer","Schlicht","Schmitt","Schwager","Schutz","Schuster","Tapia","Thompson","Tiernan","Tisler"],b=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={pets:{cats:[],dogs:[]},people:[],name:"",adoptionMessage:!1,inLine:!1,atFront:!1},n.dqPair=function(){var e=["cat","dog"],t=e[Math.floor(Math.random()*e.length)];v.dequeuePet(t).then((function(){v.getAllPets().then((function(e){n.setState({pets:e})})).catch((function(e){return n.setState({error:e})}))}))},n.handleSubmit=function(e){e.preventDefault(),v.queuePerson(n.state.name).then((function(){v.getAllPeople().then((function(e){n.setState({people:e,inLine:!0})})).catch((function(e){return n.setState({error:e})}))})),n.moveQueue()},n.handleAdopt=function(e){n.setState({adoptionMessage:!0}),setTimeout((function(){v.dequeuePet(e).then((function(){v.getAllPets().then((function(e){n.setState({pets:e})})).catch((function(e){return n.setState({error:e})}))})).then((function(){v.dequeuePerson().then((function(){v.getAllPeople().then((function(e){n.setState({people:e,name:"",inLine:!1,atFront:!1,adoptionMessage:!1})})).catch((function(e){return n.setState({error:e})}))}))}))}),3e3)},n.moveQueue=function(){n.interval=setInterval((function(){v.dequeuePerson().then((function(){n.dqPair()})).then((function(){v.getAllPeople().then((function(e){n.setState({people:e}),e[0]===n.state.name&&(clearInterval(n.interval),n.fillQueue())})).catch((function(e){return n.setState({error:e})}))}))}),5e3)},n.fillQueue=function(){n.interval=setInterval((function(){var e=E[Math.floor(Math.random()*E.length)],t=P[Math.floor(Math.random()*P.length)];v.queuePerson("".concat(e," ").concat(t)).then((function(){v.getAllPeople().then((function(e){n.setState({people:e}),5===e.length&&(clearInterval(n.interval),n.setState({atFront:!0}))})).catch((function(e){return n.setState({error:e})}))}))}),5e3)},n.handleFormChange=function(e){e.preventDefault(),n.setState({name:e.target.value})},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.getAllPets().then((function(t){e.setState({pets:t})})).catch((function(t){return e.setState({error:t})})),v.getAllPeople().then((function(t){e.setState({people:t})})).catch((function(t){return e.setState({error:t})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"adoption-header"},r.a.createElement("h2",null,"Pets currently up for adoption:")),r.a.createElement("div",{className:"animals-section"},r.a.createElement(m,{pet:this.state.pets.cats[0],type:"cat",atFront:this.state.atFront,handleAdopt:this.handleAdopt}),r.a.createElement(m,{pet:this.state.pets.dogs[0],type:"dog",atFront:this.state.atFront,handleAdopt:this.handleAdopt})),!1!==this.state.adoptionMessage&&r.a.createElement("h2",{style:{color:"green"}},"Congratulations, your adoption was accepted!"),!1===this.state.inLine&&r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h4",null,"Join the line to adopt!"),r.a.createElement("label",{htmlFor:"name"},"Your name:"),r.a.createElement("input",{id:"name",type:"text",onChange:function(t){return e.handleFormChange(t)}}),r.a.createElement("button",{type:"submit"},"Submit")),r.a.createElement(y,{people:this.state.people}))}}]),t}(r.a.Component);var k=function(){return r.a.createElement("div",null,r.a.createElement(c.a,{exact:!0,path:"/",component:s}),r.a.createElement(c.a,{path:"/adoption",component:b}))};i.a.render(r.a.createElement(l.a,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.854604ce.chunk.js.map