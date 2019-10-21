var React = require("react");

class RecipientTotal extends React.Component {
  render() {

    let Navbar = require('./navbar.jsx');

    let name;
    let amount;
    let dollar;

    if (this.props.results){
        name = this.props.results.recipientUsername;
        amount = this.props.results.totalAmountRecieved;
        dollar = "$";
    } else {
        name = null;
        amount = "User have not received any money yet";
        dollar = null;
    }

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        </head>
        <body>

          <Navbar/>
          <div className="container">
            <h3 className="mt-5">User {name} have received this amount in total:</h3>
            <h1 className="display-4 mt-5 text-center">{dollar}{amount}</h1>
          </div>



        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = RecipientTotal;