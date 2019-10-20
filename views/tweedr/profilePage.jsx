var React = require("react");

class ProfilePage extends React.Component {
  render() {

    let Navbar = require('./navbar.jsx');


    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        </head>
        <body>

          <Navbar/>
          <div className="container">
            <h3 className="mt-5">Your Profile:</h3>
            <div class="card col-6 mx-auto mt-5 mb-3">
              <img style={{height: "100" + "&"}, {width: "100" + "&"}} src={this.props.image} class="card-img-top rounded-circle align-self-center" alt="default photo"/>
              <div class="card-body">
                <h5 class="card-title">{this.props.username}</h5>
                <form className="col align-self-center" method='POST' action='/followers'>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                      Update Profile Picture
                    </button>
                </form>
              </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Profile Picture</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                   <form className="col align-self-center" method='POST' action='/profilePic'>
                        <div className="form-group">
                        <input class="form-control mr-sm-2" type="text" name="image" placeholder="Enter Url Here" required/>
                        </div>
                        <button type="button" class="btn btn-secondary mr-4" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>



        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = ProfilePage;