// import ReactDOM from ('../public/react-dom.development.js');
// import React from ('../public/react.development.js');


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
      zipcode: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

///////  Handles input change form    //////////////////////////////////////////

  handleForm1Change(event) {
    this.setState({
      name: event.target.name,
      email: event.target.email,
      password: event.target.password,
      address: event.target.address,
      phone: event.target.phone,
      creditcard: event.target.creditcard,
      expiry: event.target.expiry,
      cvv: event.target.cvv,
      zipcode: event.target.zipcode
    });
  }

  handleForm2Change(event) {
    this.setState({
      name: event.target.name,
      email: event.target.email,
      password: event.target.password,
      address: event.target.address,
      phone: event.target.phone,
      creditcard: event.target.creditcard,
      expiry: event.target.expiry,
      cvv: event.target.cvv,
      zipcode: event.target.zipcode
    });
  }

  handleForm3Change(event) {
    this.setState({
      name: event.target.name,
      email: event.target.email,
      password: event.target.password,
      address: event.target.address,
      phone: event.target.phone,
      creditcard: event.target.creditcard,
      expiry: event.target.expiry,
      cvv: event.target.cvv,
      zipcode: event.target.zipcode
    });
  }

///////  Handles Submitting Form   /////////////////////////////////////////////

  handleSubmitCheckout(event) {
    alert('An essay was submitted: ' + this.state.value);
    this.setState({
      form: 1
    });
    event.preventDefault();
  }

  handleSubmitForm1(event) {
    alert('An essay was submitted: ' + this.state.value);
    this.setState({
      form: 2
    });
    event.preventDefault();
  }

  handleSubmitForm2(event) {
    alert('An essay was submitted: ' + this.state.value);
    this.setState({
      form: 3
    });
    event.preventDefault();
  }

  handleSubmitForm3(event) {
    alert('An essay was submitted: ' + this.state.value);
    this.setState({
      form: 4
    });
    event.preventDefault();
  }

  handleConfirm(event) {
    alert('An essay was submitted: ' + this.state.value);
    this.setState({
      form: 0
    });
    event.preventDefault();
  }


///////  Handles Rendering Form   /////////////////////////////??///////////////


  render() {
    if (this.state.form === 0) {
      return (
        <div>
          <h1>Happy Shopping!</h1>
          <button onClick={this.handleSubmitCheckout} > Checkout :) </button>
          <br/>
        </div>  
      );  
    } else if (this.state.form === 1) {
      return (
        <div>
          <h1>Customer Form!</h1>
          <br/>
          <Form1 value={this.state.value} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        </div>  
      );
    } else if (this.state.form === 2) {
      return (
        <div>
          <h1>Shipping Form!</h1>
          <br/>
          <Form2 value={this.state.value} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        </div>  
      );
    } else if (this.state.form === 3) {
      return (
        <div>
          <h1>Payment Form!</h1>
          <br/>
          <Form3 value={this.state.value} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        </div>  
      );
    } else if (this.state.form === 4) {
      return (
        <div>
          <h1>Almost There, Purchase!</h1>
          <br/>
          <Confirm value={this.state.value} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        </div>  
      );
    }
  }
}

///////  Functional Forms Render   ////////////////////////////////////////////

function Form1(props) {
  return (
    <div> Form 1: 
    <form onSubmit={props.handleSubmit}>
      <div> 
        <textarea name="name" placeholder="name" value={props.name} onChange={props.handleChange} />
      </div>
      <div>
        <textarea name="email" placeholder="email" value={props.email} onChange={props.handleChange} />
      </div>
      <div> 
        <textarea name="password" placeholder="password" value={props.password} onChange={props.handleChange} />
      </div>
      <input type="submit" value="Next Page" />
    </form>
    </div>
  );
}


function Form2(props) {
  return (
    <div> Form 2: 
    <form onSubmit={props.handleSubmit}>
      <div> 
        <textarea name="name" placeholder="address" value={props.name} onChange={props.handleChange} />
      </div>
      <div>
        <textarea name="email" placeholder="phone number" value={props.email} onChange={props.handleChange} />
      </div>
      <input type="submit" value="Next Page" />
    </form>
    </div>
  );
}


function Form3(props) {
  return (
    <div> Form 3: 
    <form onSubmit={props.handleSubmit}>
      <div> 
        <textarea name="name" placeholder="Credit Card Number" value={props.name} onChange={props.handleChange} />
      </div>
      <div>
        <textarea name="email" placeholder="Expiry Date" value={props.email} onChange={props.handleChange} />
      </div>
      <div> 
        <textarea name="password" placeholder="CVV" value={props.password} onChange={props.handleChange} />
      </div>
      <div> 
        <textarea name="password" placeholder="Zipcode" value={props.password} onChange={props.handleChange} />
      </div>
      <input type="submit" value="Next Page" />
    </form>
    </div>
  );
}      


function Confirm(props) {
  return (
    <div> Confirmation: 
    <form onSubmit={props.handleConfirm}>
      <div> 
      </div>
      <input type="submit" value="Confirm Purchase" />
    </form>
    </div>
  );
}  



ReactDOM.render(<App />, document.getElementById('app'));


