import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useForm } from "../hooks/useForm";

const getEmptyResObject = (): Restaurant => {
  return {
    resName: "",
    chef: "",
    imgUrl: "/imgs/dishes/lumina.jpg",
    dishes: [],
    tags: [],
  };
};

export const ResEdit = (props: { user: any }) => {
  const { resId } = useParams();
  const [restaurant, handleChange, setRestaurant] = useForm(null);

  const getResById = async (resId: string | undefined) => {
    if (!resId) {
      setRestaurant(getEmptyResObject());
      return;
    }
    const { data } = await axios.get(
      `http://localhost:2718/api/v1/restaurant/${resId}`
    );
    setRestaurant(data);
  };

  const handleOnEditRes = async (ev: React.MouseEvent<HTMLButtonElement>) => {
    let token: any = localStorage.getItem("token");
    if (resId) {
      const res = await axios.patch(
        `http://localhost:2718/api/v1/restaurant/${resId}`,
        { resData: restaurant },
        { headers: { "x-access-token": token } }
      );
      console.log(res);
    } else {
      const res = await axios.post(
        `http://localhost:2718/api/v1/restaurant/`,
        restaurant,
        { headers: { "x-access-token": token } }
      );
    }
  };

  const handleOnDelete = async (resId: string | undefined) => {
    if (!resId) return;
    let token: any = localStorage.getItem("token");
    const res = await axios.delete(
      `http://localhost:2718/api/v1/restaurant/${resId}`,
      { headers: { "x-access-token": token } }
    );
  };

  useEffect(() => {
    getResById(resId);
  }, []);

  if (resId && restaurant) {
    return (
      <main>
        <h1>{restaurant.resName}</h1>
        <h2>{restaurant.chef}</h2>
        <img src={restaurant.imgUrl} alt="" />
        <FormControl>
          <TextField
            onChange={handleChange}
            value={restaurant.chef}
            label="Chef"
            type="text"
            name="chef"
            id="chef"
          />
          <TextField
            onChange={handleChange}
            value={restaurant.resName}
            label="resName"
            type="text"
            name="resName"
            id="resName"
          />
          <TextField />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="tags"
            label="Tags"
            // onChange={handleChange}
          >
            <MenuItem value={"popular"}>Popular</MenuItem>
            <MenuItem value={"new"}>New</MenuItem>
          </Select>
          <Button onClick={handleOnEditRes}>Edit</Button>
        </FormControl>
        {restaurant._id && (
          <Button onClick={() => handleOnDelete(restaurant._id)}>
            Delete Restaurant
          </Button>
        )}
      </main>
    );
  }
  if (!resId && restaurant) {
    return (
      <div>
        <h1>Add new restaurant</h1>
        <FormControl>
          <TextField
            onChange={handleChange}
            value={restaurant.chef}
            label="Chef"
            type="text"
            name="chef"
            id="chef"
          />
          <TextField
            onChange={handleChange}
            value={restaurant.resName}
            label="resName"
            type="text"
            name="resName"
            id="resName"
          />
          <TextField />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="tags"
            label="Tags"
            // onChange={handleChange}
          >
            <MenuItem value={"popular"}>Popular</MenuItem>
            <MenuItem value={"new"}>New</MenuItem>
          </Select>
          <Button onClick={handleOnEditRes}>Add</Button>
        </FormControl>
      </div>
    );
  }
  return <div>Loading</div>;
};
