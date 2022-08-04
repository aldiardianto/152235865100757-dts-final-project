import { Card } from "react-bootstrap";
import './itemAgent.css';
export const ItemWeapon = ({item}) => {
    // console.log(item)
    return (
        <Card className=" dark blue text-white p-5" style={{ height: '300px' }} >
      <Card.Img variant="top" style={{ maxHeight:100,height:150 }} src={item.displayIcon} />
      <Card.Body className="pt-5">
        <Card.Title >{item.displayName}</Card.Title>
        <Card.Text>
          {item.shopData ? (<>Weapon category {item.shopData.category}. cost {item.shopData.cost}</>) :(<></>)}
        </Card.Text>
        
      </Card.Body>
    </Card>
    );
};
