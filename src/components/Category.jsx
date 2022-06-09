import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";

function Category() {
  return (
    <List>
      <div>
        <FaPizzaSlice />
        <h3>Italian</h3>
      </div>
      <div>
        <FaHamburger />
        <h3>American</h3>
      </div>
      <div>
        <GiNoodles />
        <h3>Thai</h3>
      </div>
      <div>
        <GiChopsticks />
        <h3>Korean</h3>
      </div>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

export default Category;
