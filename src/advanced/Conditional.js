import Fruits from "../Fruits";

function NewFruits(props){
    return<h3>These are Fresh Fruits</h3>
}
function OldFruits(props){
    return<h3>this is some old stock</h3>
}

function Conditional(props){

    if(props.fresh==="no"){
        return<NewFruits/>
    }else{
        return<OldFruits/>
    }
}

export default Conditional;