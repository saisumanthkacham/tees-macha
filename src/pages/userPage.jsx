
import {useNavigate} from 'react-router-dom';
import{ useStateContext} from "./indexPage.js"
export function User(){

    const{setLogin}= useStateContext()
    const navigate=useNavigate()
  
    function logOutHandler(){
      setLogin(false)
      localStorage.setItem("login",JSON.stringify({login:false}))
      navigate("/")
    }

    return (<div className="user-page">
       
        <i class="fas fa-user-circle fa-6x primary-font"></i>
        <div className="user-text">
        hello admin <br />
        <div onClick={()=>{logOutHandler()}}  className="btn btn-sm primary-bg">logout</div>
        </div>
       
    </div>)
}