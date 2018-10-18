// import ReactDOM from ('../public/react-dom.development.js');
// import React from ('../public/react.development.js');
// import $ from ('jquery');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 0,
      name: '',
      email: '',
      password: '',
      address: '',
      phone: '',
      creditcard: '',
      expiry: '',
      cvv: '',
      billingzip: ''
    };

    this.handleChangeForm1 = this.handleChangeForm1.bind(this);
    this.handleChangeForm2 = this.handleChangeForm2.bind(this);
    this.handleChangeForm3 = this.handleChangeForm3.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleSubmitForm1 = this.handleSubmitForm1.bind(this);
    this.handleSubmitForm2 = this.handleSubmitForm2.bind(this);
    this.handleSubmitForm3 = this.handleSubmitForm3.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

///////  Handles input change form    //////////////////////////////////////////

  handleChangeForm1(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    console.log(newState);
    this.setState(newState);
    
    console.log(event.target.name, event.target.value)

    // if(event.target.name === 'name') {
    //   this.setState({
    //     name: event.target.value
    //   });
    // } else if()

    // this.setState({
    //   name: event.target.value,
    //   email: event.target.value,
    //   password: event.target.value
    // });
  }

  handleChangeForm2(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    console.log(newState);
    this.setState(newState);
    // this.setState({
    //   address: event.target.address,
    //   phone: event.target.phone
    // });
  }

  handleChangeForm3(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    console.log(newState);
    this.setState(newState);

    // this.setState({
    //   creditcard: event.target.creditcard,
    //   expiry: event.target.expiry,
    //   cvv: event.target.cvv,
    //   zipcode: event.target.zipcode
    // });
  }

///////  Handles Submitting Form   /////////////////////////////////////////////

  handleCheckout(event) {
    this.setState({
      form: 1
    });
    event.preventDefault();
  }

  handleSubmitForm1(event) {
    this.setState({
      form: 2
    });
    // alert('You are almost done! Next form ' + this.state.form);
    event.preventDefault();
  }

  handleSubmitForm2(event) {
    this.setState({
      form: 3
    });
    event.preventDefault();
  }

  handleSubmitForm3(event) {
    this.setState({
      form: 4
    });
    event.preventDefault();
  }

  handleConfirm() {
    var data = Object.assign({}, this.state);
    delete data.form;
    // console.log(data);

    fetch('/', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      body: JSON.stringify(data), // body data type must match "Content-Type" header
      headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      alert('Congrats on your big purchase!'); // parses response to JSON
    });

    console.log('PAID');

    this.setState({
      form: 0
    });
    // event.preventDefault();
  }


///////  Handles Rendering Form   /////////////////////////////??///////////////


  render() {
    if (this.state.form === 0) {
      return (
        <div>
          <h1>Happy Shopping!</h1>
          <h3>Checkout Page!</h3>
          <button onClick={this.handleCheckout}> Checkout ;) </button>
          <br/>
        </div>  
      );  
    } else if (this.state.form === 1) {
      return (
        <div>
          <h1>Customer Form!</h1>
          <br/>
          <Form1 name={this.state.name} email={this.state.email} password={this.state.password} handleSubmitForm1={this.handleSubmitForm1} handleChangeForm1={this.handleChangeForm1}/>
        </div>  
      );
    } else if (this.state.form === 2) {
      return (
        <div>
          <h1>Shipping Form!</h1>
          <br/>
          <Form2 address={this.state.address} phone={this.state.phone} handleSubmitForm2={this.handleSubmitForm2} handleChangeForm2={this.handleChangeForm2}/>
        </div>  
      );
    } else if (this.state.form === 3) {
      return (
        <div>
          <h1>Payment Form!</h1>
          <br/>
          <Form3 creditcard={this.state.creditcard} expiry={this.state.expiry} cvv={this.state.cvv} billingzip={this.state.billingzip} handleSubmitForm3={this.handleSubmitForm3} handleChangeForm3={this.handleChangeForm3}/>
        </div>  
      );
    } else if (this.state.form === 4) {
      return (
        <div>
          <h1>Almost There!</h1>
          <h2>Confirmation!</h2>
          <br/> 
          <div> 
          <h3>Order Details:</h3>
          <br/> name: {this.state.name} <br/> 
          <br/> email: {this.state.email} <br/>
          <br/> password: {this.state.password} <br/>
          <br/> address: {this.state.address} <br/> 
          <br/> phone: {this.state.phone} <br/> 
          <br/> creditcard: {this.state.creditcard} <br/>
          <br/> expiry: {this.state.expiry} <br/> 
          <br/> cvv: {this.state.cvv} <br/> 
          <br/> billingzip: {this.state.billingzip} <br/> 
          <br/>  <br/> 
          </div>
          <button onClick={this.handleConfirm}> Confirm Purchase </button>
          <br/>
        </div>  
      );
    }
  }
}

///////  Functional Forms Render   ////////////////////////////////////////////

function Form1(props) {
  return (
    <div> Form 1: 
    <form onSubmit={props.handleSubmitForm1}>
      <div> 
        <textarea name="name" placeholder="name"  onChange={props.handleChangeForm1} />
      </div>
      <div>
        <textarea name="email" placeholder="email" value={props.email} onChange={props.handleChangeForm1} />
      </div>
      <div> 
        <textarea name="password" placeholder="password" value={props.password} onChange={props.handleChangeForm1} />
      </div>
      <input type="submit" value="Next Page" />
    </form>
    </div>
  );
}


function Form2(props) {
  return (
    <div> Form 2: 
    <form onSubmit={props.handleSubmitForm2}>
      <div> 
        <textarea name="address" placeholder="address" value={props.address} onChange={props.handleChangeForm2} />
      </div>

      <div>
        <textarea name="phone" placeholder="phone number" value={props.phone} onChange={props.handleChangeForm2} />
      </div>
      <input type="submit" value="Next Page" />
    </form>
    </div>
  );
}


function Form3(props) {
  return (
    <div> Form 3: 
    <form onSubmit={props.handleSubmitForm3}>
      <div> 
        <textarea name="creditcard" placeholder="Credit Card Number" value={props.creditcard} onChange={props.handleChangeForm3} />
      </div>
      <div>
        <textarea name="expiry" placeholder="Expiry Date" value={props.expiry} onChange={props.handleChangeForm3} />
      </div>
      <div> 
        <textarea name="cvv" placeholder="CVV" value={props.cvv} onChange={props.handleChangeForm3} />
      </div>
      <div> 
        <textarea name="billingzip" placeholder="Zipcode" value={props.billingzip} onChange={props.handleChangeForm3} />
      </div>
      <input type="submit" value="Next Page" />
    </form>
    </div>
  );
}      




ReactDOM.render(<App />, document.getElementById('app'));


//  confirm functional

// function Confirm(props) {
//   return (
//     <div> Confirmation: 
//     <form onSubmit={props.handleConfirm}>
//       <div> 
//       </div>
//       <input type="submit" value="Confirm Purchase" />
//     </form>
//     </div>
//   );
// }  
