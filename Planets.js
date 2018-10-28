


function Planets(props){


  return (
    <div className="container">
    {
      planets.map(p => (<Planet key={p.id} {...p}/>))
    }
    </div>
   );

}