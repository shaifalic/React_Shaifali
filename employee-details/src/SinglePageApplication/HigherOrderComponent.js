function higherOrderComponent(Component) {
    function EmployeeDetailsComponent(props) {

        var styleObject =  {
            containerStyle: {
                width: "18rem", 
                margin: "20px", 
                display: "inline-block"
            }
        };
    
        return (
              <div className="card" style={styleObject.containerStyle}>
                  <img src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt={props.name} />
                  <div className="card-body">
                      <div>
                          <div>
                            <p className="card-text">{props.id} <b>{props.createdAt}</b> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Component props={props}></Component>
                        </div>
                        
                      </div>
                  </div>
              </div>
        )
    }
    return EmployeeDetailsComponent;
}

function WithButton(props) {
    return (
        <div>
            <input type="button" id={props.id} className="btn btn-primary" value="Delete" onClick={props.deleteEmployee} />
            <input style={{marginLeft: "5px"}} type="button" name={props.id} className="btn btn-primary" value="Update" onClick={props.updateEmployee} />
        </div>
    )
}

function WithouUpdateButton(props) {
    return (
        <div>
            <input type="button" id={props.id} className="btn btn-primary" value="Delete" onClick={props.deleteEmployee} />
        </div>
    )
}

function NoButton(props) {
    return (
        <div>
            <b style={{color: "red"}}>** User Cannot Perform any Action</b>
        </div>
    )
}

const NewComponent = higherOrderComponent(NoButton)
export default NewComponent;
export var NewOtherComponent = higherOrderComponent(WithouUpdateButton)