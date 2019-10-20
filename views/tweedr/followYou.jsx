var React = require("react");

class FollowYou extends React.Component {
  render() {

    let Navbar = require('./navbar.jsx');

    let allUsers;

    if (this.props.results){
        allUsers = this.props.results.map(x=>{

            let username = x.username
            let image = x.image
            console.log(x);

            return  <div class="card col-6 mx-auto mt-5">
                      <img style={{height: "100" + "%"}, {width: "100" + "%"}} src={image} class="card-img-top rounded-circle align-self-center" alt="default photo"/>
                      <div class="card-body">
                        <h5 class="card-title">{username}</h5>
                      </div>
                    </div>

        });
    } else {
        allUsers = <p>No one is following you yet</p>
    }






    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        </head>
        <body>

          <Navbar/>
          <div className="container">
            <h3 className="mt-5">These are your followers:</h3>
                {allUsers}
          </div>



        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = FollowYou;