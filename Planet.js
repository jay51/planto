


function Planet(props){

  return (
          <div className="card">
            <div>
              <img src={props.url} />
            </div>
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <h3>Planet Profile</h3>
            <ul>
              <li><strong>Diameter:</strong> {props.diameter} mi</li>
              <li><strong>Moons:</strong> {props.moons}</li>
            </ul>
          </div>
    
  );
}