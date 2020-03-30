import React, { useEffect, useState } from "react";
import Paginator from "react-hooks-paginator";
import { useDispatch, useSelector } from "react-redux";
import { beerActions } from "../../actions";
import BeerList from "./BeerList";
import BeerFilter from "../../components/BeerFilter";
import FramedLayout from "../../layouts/Framed";

function Beers() {
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const beers = useSelector(state => state.beers);
  const user = useSelector(state => state.authentication.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(beerActions.getAll(currentPage));
  }, [dispatch, currentPage]);

  console.log(currentPage, offset);

  return (
    <FramedLayout userName={user}>
      <div style={{ margin: "2rem" }}>
        <BeerFilter/>
        <BeerList beers={beers} />
      </div>
        <Paginator
        totalRecords={325}
        pageLimit={15}
        pageNeighbours={0}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />
    </FramedLayout>
  );
}

export { Beers };
