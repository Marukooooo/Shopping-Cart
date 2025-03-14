import { Button,Container, Nav,Navbar as Navbars} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppimgCartContext";

export function Navbar(){
    const {openCart,cartQuantity}=useShoppingCart()
    return (
    <Navbars sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
               <Nav.Link to={"/"} as={NavLink} >Home</Nav.Link>
               <Nav.Link to={"/store"} as={NavLink} >Store</Nav.Link>
               <Nav.Link to={"/about"} as={NavLink} >About</Nav.Link>
            </Nav>
         {cartQuantity>0&&(
         <Button 
           onClick={openCart}
           style={{width:'3rem',height:'3rem',position:'relative'}} 
           variant="outline-primary" 
           className="rounded-circle"
           >
           <svg data-v-1b6a536b="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false"><path data-v-1b6a536b="" d="M72.848 70.25c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11 4.925-11 11-11zm-35 0c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11c0-6.074 4.926-11 11-11zm35 7a4 4 0 10.002 8.001 4 4 0 00-.002-8.001zm-35 0a4 4 0 100 8 4 4 0 000-8zM13.892 3.75c2.287 0 4.376 1.55 5.058 3.72l.064.22 2.97 11.187h68.128a4.727 4.727 0 014.661 5.786l-.048.2-9.559 36.291c-.583 2.216-2.618 3.842-4.894 3.944l-.228.005H30.06c-2.287 0-4.377-1.55-5.06-3.72l-.063-.219-13.124-49.413-10.7.006-.004-8 12.782-.007zm72.03 23.127H24.108l8.027 30.226H77.96l7.962-30.226z"></path></svg>
           <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{color:'white',width:'1.5rem',height:'1.5rem',position:'absolute',bottom:0,right:0,transform:'translate(25%,25%)'}}>{cartQuantity}</div>
        </Button>)
          }
        </Container>
    </Navbars>
    )
}