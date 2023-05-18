import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCart } from "../../contexts/CartContextProvider";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { useAuth } from "../../contexts/AuthContextProvider";

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();

  const navigate = useNavigate();

  const {
    user: { email },
  } = useAuth();

  console.log(email);

  React.useEffect(() => {
    getCart();
  }, []);

  // функция удаляет элемент из локального хранилища
  const cartCleaner = () => {
    // removeItem является методом для удаления из локального хранилища
    localStorage.removeItem("cart");
    getCart();
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Picture</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Count</TableCell>
              <TableCell align="right">SubPrice</TableCell>
              <TableCell align="right">-</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart?.products.map((row) => (
              <TableRow
                key={row.item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {/* item внутри объекта row содержит информацию о конкретном продукте и поэтому мы используем его */}
                  <img src={row.item.drawing} width="70" height="70" alt="kj" />
                </TableCell>
                <TableCell align="right">{row.item.name}</TableCell>
                <TableCell align="right">{row.item.type}</TableCell>
                <TableCell align="right">{row.item.descriptiom}</TableCell>
                <TableCell align="right">{row.item.price}</TableCell>
                <TableCell align="right">
                  {/* здесь при изменении инпута срабатывает функция которая передает новое значение и идентификатор конкретного продукта,value показывает текущее значение инпута ,а min указывает минимальное допустимое значение для инпута*/}
                  <input
                    type="number"
                    onChange={(e) =>
                      changeProductCount(e.target.value, row.item.id)
                    }
                    value={row.count}
                    min={1}
                  />
                </TableCell>
                <TableCell align="right">{row.subPrice}</TableCell>
                <TableCell align="right">
                  <button onClick={() => deleteCartProduct(row.item.id)}>
                    DELETE
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button onClick={cartCleaner}> BUY NOW FOR {cart?.totalPrice} $</Button>
      </TableContainer>
      <div id="paymentRight" style={{ margin: "0 auto" }}>
        <div id="visaInfo">
          <div id="infoLeft">
            <h3>Card Number</h3>
            <input type="text" id="visaNum" />
            <h3>Card Holder</h3>
            <input type="text" id="visaHolder" />
          </div>
          <div id="infoRight">
            <h3>Expires</h3>
            <input type="text" id="visaexp" />
            <h3>CVC</h3>
            <input type="text" name="" id="visaCvc" />
          </div>
        </div>

        <div id="pay">
          <h2>Total</h2>
          <h3>{cart?.totalPrice} $</h3>
        </div>
        <button
          onClick={() => {
            navigate("/");
            alert(`Вы обеднели на ${cart?.totalPrice} $`);
          }}
          id="buyBtn"
        >
          BUY
        </button>
      </div>
    </>
  );
}
