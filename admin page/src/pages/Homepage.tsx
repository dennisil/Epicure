import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

export const Homepage = (props: { user: any }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>([]);
  const navigate = useNavigate();

  const getInitialData = async () => {
    const { data } = await axios.get(
      "http://localhost:2718/api/v1/restaurant/"
    );
    setRestaurants(data);
  };

  const handleOnEditClick = (resId: string | undefined) => {
    if (resId) navigate(`/edit/${resId}`);
  };

  useEffect(() => {
    getInitialData();
  }, []);
  if (!restaurants) return <div>Loading...</div>;
  return (
    <>
      <Link to={`/edit`}>Add Restaurant</Link>
      <div className="res-container">
        {restaurants.map((res) => (
          <Card key={res._id} sx={{ maxWidth: 345 }}>
            <CardHeader title={res.resName} />
            <CardMedia
              component="img"
              height="194"
              image={res.imgUrl}
              alt="Paella dish"
            />
            <CardActions style={{display: "flex", justifyContent: "center"}}>
              <Button onClick={() => handleOnEditClick(res._id)}>Edit</Button>
              {/* <Button>Details</Button> */}
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};
