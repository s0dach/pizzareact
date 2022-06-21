import React, { useEffect, useState } from "react";
import axios from "axios";

import Categorias from "../components/Categorias";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slice/filterSlice";

export const Home = ({ searchValue }) => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [sort, setSort] = useState({ name: "популярности", sort: "rating" });

  useEffect(() => {
    const search = searchValue ? `&search=${searchValue}` : "";
    // fetch(
    //   `https://6294d6b2a7203b3ed0725aa0.mockapi.io/items?category=${
    //     categoryId > 0 ? categoryId : ""
    //   }&sortBy=${sort.sort}&order=desc${search}`
    // )
    //   .then((res) => res.json())
    //   .then((arr) => setItems(arr));
    axios
      .get(
        `https://6294d6b2a7203b3ed0725aa0.mockapi.io/items?category=${
          categoryId > 0 ? categoryId : ""
        }&sortBy=${sort.sort}&order=desc${search}`
      )
      .then((res) => setItems(res.data));
    window.scrollTo(0, 0);
  }, [categoryId, sort, searchValue]);

  const onChangeCategory = (i) => {
    dispatch(setCategoryId(i));
  };
  return (
    <>
      <div className="content__top">
        <Categorias value={categoryId} onClickCategory={onChangeCategory} />
        <Sort value={sort} onClickSort={(i) => setSort(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((value) => (
          <PizzaBlock {...value} />
        ))}
      </div>
    </>
  );
};

export default Home;
