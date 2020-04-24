import React, { useState } from 'react';
import './Users.css';
import AAA from '../../Images/AAA.jpg';
import A from '../../Images/A.jpg';
import BB from '../../Images/BB.jpg';
import C from '../../Images/C.jpg';
import D from '../../Images/D.jpg';
import E from '../../Images/E.jpg';
import F from '../../Images/F.jpg';
import G from '../../Images/G.jpg';
import H from '../../Images/H.jpg';
import I from '../../Images/I.jpg';
import J from '../../Images/J.jpg';
import K from '../../Images/K.jpg';
import L from '../../Images/L.jpg';
import M from '../../Images/M.jpg';
import N from '../../Images/N.jpg';
import Cart from '../Cart/Cart';


const Users = () => {

     const [cart,setCart]=useState([]);


         
    const handleAddSalary =(info)=>{
        
        console.log(" Salary Added ",info );
        const newCart=[...cart,info];
        setCart(newCart);

    }

    

    const personInfo=[
        {name:'Nean',profession:'Doctor',salary:'$105000',email:'nean@11j.com',contactNumber:'017********'},
        {name:'Json',profession:'Web Designer',salary:'$100000',email:'json@11j.com',contactNumber:'017********'},
        {name:'Jenna',profession:'Graphics-Designer',salary:'$80000',email:'jenna@11j.com',contactNumber:'017********'},
        {name:'Nick',profession:'Web Designer',salary:'$70000',email:'nick@11j.com',contactNumber:'017********'},
        {name:'Petter',profession:'wordpress-Developer',salary:'$110000',email:'petter@11j.com',contactNumber:'017********'},

        {name:'Riki',profession:'Seo-specialist',salary:'$70000',email:'riki@11j.com',contactNumber:'017********'},
        {name:'Hilter',profession:'Web Designer',salary:'$1140000',email:'hilter@11j.com',contactNumber:'017********'},
        {name:'Mark',profession:'Web Designer',salary:'$100000',email:'mark@11j.com',contactNumber:'017********'},
        {name:'Ramiya',profession:'Engineer',salary:'$150000',email:'ramiya@11j.com',contactNumber:'017********'},
        {name:'Piku',profession:'Manager',salary:'$112000',email:'piku@11j.com',contactNumber:'017********'},

        {name:'Rinian',profession:'Wordpress T. D.',salary:'$150000',email:'rinian@11j.com',contactNumber:'017********'},
        {name:'Jikniru',profession:'Web Designer',salary:'$60000',email:'jikniru@11j.com',contactNumber:'017********'},
        {name:'Hosin',profession:'Foreman',salary:'$80000',email:'json@11j.com',contactNumber:'017********'},
        {name:'Juniya',profession:'Teacher',salary:'$150000',email:'juniya@11j.com',contactNumber:'017********'},
        {name:'Kinin',profession:'Professor',salary:'$170000',email:'jkinin@11j.com',contactNumber:'017********'},
    ]

    const img={
        width:'70%',
        borderRadius:'50%'
    }
      
    const imgs = [ <img style={img} src={AAA} alt="A"/> , <img style={img} src={A} alt="A"/> , <img style={img} src={BB} alt="A"/> , <img style={img} src={C} alt="A"/> , <img style={img} src={D} alt="A"/>,<img style={img} src={E} alt="A"/>,<img style={img} src={F} alt="A"/>,<img style={img} src={G} alt="A"/>,<img style={img} src={H} alt="A"/>,<img style={img} src={I} alt="A"/>,<img style={img} src={J} alt="A"/>,<img style={img} src={K} alt="A"/>,<img style={img} src={L} alt="A"/>,<img style={img} src={M} alt="A"/>,<img style={img} src={N} alt="A"/>];

     return (
        <div className="users-container">
             <div className="person-container">
               
                <Person handleAddSalary={handleAddSalary}  im={imgs[0]} name={personInfo[0].name} profession={personInfo[0].profession} salary={personInfo[0].salary } contactNumber={personInfo[0].contactNumber}></Person>
                <Person handleAddSalary={handleAddSalary}  im={imgs[1]} name={personInfo[1].name} profession={personInfo[1].profession} salary={personInfo[1].salary } contactNumber={personInfo[1].contactNumber}></Person>
                <Person handleAddSalary ={handleAddSalary}  im={imgs[2]} name={personInfo[2].name} profession={personInfo[2].profession} salary={personInfo[2].salary } contactNumber={personInfo[2].contactNumber}></Person>
                <Person handleAddSalary ={handleAddSalary}  im={imgs[3]} name={personInfo[3].name} profession={personInfo[3].profession} salary={personInfo[3].salary } contactNumber={personInfo[3].contactNumber}></Person>
                <Person handleAddSalary ={handleAddSalary}  im={imgs[4]} name={personInfo[4].name} profession={personInfo[4].profession} salary={personInfo[4].salary } contactNumber={personInfo[4].contactNumber}></Person>
                
                <Person handleAddSalary ={handleAddSalary} im={imgs[5]} name={personInfo[5].name} profession={personInfo[5].profession} salary={personInfo[5].salary } contactNumber={personInfo[5].contactNumber}></Person>
                <Person handleAddSalary ={handleAddSalary} im={imgs[6]} name={personInfo[6].name} profession={personInfo[6].profession} salary={personInfo[6].salary } contactNumber={personInfo[6].contactNumber}></Person>
                <Person handleAddSalary ={handleAddSalary} im={imgs[7]} name={personInfo[7].name} profession={personInfo[7].profession} salary={personInfo[7].salary } contactNumber={personInfo[7].contactNumber}></Person>
                <Person handleAddSalary ={handleAddSalary} im={imgs[8]} name={personInfo[8].name} profession={personInfo[8].profession} salary={personInfo[8].salary } contactNumber={personInfo[8].contactNumber}></Person>
                <Person handleAddSalary ={handleAddSalary} im={imgs[9]} name={personInfo[9].name} profession={personInfo[9].profession} salary={personInfo[9].salary } contactNumber={personInfo[9].contactNumber}></Person>
                
                <Person handleAddSalary ={handleAddSalary} im={imgs[10]} name={personInfo[10].name} profession={personInfo[10].profession} salary={personInfo[10].salary } contactNumber={personInfo[10].contactNumber}></Person>
                <Person handleAddSalary ={handleAddSalary} im={imgs[11]} name={personInfo[11].name} profession={personInfo[11].profession} salary={personInfo[11].salary } contactNumber={personInfo[11].contactNumber}></Person>
                <Person handleAddSalary ={handleAddSalary} im={imgs[12]} name={personInfo[12].name} profession={personInfo[12].profession} salary={personInfo[12].salary } contactNumber={personInfo[12].contactNumber}></Person>
                <Person handleAddSalary ={handleAddSalary} im={imgs[13]} name={personInfo[13].name} profession={personInfo[13].profession} salary={personInfo[13].salary } contactNumber={personInfo[13].contactNumber}></Person>
                <Person handleAddSalary ={handleAddSalary} im={imgs[14]} name={personInfo[14].name} profession={personInfo[14].profession} salary={personInfo[14].salary } contactNumber={personInfo[14].contactNumber}></Person>
                
                 
            </div>
            <div>
                  <Cart cart={cart}></Cart>
            </div>
           
        </div>
    )
};

function Person(props){

    const personstyle={
        border:'1px solid gray',
        borderRadius:'5px',
        backgroundColor:'light',
        width:'30%',
        paddingBottom:'3%',
        margin:'1%',
        float:'left'
    }
   
     console.log(props);
    // const {name}=props.nam;
    return (
      
        <div style={personstyle}>
            
            <h1> {props.im}</h1>
            <h3>Name :{props.name}</h3>
            <h4>Profession:{props.profession}</h4>
            <h4>Anual Salary:{props.salary}</h4>
            <h4>Cont. Num:{props.contactNumber}</h4>




            <button className="mainButton"
            onClick={()=> props.handleAddSalary(props.info)}
            >Add Salary</button>


             
        </div>
    )
}
export default Users;