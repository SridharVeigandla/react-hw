import Input from './Input'
import Email from './Email'
import Enter from './Enter'

function UserForm(){

    return (
        <div>
           <Input type="text" label="Name"/>
           <Input type="text" label="Mobile"/>
           <Input type="password" label="Password"/>
           <Input type="button" value="clickme" label="click here"/>
           
        </div>
    );
}
export default UserForm;