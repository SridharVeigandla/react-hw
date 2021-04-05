function Giffy(props){
    return(
        <div>
            <img 
              className="Root"
              src={props.giffyUrl}
              alt={props.name}
            
            />
            {props.children}
        </div>

    );



}
export default Giffy;